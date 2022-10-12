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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8870TJH6N0"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8870TJH6N0');
        </script>
      </Head>
      <Navbar />
      <main className="theme-12 12-theme">
        <div className="container smartpage-container">
          <header><img src="https://sat02pap003files.storage.live.com/y4mRINOsH9pAOR6auEavKbgASb7625jW1ElmOEAsGJMYiEBS6_AYvnK52RNUUI79EunqArzTAgrLvdy9KpZWNy3C2jaZPmWsWVAUf6hKfPpT994MK94rjQ3KRYn-GzBzF9Nq6KgB9L3SpUKUKkwZsaPgkP_dEOSsV4XZOnEmwyhM2N9LIvJN9URfHnweKAwPjSZ?width=1920&height=1080&cropmode=none" className="avatar" alt=""
            title="Eduardo GC" />
            <div className="bio-title">
              <h1 align="center">Eduardo GC</h1>
              <div className="bio-description">
                <p>Meus links importantes estão aqui!</p>
              </div>
            </div>
          </header>
          <div className="mt-6 pb-16 lg:pb-0 w-4/5 md:w-1/5 mx-auto flex flex-wrap items-center justify-between">
          <a className="link" href="https://github.com/eduardogc" data-tippy-content="@github_handle">
            <svg
              className="h-6 fill-current text-white hover:text-gray-200"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a className="link" href="https://instagram.com/soueduardogc" data-tippy-content="@instagram_handle">
            <svg
              className="h-6 fill-current text-white hover:text-gray-200"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram</title>
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
          </a>
          <a className="link" href="https://www.youtube.com/channel/UC2-FsOpGAR4_Cumpyo30bTQ/" data-tippy-content="@youtube_handle">
            <svg
              className="h-6 fill-current text-white hover:text-gray-200"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>YouTube</title>
              <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
            </svg>
          </a>
          <a className="link" href="https://www.tiktok.com/@soueduardogc" data-tippy-content="@tiktok_handle">
            <svg
              className="h-6 fill-current text-white hover:text-gray-200"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>TikTok</title>
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
        </div>
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
