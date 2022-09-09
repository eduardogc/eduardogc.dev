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
    <a key={key}
  className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md mt-4"
  href={`/posts/${post.slug}`}
>
  <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
  <div className="justify-between sm:flex">
    <div>
      <h5 className="text-xl font-bold text-gray-900">
        {post.frontMatter.title}
      </h5>
      <p className="mt-1 text-xs font-medium text-gray-600">Por {post.frontMatter.author}</p>
    </div>
    <div className="flex-shrink-0 hidden ml-3 sm:block">
      <img
        className="object-cover w-16 h-16 rounded-lg shadow-sm"
        src={`/${post.frontMatter.authorthumb}`}
        alt=""
      />
    </div>
  </div>
  <div className="mt-4 sm:pr-8">
    <p className="text-sm text-gray-500">
        {post.frontMatter.description}
    </p>
  </div>
  <dl className="flex mt-6">
    <div className="flex flex-col-reverse">
      <dt className="text-sm font-medium text-gray-600">Published</dt>
      <dd className="text-xs text-gray-500">{formatDate(post.frontMatter.date)}</dd>
    </div>
    <div className="flex flex-col-reverse ml-3 sm:ml-6">
      <dt className="text-sm font-medium text-gray-600">Reading time</dt>
      <dd className="text-xs text-gray-500">3 minute</dd>
    </div>
  </dl>
</a>
    </>
)
