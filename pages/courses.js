import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { CourseCard } from '../components/Courses/CourseCard/CourseCard'
import { EmptyCourseSlot } from '../components/Courses/EmptyCourseSlot/EmptyCourseSlot'

const Courses = () => (
    <>
      <div className="font-sans bg-white flex flex-col min-h-screen w-full">
        <Navbar />
          <section>
          <img className="image-cover" src="https://sat02pap003files.storage.live.com/y4mWJDYxk5kdfrP0osopCsweZO3bA4xsLapHO4Y6FjI0IXn40TEpyDzAK_t2C52uhAFiYe0XuCaU2W9o5Ca-tCLsX7SFiy363-FFsbDjylJyQWQzgczqFdtoFixI4a3Z4sYO72zms0xSpgqRmFU0tKjXNQJm15OHhS1ndn8XB7ASrWCgiPqkuaMrxW1LnOP3GXP?width=5794&height=3863&cropmode=none"/>
            <div className="px-4 py-16 max-w-screen-lg sm:px-6 lg:px-8 mx-auto">
              <div className="grid grid-cols-1 gap-y-8 lg:gap-x-16 lg:items-center">
                <div className="max-w-lg mx-auto text-center">
                  <h2 className="text-3xl font-bold sm:text-4xl">
                  Meus cursos que irão te levar ao próximo nível. 🚀
                  </h2>
                  <p className="mt-4 text-gray-600">
                      Comece ainda hoje a subir o próximo degrau da sua carreira.
                  </p>
                  <a
                    className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                    href="/"
                  >
                    <span className="text-sm font-medium"> Em breve. </span>
                    <svg
                      className="w-5 h-5 ml-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <CourseCard
                  url="/"
                  title="Introdução ao tecniquês"
                  description="Em breve..."
                  />
                  <EmptyCourseSlot />
                  <EmptyCourseSlot />
                  <EmptyCourseSlot />
                  <EmptyCourseSlot />
                  <EmptyCourseSlot />
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
    </>

)

export default Courses
