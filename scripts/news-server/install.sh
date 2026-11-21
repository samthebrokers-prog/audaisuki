#!/usr/bin/env bash
# Installs the free AU大好き news job on our BinaryLane server (Ubuntu/Debian, run as root).
# No paid AI, no API keys: translation is done offline with Argos Translate.
#
#   bash install.sh /home/<site>/public_html/audaisuki-news.json
#
# Afterwards the file is refreshed every 3 hours by cron. Log: /var/log/audaisuki-news.log
set -euo pipefail

OUT="${1:?Give the public file path, e.g. /home/example.com/public_html/audaisuki-news.json}"
APP=/opt/audaisuki-news
HERE="$(cd "$(dirname "$0")" && pwd)"

echo "== 1/5 Python tools"
if command -v apt-get >/dev/null; then
  apt-get update -qq && apt-get install -y -qq python3 python3-venv python3-pip >/dev/null
fi

echo "== 2/5 Private Python environment in $APP"
mkdir -p "$APP"
python3 -m venv "$APP/venv"
"$APP/venv/bin/pip" install -q --upgrade pip
# CPU-only PyTorch keeps the download small (no graphics-card libraries).
"$APP/venv/bin/pip" install -q torch --index-url https://download.pytorch.org/whl/cpu
"$APP/venv/bin/pip" install -q argostranslate

echo "== 3/5 English -> Japanese translation model (free, offline)"
"$APP/venv/bin/argospm" update
"$APP/venv/bin/argospm" install translate-en_ja

echo "== 4/5 News script + first run"
install -m 755 "$HERE/audaisuki_news.py" "$APP/audaisuki_news.py"
mkdir -p "$(dirname "$OUT")"
"$APP/venv/bin/python" "$APP/audaisuki_news.py" --out "$OUT"
# Web server user must be able to read it.
chmod 644 "$OUT"
OWNER="$(stat -c %U "$(dirname "$OUT")")"; chown "$OWNER":"$OWNER" "$OUT" 2>/dev/null || true

echo "== 5/5 Cron: every 3 hours"
LINE="7 */3 * * * $APP/venv/bin/python $APP/audaisuki_news.py --out $OUT >> /var/log/audaisuki-news.log 2>&1"
( crontab -l 2>/dev/null | grep -v 'audaisuki_news.py' ; echo "$LINE" ) | crontab -
crontab -l | grep audaisuki_news.py

echo "Done. Test it: head -c 600 $OUT"
