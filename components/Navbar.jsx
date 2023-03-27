import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sidebar } from './Sidebar'

export const Navbar = () => {
  const [buttonMobileActive, setButtonMobileActive] = useState(false)
  return (<nav className="px-6 py-2 bg-white border border-gray-100 shadow">
    <div className="flex flex-col mx-auto sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
            <div>
                <Link href="/">
                    <span className="text-xl font-bold text-gray-800 md:text-2xl flex items-center cursor-pointer">
                    <Image
                        src="https://sat02pap003files.storage.live.com/y4mRydDqy3sOYP-0gfsFWdYe35aRrtEgfGKSwDzwDI1EHo3fKKtAfWyC2CDJeqdWH0rxtySKTMvJCQPxtWFoPteS0JfSIh5_ov9ITG9-q8o9VsNShDQDf88-rGRzsXAKjBpKDKxDhLScwXNlJrmOU-8W-abTDqkCoQnPENrJxFgvmkGXcL8vvhz6B1DMh4I4Khd?width=500&height=500&cropmode=none"
                        alt="Imagem de um gato robô azul"
                        width={49}
                        height={49}
                    /> Eduardo GC
                    </span>
                    </Link>
            </div>
            <div>
                <button type="button" onClick={() => setButtonMobileActive(!buttonMobileActive)} className={`block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none p-2 ${buttonMobileActive && 'hover:bg-gray-200 bg-gray-200  rounded'} sm:hidden`}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                        </path>
                    </svg>
                </button>
                { buttonMobileActive && <Sidebar /> }
            </div>
        </div>
        <div className="flex-col hidden sm:flex sm:flex-row sm:-mx-4">
            <Link href="/"><span className="my-1 text-gray-800 hover:underline hover:text-blue-500 sm:mx-4 sm:my-0 cursor-pointer">🏠&nbsp;&nbsp;Home</span></Link>
            {/* <Link href="/blog"><span className="my-1 text-gray-800 hover:underline hover:text-blue-500 sm:mx-4 sm:my-0 cursor-pointer">📝&nbsp;&nbsp;Blog</span></Link> */}
            <Link href="/cursos"><span className="my-1 text-gray-800 hover:underline hover:text-blue-500 sm:mx-4 sm:my-0 cursor-pointer">📚&nbsp;&nbsp;Cursos</span></Link>
            {/* <Link href="/loja"><span className="my-1 text-gray-800 hover:underline hover:text-blue-500 sm:mx-4 sm:my-0 cursor-pointer">🐻&nbsp;&nbsp;Loja</span></Link> */}
            <Link href="/sobre"><span className="my-1 text-gray-800 hover:underline hover:text-blue-500 sm:mx-4 sm:my-0 cursor-pointer">🔍&nbsp;&nbsp;Sobre mim</span></Link>
        </div>
    </div>
</nav>)
}
