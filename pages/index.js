import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export default function Home () {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="user-scalable=no,width=device-width,initial-scale=1" />
        <title>Eduardo GC</title>
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://sn3301files.storage.live.com/y4mVAlAPBqzCKKcVhq_gxzLDd9MPrh_QzMBbMLFaEvnGaYSJzb7dnoW1C3HaHLBugvBw0t_X2MjkKTroKx2ee31pz30mpuI1AZmDb4QD87Il_hENDhLZvRc2GuDJtbg1IwYoM2MeiZA9POSnTFqsran3Y-yTnOjYXZ2kn-jwU8lNYlEy9oN5mCMH_8B-5iQC-PR?width=1920&height=1080&cropmode=none" />
        <meta property="og:title" content="Eduardo GC" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8355478857108657"
     crossOrigin="anonymous"></script>
      </Head>
      <Navbar />
      <main className="theme-12 12-theme">
        <div className="container smartpage-container">
          <header><img src="https://sn3301files.storage.live.com/y4mVAlAPBqzCKKcVhq_gxzLDd9MPrh_QzMBbMLFaEvnGaYSJzb7dnoW1C3HaHLBugvBw0t_X2MjkKTroKx2ee31pz30mpuI1AZmDb4QD87Il_hENDhLZvRc2GuDJtbg1IwYoM2MeiZA9POSnTFqsran3Y-yTnOjYXZ2kn-jwU8lNYlEy9oN5mCMH_8B-5iQC-PR?width=1920&height=1080&cropmode=none" className="avatar" alt=""
            title="Eduardo GC" />
            <div className="bio-title">
              <h1 align="center">Eduardo GC</h1>
              <div className="bio-description">
                <p>Meus links importantes estão aqui!</p>
              </div>
            </div>
          </header>
          <ul className="messengers blocks-num-0"></ul>
          <ul className="rich-links">
            <li id="block0" className="links-block">
              <div className="block-item layout-text"></div>
              {/* <a href="https://t.me/geceduardo" title="[POR TEMPO LIMITADO] Invista em BDM Digital comigo e receba uma mega bonificação!"
                className="block-item layout-button" target="_blank">
                <div className="block-content">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab"
                  data-icon="amazon" className="svg-inline--fa fa-amazon fa-w-14 fa-block-icon" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor"
                    d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z">
                  </path>
                </svg>
                <span>[POR TEMPO LIMITADO] Compre BDM Digital com uma mega bonificação!</span></div>
              </a> */}
            </li>
            {/* <li id="block1" className="links-block">
              <a href="https://amzn.to/3gen8Jz" title="[POR TEMPO LIMITADO] Kindle Preto com desconto!"
                className="block-item layout-button" target="_blank">
                <div className="block-content"><svg aria-hidden="true" focusable="false" data-prefix="fab"
                  data-icon="amazon" className="svg-inline--fa fa-amazon fa-w-14 fa-block-icon" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor"
                    d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z">
                  </path>
                </svg><span>[POR TEMPO LIMITADO] Kindle Preto com desconto!</span></div>
              </a>
            </li>
            <li id="block2" className="links-block">
              <a href="https://amzn.to/3ivOQTD" title="[POR TEMPO LIMITADO] Kindle Branco com desconto!"
                className="block-item layout-button" target="_blank">
                <div className="block-content"><svg aria-hidden="true" focusable="false" data-prefix="fab"
                  data-icon="amazon" className="svg-inline--fa fa-amazon fa-w-14 fa-block-icon" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor"
                    d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z">
                  </path>
                </svg><span>[POR TEMPO LIMITADO] Kindle Branco com desconto!</span></div>
              </a>
            </li> */}
            <li id="block3" className="links-block">
              <div className="block-item layout-text"></div>
            </li>
            <li id="block4" className="links-block"><a href="https://youtu.be/jTQSRIjUgyE" target="_blank"
              title="Você ainda faz estimativas? Descubra um método mais confiável!"
              className="block-item layout-card play-button" style={{ backgroundImage: '' }} rel="noreferrer">
              <div className="button-image"><img src="https://img.youtube.com/vi/jTQSRIjUgyE/maxresdefault.jpg"
                alt="" /></div>
              <div className="block-content">
                <div>Você ainda faz estimativas? Descubra um método mais confiável!</div>
              </div>
            </a></li>
            <li id="block5" className="links-block">
              <div className="block-item layout-text">
                <h2 className="block-title">Mais do canal!</h2>
              </div>
            </li>
            <li id="block6" className="links-block"><a href="https://youtu.be/J7De4B9eTx0" target="_blank"
              title="Aprendizados, senso de comunidade e novo ingrediente no meu café!"
              className="block-item layout-button-thumbnail play-button" style={{ backgroundImage: '' }} rel="noreferrer">
              <div className="thumbnail"
                style={{ backgroundImage: 'url(\'https://img.youtube.com/vi/J7De4B9eTx0/maxresdefault.jpg\')' }}></div>
              <div className="block-content">
                <div>Aprendizados, senso de comunidade e novo ingrediente no meu café!</div>
              </div>
            </a></li>
            <li id="block7" className="links-block"><a href="https://youtu.be/E_a3v4FQ82U" target="_blank"
              title="Os 3 segredos pra aprender qualquer habilidade! | Eduardo GC"
              className="block-item layout-button-thumbnail play-button" style={{ backgroundImage: '' }} rel="noreferrer">
              <div className="thumbnail"
                style={{ backgroundImage: 'url(\'https://img.youtube.com/vi/E_a3v4FQ82U/maxresdefault.jpg\')' }}></div>
              <div className="block-content">
                <div>Os 3 segredos pra aprender qualquer habilidade! | Eduardo GC</div>
              </div>
            </a></li>
            <li id="block8" className="links-block"><a href="https://www.youtube.com/watch?v=HlxzO3m4wlw&list=PLIwitEaTf1XhWhjCqz3S_DQMN7xuMeL03" title="PLAYLIST" target="_blank"
              className="block-item layout-button-image-bg play-button"
              style={{ backgroundImage: 'url(\'https://img.youtube.com/vi/HlxzO3m4wlw/maxresdefault.jpg\')' }} rel="noreferrer">
              <div className="block-content">
                <div>PLAYLIST</div><strong className="block-label">PROGRAMAÇÃO</strong>
              </div>
            </a></li>
            <li id="block9" className="links-block"><a href="https://youtube.com/playlist?list=PLIwitEaTf1XgF8zxFuDrCViDWEkexbsbe" title="PLAYLIST" target="_blank"
              className="block-item layout-button-image-bg"
              style={{ backgroundImage: 'url(\'https://i.ytimg.com/vi/iH7jcznbU3c/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLCL0CDOYk_JvqgpEoG_0oHREkn-Vw&amp;days_since_epoch=18786\')' }} rel="noreferrer">
              <div className="block-content">
                <div>PLAYLIST</div><strong className="block-label" style={{ backgroundColor: '#ffde59' }}>PRODUTOS
                  DIGITAIS</strong>
              </div>
            </a></li>
          </ul>

        </div>
      </main>
      <Footer />
    </div>
  )
}
