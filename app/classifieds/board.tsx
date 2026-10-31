'use client';

import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from 'react';

const API = 'https://www.downundervoices.com/api/audaisuki/board';

export const CATEGORIES: { id: string; ja: string; en: string; icon: string }[] = [
  { id: 'english', ja: '英語を学ぶ', en: 'Learn English', icon: '📚' },
  { id: 'exchange', ja: '言語交換', en: 'Language exchange', icon: '🗣️' },
  { id: 'parttime', ja: 'アルバイト', en: 'Part-time jobs', icon: '💼' },
  { id: 'domestic', ja: '家事・ベビーシッター', en: 'Domestic jobs', icon: '🧹' },
  { id: 'friends', ja: '友達', en: 'Friendship', icon: '🤝' },
  { id: 'travel', ja: '旅行仲間', en: 'Travel buddies', icon: '🚐' },
  { id: 'japanese', ja: '日本人を探しています', en: 'Looking for Japanese speakers', icon: '🇯🇵' },
  { id: 'housing', ja: '住まい', en: 'Housing', icon: '🏠' },
  { id: 'sale', ja: '売ります・買います', en: 'Buy & sell', icon: '🛍️' },
];

const REGIONS: [string, string][] = [
  ['australia', '全国 / Australia'],
  ['nsw', 'NSW / Sydney'],
  ['vic', 'VIC / Melbourne'],
  ['qld', 'QLD / Brisbane'],
  ['gc', 'QLD / Gold Coast'],
  ['wa', 'WA / Perth'],
  ['sa', 'SA / Adelaide'],
  ['act', 'ACT / Canberra'],
  ['tas', 'TAS / Tasmania'],
  ['nt', 'NT / Darwin'],
  ['online', 'オンライン / Online'],
];

type Post = { id: string; category: string; region: string; title: string; body: string; name: string; contact: string; createdAt: string };

const catOf = (id: string) => CATEGORIES.find((c) => c.id === id);
const regionOf = (id: string) => REGIONS.find(([r]) => r === id)?.[1] || id;
const when = (iso: string) => new Intl.DateTimeFormat('ja-JP', { month: 'numeric', day: 'numeric' }).format(new Date(iso));

export default function Board() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [cat, setCat] = useState('all');
  const [region, setRegion] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ category: 'exchange', region: 'australia', title: '', body: '', name: '', contact: '', website: '' });
  const [agree, setAgree] = useState(false);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');
  const [deleteCode, setDeleteCode] = useState('');
  const [reported, setReported] = useState<string[]>([]);

  const load = () =>
    fetch(API)
      .then((r) => r.json())
      .then((d: { posts: Post[] }) => setPosts(d.posts || []))
      .catch(() => setPosts([]));

  useEffect(() => {
    load();
    const c = new URLSearchParams(window.location.search).get('c');
    if (c && catOf(c)) setCat(c);
  }, []);

  const shown = useMemo(
    () => (posts || []).filter((p) => (cat === 'all' || p.category === cat) && (region === 'all' || p.region === region)),
    [posts, cat, region],
  );

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!agree) {
      setMessage('利用規約に同意してください / Please accept the posting rules');
      return;
    }
    setSending(true);
    setMessage('');
    try {
      const r = await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'create', ...form }) });
      const d = await r.json();
      if (d.ok) {
        setDeleteCode(`${d.post.id} / ${d.deleteCode}`);
        setForm({ ...form, title: '', body: '' });
        setShowForm(false);
        setCat(form.category);
        load();
      } else setMessage(d.error || 'エラー / Error');
    } catch {
      setMessage('送信できませんでした / Could not send — please try again');
    }
    setSending(false);
  }

  async function report(id: string) {
    if (reported.includes(id)) return;
    if (!window.confirm('この投稿を不適切として報告しますか？ / Report this post as inappropriate?')) return;
    await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'report', id }) }).catch(() => null);
    setReported([...reported, id]);
  }

  async function removeOwn() {
    const id = window.prompt('投稿ID / Post ID');
    const code = id && window.prompt('削除コード / Delete code');
    if (!id || !code) return;
    const r = await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'delete', id, code }) }).then((x) => x.json()).catch(() => ({ ok: false }));
    window.alert(r.ok ? '削除しました / Deleted' : '削除できませんでした / Could not delete');
    load();
  }

  const set = (k: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="board">
      <div className="boardNotice">
        <b>ご注意 / Please note</b>
        <p>
          掲示板の投稿は投稿者個人の意見・情報であり、AU大好きの意見や保証ではありません。前払い・高額報酬・ビザ販売などの詐欺にご注意ください。お金を先に送らない、初めて会うときは人の多い場所で。
        </p>
        <p className="en">
          Posts are the views and information of the people who post them, not AU大好き. Watch out for scams — never pay money up front,
          and meet in public places. Posts disappear after 30 days.
        </p>
      </div>

      {deleteCode && (
        <div className="boardSuccess">
          ✅ 掲載されました！ / Your post is live.<br />
          自分で削除するときのコード（保存してください）/ Your delete code — keep it: <b>{deleteCode}</b>
        </div>
      )}

      <div className="boardTabs">
        <button className={cat === 'all' ? 'on' : ''} onClick={() => setCat('all')}>すべて / All</button>
        {CATEGORIES.map((c) => (
          <button key={c.id} className={cat === c.id ? 'on' : ''} onClick={() => setCat(c.id)}>
            {c.icon} {c.ja}<small>{c.en}</small>
          </button>
        ))}
      </div>

      <div className="boardBar">
        <select value={region} onChange={(e) => setRegion(e.target.value)} aria-label="Region">
          <option value="all">📍 全地域 / All regions</option>
          {REGIONS.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
        </select>
        <button className="boardPostBtn" onClick={() => { setShowForm(!showForm); setForm({ ...form, category: cat === 'all' ? form.category : cat }); }}>
          ＋ 投稿する / Post
        </button>
      </div>

      {showForm && (
        <form className="boardForm" onSubmit={submit}>
          <label>カテゴリー / Category
            <select value={form.category} onChange={set('category')}>
              {CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.icon} {c.ja} / {c.en}</option>)}
            </select>
          </label>
          <label>地域 / Region
            <select value={form.region} onChange={set('region')}>
              {REGIONS.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
            </select>
          </label>
          <label className="wide">タイトル / Title<input value={form.title} onChange={set('title')} maxLength={80} required /></label>
          <label className="wide">内容 / Details<textarea value={form.body} onChange={set('body')} maxLength={1500} rows={5} required /></label>
          <label>お名前（ニックネーム可）/ Name or nickname<input value={form.name} onChange={set('name')} maxLength={40} /></label>
          <label>連絡先 / Contact (LINE ID, Instagram, email)<input value={form.contact} onChange={set('contact')} maxLength={120} required /></label>
          <input className="hp" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} aria-hidden="true" />
          <label className="wide check">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            投稿内容は自分の責任であり、違法・差別的・詐欺的な内容は投稿しません。/ My post is my own responsibility; no illegal, hateful or scam content.
          </label>
          {message && <p className="boardError">{message}</p>}
          <button type="submit" disabled={sending}>{sending ? '送信中… / Sending…' : '掲載する / Publish'}</button>
        </form>
      )}

      {posts === null ? (
        <p className="boardEmpty">読み込み中… / Loading…</p>
      ) : shown.length === 0 ? (
        <p className="boardEmpty">まだ投稿がありません。最初の投稿をしてみませんか？ / No posts yet — be the first!</p>
      ) : (
        <div className="boardList">
          {shown.map((p) => {
            const c = catOf(p.category);
            return (
              <article key={p.id}>
                <div className="boardMeta">
                  <span>{c?.icon} {c?.ja}</span>
                  <span>📍 {regionOf(p.region)}</span>
                  <time>{when(p.createdAt)}</time>
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div className="boardFoot">
                  <span>👤 {p.name}</span>
                  <span>✉️ {p.contact}</span>
                  <button onClick={() => report(p.id)} disabled={reported.includes(p.id)}>
                    {reported.includes(p.id) ? '報告済み / Reported' : '⚠️ 報告 / Report'}
                  </button>
                </div>
                <small className="boardId">ID: {p.id}</small>
              </article>
            );
          })}
        </div>
      )}
      <button className="boardDelete" onClick={removeOwn}>自分の投稿を削除 / Delete my post</button>
    </div>
  );
}
