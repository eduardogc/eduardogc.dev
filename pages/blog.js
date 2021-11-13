import { getAllPostsWithFrontMatter } from '../lib/utils'
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const Blog = ({ posts }) => {

  const formatDate = (date) => {
    const data = new Date(date),
      dia = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0' + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0' + mes : mes,
      anoF = data.getFullYear();
    return `${diaF}/${mesF}/${anoF}`;
  }

  return (
    <div className="overflow-x-hidden bg-gray-100">
      <Navbar />

      <div className="px-6 py-8">
        <div className="container flex justify-center mx-auto">
          <div className="w-full lg:w-7/12">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Posts</h1>
              <div>
                <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>Latest</option>
                  <option>Last Week</option>
                </select>
              </div>
            </div>

            {posts &&
              posts
                .sort(
                  (a, b) =>
                    new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime(),
                )
                .map((post) => {
                  return (
                    <div key={post.slug} className="mt-6">
                      <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <div className="flex items-center justify-between"><span className="font-light text-gray-600">{formatDate(post.frontMatter.date)}</span>
                          <span>
                          {post.frontMatter.tags.map((tag) => (
                            <a href={`/blog/categories/${tag}`}
                              className="px-2 py-1 ml-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">{tag}</a>))}
                          </span>

                        </div>
                        <div className="mt-2"><a href={`/posts/${post.slug}`} className="text-2xl font-bold text-gray-700 hover:underline">{post.frontMatter.title}</a>
                          <p className="mt-2 text-gray-600">{post.frontMatter.description}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4"><a href={`/posts/${post.slug}`}
                          className="text-blue-500 hover:underline">Leia mais...</a>
                          <div><a href="#" className="flex items-center"><img
                            src={post.frontMatter.authorthumb}
                            alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                            <h1 className="font-bold text-gray-700 hover:underline">{post.frontMatter.author}</h1>
                          </a></div>
                        </div>
                      </div>
                    </div>
                  )
                })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostsWithFrontMatter('pt-br')

  return {
    props: {
      posts,
    },
  }
}