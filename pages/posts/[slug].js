import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const Content = ({ content, data }) => {
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

  return (
    <div className="mt-6 bg-gray-50">
      <div className=" px-10 py-6 mx-auto">

        <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">

          <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
            <img className="object-cover w-full shadow-sm h-full" src={`https://eduardogc.dev/${frontmatter.thumbnail}`} />
          </a>

          <div className="flex items-center justify-start mt-4 mb-4">
            <a href="#" className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4">Django</a>
            <a href="#" className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4">Python</a>
            <a href="#" className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500">web development</a>
          </div>
          <div className="mt-2">
            <a href="#"
              className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-purple-500  hover:underline">{frontmatter.title}</a>

            <div className="font-light text-gray-600">

              <a href="#" className="flex items-center mt-6 mb-6">
                <img src="https://avatars.githubusercontent.com/u/71964085?v=4"
                alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                <h1 className="font-bold text-gray-700 hover:underline">Por {frontmatter.author} <ReactMarkdown className="text-sm">{formatDate(frontmatter.date)}</ReactMarkdown></h1>
              </a>
            </div>
          </div>

          <div className="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
            <div>
              <p className="mt-2 p-8"><ReactMarkdown escapeText="html">{content}</ReactMarkdown></p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl py-16 xl:px-8 flex justify-center mx-auto">

          <div className="w-full mt-16 md:mt-0 ">
            <form className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
              <h3 className="mb-6 text-2xl font-medium text-center">Write a comment</h3>
              <textarea type="text" name="comment" className="w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Write your comment" rows="5" cols="33"></textarea>
              <input type="submit" value="Submit comment" name="submit" className=" text-white px-4 py-3 bg-blue-500  rounded-lg" />
            </form>
          </div>
        </div>

        <div className="max-w-4xl px-10 py-16 mx-auto bg-gray-100  bg-white min-w-screen animation-fade animation-delay  px-0 px-8 mx-auto sm:px-12 xl:px-5">

          <p className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-2xl md:text-3xl lg:text-4xl sm:text-center sm:mx-0">
            All comments on this post
          </p>
          <div className="flex  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">

            <a href="#" className="flex items-center mt-6 mb-6 mr-6"><img src="https://avatars.githubusercontent.com/u/71964085?v=4" alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" />
            </a>

            <div><h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">By James Amos</h3>
              <p className="text-sm font-bold text-gray-300">August 22,2021</p>
              <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                Please help with how you did the migrations for the blog database fields.I tried mine using exactly what you instructed but its not working!!.</p>
            </div>
          </div>
          <div className="flex  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">

            <a href="#" className="flex items-center mt-6 mb-6 mr-6"><img src="https://avatars.githubusercontent.com/u/71964085?v=4" alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" />
            </a>

            <div><h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">By James Amos</h3>
              <p className="text-sm font-bold text-gray-300">August 22,2021</p>
              <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                Especially I dont understand the concepts of multiple models.What really is the difference between the blog model and blogApp model? Am stuck</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Content;

Content.getInitialProps = async (context) => {
  const { slug } = context.query;
  const content = await import(`../../content/pt-br/${slug}.md`);
  const data = matter(content.default);

  return { ...data };
};
