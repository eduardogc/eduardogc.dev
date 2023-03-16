import { getAllPostsWithFrontMatter } from '../lib/utils'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { PostItem } from '../components/Blog/PostItem'

const Blog = ({ posts }) => {
  return (
    <div className="overflow-x-hidden bg-gray-100">
      <Navbar />

      <section>
        <img className="image-cover" src="https://sat02pap003files.storage.live.com/y4mWJDYxk5kdfrP0osopCsweZO3bA4xsLapHO4Y6FjI0IXn40TEpyDzAK_t2C52uhAFiYe0XuCaU2W9o5Ca-tCLsX7SFiy363-FFsbDjylJyQWQzgczqFdtoFixI4a3Z4sYO72zms0xSpgqRmFU0tKjXNQJm15OHhS1ndn8XB7ASrWCgiPqkuaMrxW1LnOP3GXP?width=5794&height=3863&cropmode=none"/>
        <div className="px-4 pt-16 max-w-screen-lg sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 gap-y-8 lg:gap-x-16 lg:items-center">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-700 sm:text-4xl">
              Blog
              </h2>
              <p className="mt-4 text-gray-600">
              Boas vindas ao meu blog, onde compartilho minhas experiências e opiniões sobre o mundo da tecnologia e como ela está transformando a sociedade moderna.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="px-6 py-1 sm:min-h-screen">
        <div className="container flex justify-center mx-auto">

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
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
      </section>
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
