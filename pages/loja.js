import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import StoreSection from '../components/StoreSection/StoreSection'
// import {
//   Tooltip
// } from 'react-tippy'
import Script from 'next/script'

const productivityItems = [
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B07Z52XZBQ&asins=B07Z52XZBQ&linkId=3cb168ec58a28fc97a6bdfac7177694a&show_border=true&link_opens_in_new_window=true',
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B07Y5KVWBT&asins=B07Y5KVWBT&linkId=88d3c80e91f44ac5a0f19090de21f431&show_border=true&link_opens_in_new_window=true',
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B00I4HV3TS&asins=B00I4HV3TS&linkId=067f8151faa31dda657044f191892252&show_border=true&link_opens_in_new_window=true',
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B07Y4ZQNSX&asins=B07Y4ZQNSX&linkId=c3354906d7a7798f818e59df9452b702&show_border=true&link_opens_in_new_window=true',
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B09CCP48TQ&asins=B09CCP48TQ&linkId=fa7cd34432c9226e3a6317b66f2eccba&show_border=true&link_opens_in_new_window=true'
]

const techItems = [
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B09SWTG9GF&asins=B09SWTG9GF&linkId=f156cfe6c8fba69929b38d0503d77de0&show_border=true&link_opens_in_new_window=true',
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B075F3WMMC&asins=B075F3WMMC&linkId=7dbfd3a1cc09b1b45ab71be0ce3c6342&show_border=true&link_opens_in_new_window=true',
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B0148NPJ3W&asins=B0148NPJ3W&linkId=1c278ed62ff07baed47fe843d32d79a5&show_border=true&link_opens_in_new_window=true',
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B07KQXH65Z&asins=B07KQXH65Z&linkId=e5a443a6fa97c06068948e237694bbeb&show_border=true&link_opens_in_new_window=true',
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B0B6D8JZH4&asins=B0B6D8JZH4&linkId=c8729c5afd23ee09d86ddb26257fc5bb&show_border=true&link_opens_in_new_window=true'
]

const geekItems = [
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B094479HVB&asins=B094479HVB&linkId=f1d27d6e4e68b99dc9069865b770558b&show_border=true&link_opens_in_new_window=true',
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B0845YT9KQ&asins=B0845YT9KQ&linkId=9a9f08ef6fae41e22e8bf463b86e3b5f&show_border=true&link_opens_in_new_window=true',
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B08LYPC8PQ&asins=B08LYPC8PQ&linkId=f20aa5e928cdc3875a08792daa0f8832&show_border=true&link_opens_in_new_window=true',
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B07KXVX6YZ&asins=B07KXVX6YZ&linkId=c98ff4f604b9fb452430e1a7b4b07747&show_border=true&link_opens_in_new_window=true'
]

const randomItems = [
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B08H8BH64P&asins=B08H8BH64P&linkId=53bb56e84ad713df1282d82cb06545a6&show_border=true&link_opens_in_new_window=true',
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B09FDRDR3L&asins=B09FDRDR3L&linkId=1095f43faa5ab1dce11cc5e7bafe6eea&show_border=true&link_opens_in_new_window=true',
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B09FDHTH2J&asins=B09FDHTH2J&linkId=3bbec941a99a721983861e385c9027e6&show_border=true&link_opens_in_new_window=true',
  '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=BR&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=eduardogc-20&language=pt_BR&marketplace=amazon&region=BR&placement=B08VF2QXWV&asins=B08VF2QXWV&linkId=fb3f1900af7b234d8b348dc79930ffc9&show_border=true&link_opens_in_new_window=true'
]

const copyToClipboard = () => {
  const copyText = document.getElementById('button-store-copy')
  copyText.select()
  copyText.setSelectionRange(0, 99999)
  navigator.clipboard.writeText(copyText.value)
}

const Store = () => (
<>
  <Script strategy="lazyOnload" src={'https://www.googletagmanager.com/gtag/js?id=G-4HM9TML36B'} />
  <Script strategy="lazyOnload">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4HM9TML36B', {
          page_path: window.location.pathname,
          });
      `}
  </Script>
  <Navbar />
  <div className="flex flex-col w-full bg-pink-100 py-8 mt-8 md:mt-16">
    {/* <span className="mb-8 text-center text-lg text-black md:text-2xl px-2">Use meu código em qualquer produto da Amazon e ganhe descontos:</span> */}
    {/* <span className="flex justify-center self-center w-10/12 md:w-4/12">
      <Tooltip
        title="Copiado!"
        position="top"
        trigger="click"
        className="outline-hidden ring-transparent"
      >
        <button className="rounded-3xl border-pink-600 text-pink-600 text-center border-4 text-3xl font-bold p-4 hover:text-pink-700 border-pink-700" onClick={copyToClipboard}>
          eduardogc-20
        </button>
      </Tooltip>
    </span> */}
    <span className="block text-center text-lg text-black md:text-xl px-2">Trago abaixo as melhores recomendações para você!</span>
    <input id="button-store-copy" type="text" className="hidden" value="eduardogc-20" readOnly />
  </div>
  <div className="font-sans bg-white flex flex-col min-h-screen w-full">
    <StoreSection
      title="Produtividade"
      description="Produtos recomendados por mim que podem auxiliar na sua produtividade! 📚"
      type="productivity"
      items={productivityItems}
      />
    <StoreSection
      title="Tecnologia"
      description="A tecnologia a favor do seu desenvolvimento! 👨🏻‍💻"
      type="tech"
      items={techItems}
      />
    <StoreSection
      title="Geek"
      description="Produtos cuidadosamente selecionados para seu passe nerd! 👾"
      type="geek"
      items={geekItems}
      />
    <StoreSection
      title="Aleatório"
      description="Produtos que comprei que me auxiliam na minha rotina / são fofinhos! 🧸"
      type="random"
      items={randomItems}
      />
  </div>
  <Footer />
</>
)

export default Store
