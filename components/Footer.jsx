export const Footer = () => (
    <footer className="px-6 py-2 text-gray-100 bg-gray-800">
        <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
            <p className="mt-2 md:mt-0 text-sm">©{new Date().getFullYear()} Eduardo GC. Todos os direitos reservados.</p>
            <div className="flex mt-4 mb-2 -mx-2 md:mt-0 mb-0 items-center">
                <a href="https://www.twitch.tv/geceduardo" target="_blank" className="mx-2 text-gray-100 hover:text-gray-400" rel="noreferrer">
                    <svg viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current">
                        <path
                            d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z" >
                        </path>
                    </svg>
                </a>
                <a href="https://www.youtube.com/channel/UC2-FsOpGAR4_Cumpyo30bTQ/" target="_blank" className="mx-2 text-gray-100 hover:text-gray-400" rel="noreferrer">
                    <svg viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current">
                        <path
                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                        </path>
                    </svg>
                </a>
                <a href="https://instagram.com/soueduardogc" target="_blank" className="mx-2 text-gray-100 hover:text-gray-400" rel="noreferrer">
                    <svg viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current">
                        <path
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                        </path>
                    </svg>
                </a>
                {/* <a href="https://www.tiktok.com/@soueduardogc" target="_blank" className="mx-2 text-gray-100 hover:text-gray-400" rel="noreferrer">
                    <svg viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                    </svg>
                </a> */}
                <a href="https://ko-fi.com/K3K5EX3A1" target="_blank" rel="noreferrer">
                    <img
                        height={36}
                        style={{ border: 0, height: 36 }}
                        src="https://cdn.ko-fi.com/cdn/kofi2.png?v=3"
                        border={0}
                        alt="Buy Me a Coffee at ko-fi.com"
                    />
                </a>
            </div>
        </div>
    </footer>
)
