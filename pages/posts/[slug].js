import matter from 'gray-matter'
import Markdown from 'marked-react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { Footer } from '../../components/Footer'
import { Navbar } from '../../components/Navbar'
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';

const Content = ({ content, data }) => {
  const { asPath } = useRouter();
  const frontmatter = data

  const formatDate = (date) => {
    const data = new Date(date)
    const dia = data.getDate().toString()
    const diaF = (dia.length === 1) ? '0' + dia : dia
    const mes = (data.getMonth() + 1).toString() // +1 pois no getMonth Janeiro começa com zero.
    const mesF = (mes.length === 1) ? '0' + mes : mes
    const anoF = data.getFullYear()
    return `${diaF}/${mesF}/${anoF}`
  }

  function readingTime () {
    const text = content
    const wpm = 225
    const words = text.trim().split(/\s+/).length
    const time = Math.ceil(words / wpm)
    return time
  }

  Lowlight.registerLanguage('js', javascript);
  const renderer = {
    code(snippet, lang) {
      return <Lowlight language={lang} value={snippet} />;
    },
  };

  useEffect(() => {
    // const disqus_config = function () {
    //   this.page.url = window.location.href
    //   this.page.identifier = '12156509-0d21-4da7-8422-1e8e34fa7fc0'
    // };
    (function () {
      const d = document; const s = d.createElement('script')
      s.src = 'https://eduardogc-dev.disqus.com/embed.js'
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s)
    })()
  }, [])

  const customCSS = `.smooth {transition: box-shadow 0.3s ease-in-out;}
  ::selection{background - color: aliceblue}`

  return (
    <>
      <Head>
        <meta charSset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{frontmatter.title} | Eduardo GC Blog</title>
        <meta name="author" content="Eduardo GC" />
        <meta name="description" content={frontmatter.description} />
        <meta name="keywords" content={frontmatter.tags.toString()} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:url" content={`https://eduardogc.tech${asPath}`} />
        <meta property="og:image" content={frontmatter.thumbnail} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="og:locale" content="pt_BR" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/browse/highlight.js@11.3.1/styles/a11y-dark.css"
        />
        <style>
          {customCSS}
        </style>
      </Head>
      <div className="bg-white leading-normal tracking-normal">

        <Navbar />

        <div className="text-center pt-8 md:pt-16">
          <p className="text-sm md:text-base text-green-500 font-bold">{formatDate(frontmatter.date)}</p>
          <h1 className="font-bold break-normal text-3xl md:text-5xl">{frontmatter.title}</h1>
          <span className="text-sm">⏱ Tempo de leitura: {readingTime()} min</span>
        </div>

        <div className="w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style={{ backgroundImage: `url(${frontmatter.thumbnail})`, height: '75vh' }}></div>

        <div className="max-w-5xl mx-auto -mt-32">

          <div className="mx-0 sm:mx-6">

            <div id="blog-main-content" className="bg-white w-full p-4 md:p-12 text-lg md:text-lg text-gray-800 leading-normal" style={{ fontFamily: 'Georgia,serif' }}>
              <Markdown 
                className="font-serif text-lg antialiased"
                value={content} 
                renderer={renderer} />
            </div> 

            <div className="flex flex-col w-full items-center text-center font-sans p-4 sm:flex-row sm:text-left md:p-8 ">
              <img className="w-10 h-10 object-cover rounded-full mr-4" src={`${frontmatter.authorthumb}`} alt="Avatar of Author" />
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
  )
}

export default Content

Content.getInitialProps = async (context) => {
  const { slug } = context.query
  const content = await import(`../../content/pt-br/${slug}.md`)
  const data = matter(content.default)

  return { ...data }
}
