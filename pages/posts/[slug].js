import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Head from 'next/head'
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

const Content = ({ content, data }) => {

  const [siteURL, setSiteURL] = useState('')
  const frontmatter = data;

  const formatDate = (date) => {
    const data = new Date(date),
      dia = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0' + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0' + mes : mes,
      anoF = data.getFullYear();
    return `${diaF}/${mesF}/${anoF}`;
  }

  if (process.browser) {
    var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight',
      progress = document.querySelector('#progress'),
      scroll;
    var scrollpos = window.scrollY;
    var header = document.getElementById("header");

    document.addEventListener('scroll', function () {

      /*Refresh scroll % width*/
      scroll = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
      progress.style.setProperty('--scroll', scroll + '%');

      /*Apply classes for slide in bar*/
      scrollpos = window.scrollY;

      if (scrollpos > 100) {
        header.classList.remove("hidden");
        header.classList.remove("fadeOutUp");
        header.classList.add("slideInDown");
      } else {
        header.classList.remove("slideInDown");
        header.classList.add("fadeOutUp");
        header.classList.add("hidden");
      }
    });
  }

  function readingTime() {
    if (process.browser) {
      const text = document.getElementById("blog-main-content").innerText;
      const wpm = 225;
      const words = text.trim().split(/\s+/).length;
      const time = Math.ceil(words / wpm);
      return time
    } else {
      return 0;
    }
  }

  useEffect(() => {
    var disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = '12156509-0d21-4da7-8422-1e8e34fa7fc0';
    };
    (function () {
      var d = document, s = d.createElement('script');
      s.src = 'https://eduardogc-dev.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
    setSiteURL(window.location.href)
  }, [])

  const customCSS = `.smooth {transition: box-shadow 0.3s ease-in-out;}
  ::selection{background - color: aliceblue}`

  return (
    <>
      <Head>
        <meta charSset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>{frontmatter.title}</title>
        <meta name="author" content="name" />
        <meta name="description" content="description here" />
        <meta name="keywords" content="keywords,here" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" rel="stylesheet" />
        <style>
          {customCSS}
        </style>
      </Head>
      <div className="bg-white leading-normal tracking-normal">

        <Navbar />

        <div id="header" className="bg-white fixed w-full z-10 top-0 hidden animated" style={{ opacity: .95 }}>
          <div className="bg-white">
            <div className="flex flex-wrap items-center content-center">
              <div className="flex w-1/2 justify-start text-white font-bold">
                <a className="flex text-gray-900 no-underline hover:text-gray-900 hover:no-underline pl-2" href="#">
                  📝 <span className="hidden w-0 md:w-auto md:block pl-1">Eduardo GC Blog</span>
                </a>
              </div>
              <div className="flex w-1/2 justify-end content-center">
                <p className="hidden sm:block mr-3 text-center h-14 p-4 text-xs"><span className="pr-2">Compartilhe</span> 👉</p>
                <a className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4" href={`https://twitter.com/intent/tweet?url=${siteURL}`} style={{ backgroundColor: '#33b1ff' }}>
                  <svg className="fill-current text-white h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path></svg>
                </a>
                <a className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4" href={`https://twitter.com/intent/tweet?url=${siteURL}`} style={{ backgroundColor: '#005e99' }}>
                  <svg className="fill-current text-white h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path></svg>
                </a>
              </div>
            </div>

          </div>
          <div id="progress" className="h-1 bg-white shadow" style={{ background: 'linear-gradient(to right, #3F3844 var(--scroll), transparent 0)' }}></div>
        </div>

        <div className="text-center pt-16 md:pt-32">
          <p className="text-sm md:text-base text-green-500 font-bold">{formatDate(frontmatter.date)}</p>
          <h1 className="font-bold break-normal text-3xl md:text-5xl">{frontmatter.title}</h1>
          <span className="text-sm">⏱ Tempo de leitura: {readingTime()} min</span>
        </div>

        <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style={{ backgroundImage: `url(https://eduardogc.dev/${frontmatter.thumbnail})`, height: '75vh' }}></div>

        <div className="container max-w-5xl mx-auto -mt-32">

          <div className="mx-0 sm:mx-6">

            <div id="blog-main-content" className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal" style={{ fontFamily: 'Georgia,serif' }}>
              <ReactMarkdown>
                {content}
              </ReactMarkdown>
            </div>

            <div className="flex w-full items-center font-sans p-4 md:p-24">
              <img className="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
              <div className="flex-1">
                <p className="text-base font-bold text-base md:text-xl leading-none">{frontmatter.author}</p>
                <p className="text-gray-600 text-xs md:text-base">Um apaixonado por conhecimento compartilhando um pouquinho de sua jornada.</p>
              </div>
              <div className="justify-end">
                <button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Saiba mais</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-8">
          <script id="dsq-count-scr" src="//eduardogc-dev.disqus.com/count.js" async></script>
          <div id="disqus_thread"></div>
          <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Content;

Content.getInitialProps = async (context) => {
  const { slug } = context.query;
  const content = await import(`../../content/pt-br/${slug}.md`);
  const data = matter(content.default);

  return { ...data };
};
