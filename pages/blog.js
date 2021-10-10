import { getAllPostsWithFrontMatter } from '../lib/utils'
import Link from 'next/link'

const Blog = ({ posts}) => {
  return (
    <div className="bg-gray-100 py-20 px-20">
      {!posts && <div>No posts!</div>}
      <div className="flex justify-between items-center">
        {posts &&
          posts
            .sort(
              (a, b) =>
                new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime(),
            )
            .map((post) => {
              return (
                <div key={post.slug} class="blogs bg-white mr-5">
                  <img src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                  <div class="p-5">
                  <h1 class="text-2xl font-bold text-green-800 py-2">
                    <Link href={{ pathname: `/posts/${post.slug}` }}>
                      <a>{post.frontMatter.title}</a>
                    </Link>{' '}
                  </h1>
                  <p class="bg-white text-sm text-black">{post.frontMatter.description}</p>
                  <a href={`/posts/${post.slug}`} class="py-2 px-3 mt-4 px-6 text-white bg-green-500 inline-block rounded">Read More</a>
                  </div>
              </div>
              )
            })}
      </div>
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