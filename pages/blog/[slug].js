import Head from "next/head"

const Blog = ({ attributes, PageContent }) => {
  let { title, cats } = attributes;
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>{title}</h1>
        <PageContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}

export default Blog;

Blog.getInitialProps = async (context) => {
  const { slug } = context.query;
  // Import our .md file using the `slug` from the URL
  const { attributes, PageContent } = await import(`../content/pt-br/${slug}.md`);

  return { ...attributes, PageContent };
}