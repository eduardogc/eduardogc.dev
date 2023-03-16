import Link from "next/link";

export const Sidebar = () => (
    <>
  <div className="absolute top-14 right-0 border-gray-100 shadow z-50 md:hidden">
    <aside className="w-64" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span>🏠</span>
              <span className="ml-3">Home</span>
            </Link>
          </li>
          {/* <li>
            <Link
              href="/blog"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span>📝</span>
              <span className="flex-1 ml-3 whitespace-nowrap">Blog</span>
            </Link>
          </li> */}
          <li>
            <Link
              href="/cursos"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span>📚</span>
              <span className="flex-1 ml-3 whitespace-nowrap">Cursos</span>
            </Link>
          </li>
          {/* <li>
            <a
              href="/loja"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span>🐻</span>
              <span className="flex-1 ml-3 whitespace-nowrap">Loja</span>
            </a>
          </li> */}
          <li>
            <Link
              href="/sobre"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span>🔍</span>
              <span className="flex-1 ml-3 whitespace-nowrap">Sobre</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</>

)
