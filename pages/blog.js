import { getAllPostsWithFrontMatter } from '../lib/utils'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { PostItem } from '../components/Blog/PostItem'

const Blog = ({ posts }) => {
  return (
    <div className="overflow-x-hidden bg-gray-100">
      <Navbar />

      <div className="px-6 py-8 sm:min-h-screen">
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
                    new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
                )
                .map((post) => {
                  return (
                    <PostItem key={post.slug} post={post} />
                  )
                })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog

export async function getStaticProps () {
  const posts = await getAllPostsWithFrontMatter('pt-br')

  return {
    props: {
      posts
    }
  }
}
