const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Meowforge Studio home">
          <img className="nav-logo" src="/meowforge-logo.png" alt="" />
          <span>MEOWFORGE<br />STUDIO</span>
        </a>
        <div className="nav-links">
          <a href="#games">Games</a>
          <a href="#studio">Studio</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#nullstride">Enter the void <Arrow /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-noise" aria-hidden="true" />
        <p className="eyebrow">Independent games / Hong Kong</p>
        <h1>GAMES THAT<br /><i>LEAVE A MARK.</i></h1>
        <div className="hero-bottom">
          <p>Meowforge Studio creates bold, kinetic worlds<br />for players who want to feel the impact.</p>
          <a className="circle-link" href="#games" aria-label="Explore our games">↓</a>
        </div>
        <p className="hero-side">SCROLL TO DISCOVER — 2026</p>
      </section>

      <section className="manifesto" id="studio">
        <p className="eyebrow">01 / Our signal</p>
        <div className="manifesto-copy">
          <h2>We forge <em>strange</em><br />things for the curious.</h2>
          <div className="studio-description">
            <p>Meowforge Studio is a Hong Kong-based indie game studio creating small but memorable interactive experiences.</p>
            <p>We believe play is not just entertainment. It is a way to breathe, reflect, and reconnect with life.</p>
          </div>
        </div>
      </section>

      <section className="games" id="games">
        <div className="section-head">
          <p className="eyebrow">02 / In development</p>
          <p>ONE WORLD IN MOTION</p>
        </div>
        <article className="game-card" id="nullstride">
          <img className="game-image" src="/nullstride-hero-web.jpg" alt="NULLSTRIDE protagonist lunging with a glowing red blade" draggable={false} />
          <div className="image-shade" aria-hidden="true" />
          <div className="art-watermark" aria-hidden="true">© MEOWFORGE STUDIO</div>
          <div className="game-card-top">
            <span>01</span><span>Action / Sci-fi</span><span>In development</span>
          </div>
          <div className="game-card-bottom">
            <div>
              <p className="game-kicker">MEOWFORGE PRESENTS</p>
              <h2>NULL<span>STRIDE</span></h2>
              <p className="game-description">Cut through a fractured city where every stride rewrites the rules of the fight.</p>
            </div>
            <a className="discover" href="#contact">Follow development <Arrow /></a>
          </div>
        </article>
      </section>

      <section className="feature-split">
        <div className="feature-image-wrap">
          <img src="/nullstride-dual-web.jpg" alt="NULLSTRIDE heroine poised with her red energy blade" draggable={false} />
          <div className="art-watermark" aria-hidden="true">© MEOWFORGE STUDIO</div>
          <p>NULLSTRIDE / KEY ART 02</p>
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Meet NULLSTRIDE</p>
          <h2>MOVE<br />BEYOND<br /><em>THE LINE.</em></h2>
          <div className="game-long-description">
            <p><strong>NULLSTRIDE</strong> is a fast-paced sci-fi action platformer combining precision melee combat with high-speed traversal.</p>
            <p>Run across walls, leap through massive ruined structures, and cut through corrupted machines as you descend into the mysterious <strong>Null Zone</strong> in search of its hidden Core.</p>
          </div>
          <div className="stat-row"><span>Genre</span><b>High-speed action</b></div>
          <div className="stat-row"><span>Status</span><b>Coming soon</b></div>
          <a className="text-link" href="#contact">Get on the signal <Arrow /></a>
        </div>
      </section>

      <section className="statement">
        <p className="eyebrow">Made with intent</p>
        <p className="statement-type">Play <em>outside</em><br />the expected.</p>
      </section>

      <footer id="contact">
        <div className="footer-brand">
          <img src="/meowforge-logo.png" alt="Meowforge Studio logo" />
          <p>MEOWFORGE<br />STUDIO</p>
        </div>
        <div className="footer-contact">
          <p className="eyebrow">Keep in touch</p>
          <p className="contact-soon">Contact channel<br />coming soon <Arrow /></p>
          <p className="footer-note">Follow future transmissions from<br />Meowforge Studio.</p>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MEOWFORGE STUDIO</span>
          <span>MADE FOR THE CURIOUS</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
