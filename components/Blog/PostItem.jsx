import Link from "next/link"

const formatDate = (date) => {
  const data = new Date(date)
  const dia = data.getDate().toString()
  const diaF = (dia.length === 1) ? '0' + dia : dia
  const mes = (data.getMonth() + 1).toString() // +1 pois no getMonth Janeiro começa com zero.
  const mesF = (mes.length === 1) ? '0' + mes : mes
  const anoF = data.getFullYear()
  return `${diaF}/${mesF}/${anoF}`
}

export const PostItem = ({ key, post }) => (
  <>
    <div className="p-4 md:w-1/2" key={key}>
    <div className="h-full rounded-xl shadow-md border border-gray-200 rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
      <Link href={`/posts/${post.slug}`}>
      <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={post.frontMatter.thumbnail} alt="blog" />
      </Link>
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Publicado em {formatDate(post.frontMatter.date)}</h2>
        <h1 className="title-font text-lg font-medium text-gray-600 mb-3">{post.frontMatter.title}</h1>
        <p className="leading-relaxed mb-3">{post.frontMatter.description}</p>
        <div className="flex items-center flex-wrap ">
          <Link href={`/posts/${post.slug}`} className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">Leia mais</Link>
        </div>
      </div>
    </div>
  </div>
</>
)
