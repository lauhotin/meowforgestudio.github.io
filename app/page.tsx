"use client";

import { useEffect, useRef, useState } from "react";

type Language = "en" | "zh-Hant";
const Arrow = () => <span aria-hidden="true">↗</span>;
const times = ["00:06", "00:12", "00:18", "00:23.5", "00:31", "00:43.5"];
const copy = {
  en: {
    studio: "MEOMI FORGE GAME STUDIO", game: "NULLSTRIDE", home: "MEOMI FORGE GAME STUDIO home",
    games: "Games", about: "Studio", contact: "Contact", enter: "Enter the void", navigation: "Primary navigation",
    location: "Independent games / Hong Kong", heroA: "GAMES THAT", heroB: "LEAVE A MARK.",
    intro: "MEOMI FORGE GAME STUDIO creates bold, kinetic worlds for players who want to feel the impact.",
    explore: "Explore our games", scroll: "SCROLL TO DISCOVER — 2026", signal: "01 / Our signal",
    manifestoA: "We forge", manifestoAccent: "strange", manifestoB: "things for the curious.",
    studioA: "MEOMI FORGE GAME STUDIO is a Hong Kong-based indie game studio creating small but memorable interactive experiences.",
    studioB: "We believe play is not just entertainment. It is a way to breathe, reflect, and reconnect with life.",
    development: "02 / In development", motion: "ONE WORLD IN MOTION", genre: "Action / Sci-fi", status: "In development",
    presents: "MEOMI FORGE GAME STUDIO PRESENTS", teaser: "Cut through a fractured city where every stride rewrites the rules of the fight.",
    meet: "Meet NULLSTRIDE", moveA: "MOVE", moveB: "BEYOND", moveC: "THE LINE.",
    descriptionA: " is a fast-paced sci-fi action platformer combining precision melee sword combat with high-speed, fluid parkour.",
    descriptionB: "Leap between massive structures, run along walls, and cut through corrupted machines with your blade. Venture deeper into the mysterious ",
    zone: "Null Zone", descriptionC: " in search of its hidden ", core: "Core", descriptionD: ", and uncover the secrets of this forbidden place.",
    genreLabel: "Genre", genreValue: "High-speed action", statusLabel: "Status", soon: "Coming soon", connect: "Get on the signal",
    coverAlt: "NULLSTRIDE key art featuring the silver-haired heroine and her red energy blade", poseAlt: "NULLSTRIDE heroine crouching with a glowing red blade",
    art: "NULLSTRIDE / CHARACTER ART", gallery: "03 / Gameplay", galleryTitle: "Every stride. In motion.",
    galleryIntro: "Actual gameplay from NULLSTRIDE. A closer look at high-speed traversal and blade combat.",
    work: "Development footage · Work in progress", enlarge: "View full screenshot", screenshot: "Gameplay screenshot", of: "of",
    captions: ["Across the megastructure", "Into the corridor", "Vertical ascent", "Along the wall", "Above the city", "Blade impact"],
    screenshotAlts: ["The heroine on an elevated industrial platform", "The heroine running through an industrial corridor", "The heroine scaling a tall orange wall", "The heroine wall-running beside an industrial structure", "The heroine traversing the side of a high-rise structure", "The heroine striking approaching mechanical enemies with her blade"],
    close: "Close screenshot", previous: "Previous screenshot", next: "Next screenshot", keyboard: "Use ← → to browse · Esc to close",
    intent: "Made with intent", statementA: "Play", statementAccent: "outside", statementB: "the expected.",
    touch: "Keep in touch", contactSoon: "Contact channel", contactSoonB: "coming soon", future: "Follow future transmissions from MEOMI FORGE GAME STUDIO.",
    curious: "MADE FOR THE CURIOUS", top: "Back to top ↑",
  },
  "zh-Hant": {
    studio: "喵米遊戲工坊", game: "零域之痕", home: "喵米遊戲工坊首頁",
    games: "遊戲", about: "關於工坊", contact: "聯絡", enter: "踏入零域", navigation: "主要導覽",
    location: "獨立遊戲 / 香港", heroA: "打造遊戲", heroB: "留下深刻印記。",
    intro: "喵米遊戲工坊打造大膽而充滿動感的世界，為渴望感受每次衝擊的玩家而生。",
    explore: "探索我們的遊戲", scroll: "向下探索 — 2026", signal: "01 / 我們的理念",
    manifestoA: "為好奇的你", manifestoAccent: "鍛造", manifestoB: "不一樣的世界。",
    studioA: "喵米遊戲工坊是一間立足香港的獨立遊戲工作室，致力創造小巧卻令人難忘的互動體驗。",
    studioB: "我們相信，遊戲不只是娛樂，更是讓人喘息、反思，並與生活重新連結的方式。",
    development: "02 / 開發中", motion: "一個持續躍動的世界", genre: "動作 / 科幻", status: "開發中",
    presents: "喵米遊戲工坊 呈獻", teaser: "穿越支離破碎的城市，讓每一步都改寫戰鬥的規則。",
    meet: "認識《零域之痕》", moveA: "疾行", moveB: "突破", moveC: "界限。",
    descriptionA: " 是一款節奏明快的科幻動作平台遊戲，融合精準凌厲的近戰劍術與高速流暢的跑酷動作。",
    descriptionB: "在巨型建築之間飛躍穿梭、沿著牆壁疾走，以手中利刃斬破受侵蝕的機械敵人。隨著探索不斷深入，玩家將逐步踏入神秘的",
    zone: "「零域」（Null Zone）", descriptionC: "，尋找隱藏於深處的", core: "「核心」（Core）", descriptionD: "，揭開這片禁忌之地背後的秘密。",
    genreLabel: "類型", genreValue: "高速動作", statusLabel: "狀態", soon: "敬請期待", connect: "接收最新消息",
    coverAlt: "《零域之痕》主視覺：銀髮女主角與紅色能量劍", poseAlt: "《零域之痕》女主角手持紅色能量劍，蓄勢待發",
    art: "零域之痕 / 角色插畫", gallery: "03 / 實機遊玩畫面", galleryTitle: "每一步，皆是動力。",
    galleryIntro: "《零域之痕》實際遊玩截圖，近距離感受高速跑酷與刀劍戰鬥。",
    work: "開發中畫面 · 非最終版本", enlarge: "放大截圖", screenshot: "實機截圖", of: "/",
    captions: ["穿越巨型建築", "深入通道", "垂直攀升", "沿壁疾走", "飛越城市", "利刃衝擊"],
    screenshotAlts: ["女主角站在高架工業平台上", "女主角穿越工業通道", "女主角攀上橙色高牆", "女主角沿著工業建築的牆壁疾走", "女主角在高層建築外側穿梭", "女主角揮劍斬向接近的機械敵人"],
    close: "關閉截圖", previous: "上一張截圖", next: "下一張截圖", keyboard: "使用 ← → 瀏覽 · Esc 關閉",
    intent: "用心創作", statementA: "跳出", statementAccent: "框架", statementB: "玩出想像。",
    touch: "保持聯繫", contactSoon: "聯絡方式", contactSoonB: "即將公開", future: "敬請留意喵米遊戲工坊的最新消息。",
    curious: "為好奇的你而造", top: "返回頂部 ↑",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [activeShot, setActiveShot] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const c = copy[language];

  useEffect(() => {
    const syncLanguage = () => {
      const requested = new URLSearchParams(window.location.search).get("lang");
      let saved: string | null = null;
      try { saved = localStorage.getItem("meomi-language"); } catch { /* Storage may be disabled. */ }
      setLanguage((requested === "en" || requested === "zh-Hant") ? requested : saved === "zh-Hant" ? "zh-Hant" : "en");
    };
    syncLanguage();
    window.addEventListener("popstate", syncLanguage);
    return () => window.removeEventListener("popstate", syncLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${c.studio} — ${c.game}`;
  }, [language, c]);

  function selectLanguage(next: Language) {
    setLanguage(next);
    try { localStorage.setItem("meomi-language", next); } catch { /* The URL still retains the choice. */ }
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
  }

  function openShot(index: number) {
    setActiveShot(index);
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
  }

  function stepShot(direction: number) {
    setActiveShot((current) => (current + direction + times.length) % times.length);
  }

  return (
    <main data-language={language}>
      <nav className="site-nav" aria-label={c.navigation}>
        <a className="wordmark" href="#top" aria-label={c.home}>
          <img className="nav-logo" src="/meowforge-logo.png" alt="" />
          <span>{language === "en" ? <>MEOMI FORGE<br />GAME STUDIO</> : c.studio}</span>
        </a>
        <div className="nav-links"><a href="#games">{c.games}</a><a href="#studio">{c.about}</a><a href="#contact">{c.contact}</a></div>
        <div className="nav-actions">
          <div className="language-switch" role="group" aria-label="Language / 語言">
            <button type="button" lang="en" aria-pressed={language === "en"} onClick={() => selectLanguage("en")}>EN</button><span aria-hidden="true">/</span>
            <button type="button" lang="zh-Hant" aria-pressed={language === "zh-Hant"} onClick={() => selectLanguage("zh-Hant")}>繁中</button>
          </div>
          <a className="nav-cta" href="#nullstride">{c.enter} <Arrow /></a>
        </div>
      </nav>
      <section className="hero" id="top">
        <div className="hero-noise" aria-hidden="true" /><p className="eyebrow">{c.location}</p>
        <h1>{c.heroA}<br /><i>{c.heroB}</i></h1>
        <div className="hero-bottom"><p>{c.intro}</p><a className="circle-link" href="#games" aria-label={c.explore}>↓</a></div>
        <p className="hero-side">{c.scroll}</p>
      </section>
      <section className="manifesto" id="studio">
        <p className="eyebrow">{c.signal}</p>
        <div className="manifesto-copy"><h2>{c.manifestoA} <em>{c.manifestoAccent}</em><br />{c.manifestoB}</h2><div className="studio-description"><p>{c.studioA}</p><p>{c.studioB}</p></div></div>
      </section>
      <section className="games" id="games">
        <div className="section-head"><p className="eyebrow">{c.development}</p><p>{c.motion}</p></div>
        <article className="game-card" id="nullstride">
          <div className="game-card-top"><span>01</span><span>{c.genre}</span><span>{c.status}</span></div>
          <div className="game-cover-wrap">
            <img className="game-image" src="/images/nullstride-cover.webp" alt={c.coverAlt} width={1672} height={941} draggable={false} />
            <div className="art-watermark" aria-hidden="true">© {c.studio}</div><div className="art-shield" aria-hidden="true" />
          </div>
          <div className="game-card-bottom"><div><p className="game-kicker">{c.presents}</p><h2>{language === "en" ? <>NULL<span>STRIDE</span></> : <>零域<span>之痕</span></>}</h2><p className="game-description">{c.teaser}</p></div><a className="discover" href="#gameplay">{c.gallery.replace("03 / ", "")} <Arrow /></a></div>
        </article>
      </section>
      <section className="feature-split">
        <div className="feature-image-wrap"><img src="/images/nullstride-pose.webp" alt={c.poseAlt} width={1087} height={1447} loading="lazy" draggable={false} /><div className="art-watermark" aria-hidden="true">© {c.studio}</div><div className="art-shield" aria-hidden="true" /><p>{c.art}</p></div>
        <div className="feature-copy">
          <p className="eyebrow">{c.meet}</p><h2>{c.moveA}<br />{c.moveB}<br /><em>{c.moveC}</em></h2>
          <div className="game-long-description"><p><strong>{language === "en" ? c.game : "《零域之痕》（NULLSTRIDE）"}</strong>{c.descriptionA}</p><p>{c.descriptionB}<strong>{c.zone}</strong>{c.descriptionC}<strong>{c.core}</strong>{c.descriptionD}</p></div>
          <div className="stat-row"><span>{c.genreLabel}</span><b>{c.genreValue}</b></div><div className="stat-row"><span>{c.statusLabel}</span><b>{c.soon}</b></div><a className="text-link" href="#contact">{c.connect} <Arrow /></a>
        </div>
      </section>
      <section className="gameplay" id="gameplay" aria-labelledby="gameplay-title">
        <div className="section-head"><p className="eyebrow">{c.gallery}</p><p>{c.work}</p></div>
        <div className="gallery-intro"><h2 id="gameplay-title">{c.galleryTitle}</h2><p>{c.galleryIntro}</p></div>
        <div className="screenshot-grid">{times.map((time, index) => (
          <figure key={time}><button type="button" className="screenshot-button" onClick={() => openShot(index)} aria-label={`${c.enlarge} ${index + 1}: ${c.captions[index]}`} aria-haspopup="dialog"><img src={`/images/gameplay-0${index + 1}.webp`} alt={c.screenshotAlts[index]} width={2560} height={1440} loading="lazy" /><span className="screenshot-expand" aria-hidden="true">↗</span></button><figcaption><span><b>0{index + 1}</b> {c.captions[index]}</span><span>{time}</span></figcaption></figure>
        ))}</div><p className="gallery-note">{c.work}</p>
      </section>
      <dialog ref={dialog} className="screenshot-dialog" aria-labelledby="screenshot-title" onClose={() => { document.body.style.overflow = ""; }} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); stepShot(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); stepShot(1); }
      }}>
        <div className="lightbox-content"><div className="lightbox-head"><p id="screenshot-title">{c.game} / {c.screenshot} {activeShot + 1} {c.of} {times.length}</p><button autoFocus type="button" onClick={() => dialog.current?.close()} aria-label={c.close}>×</button></div><img src={`/images/gameplay-0${activeShot + 1}.webp`} alt={c.screenshotAlts[activeShot]} width={2560} height={1440} /><div className="lightbox-footer"><button type="button" onClick={() => stepShot(-1)} aria-label={c.previous}>←</button><p aria-live="polite">{c.captions[activeShot]} <span>{times[activeShot]}</span></p><button type="button" onClick={() => stepShot(1)} aria-label={c.next}>→</button></div><p className="lightbox-hint">{c.keyboard}</p></div>
      </dialog>
      <section className="statement"><p className="eyebrow">{c.intent}</p><p className="statement-type">{c.statementA} <em>{c.statementAccent}</em><br />{c.statementB}</p></section>
      <footer id="contact"><div className="footer-brand"><img src="/meowforge-logo.png" alt="" /><p>{language === "en" ? <>MEOMI FORGE<br />GAME STUDIO</> : c.studio}</p></div><div className="footer-contact"><p className="eyebrow">{c.touch}</p><p className="contact-soon">{c.contactSoon}<br />{c.contactSoonB} <Arrow /></p><p className="footer-note">{c.future}</p></div><div className="footer-bottom"><span>© 2026 {c.studio}</span><span>{c.curious}</span><a href="#top">{c.top}</a></div></footer>
    </main>
  );
}

