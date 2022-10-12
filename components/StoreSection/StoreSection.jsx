const StoreSection = ({ title, description, type, items }) => (
    <section>
    <div className="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
        <div className="flex items-center p-8 bg-gray-100 rounded">
          <div className="mx-auto text-center lg:text-left">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="mt-4 text-medium text-gray-700 max-w-[45ch]">
              {description}
            </p>
            <span
              className="inline-flex px-6 py-3 mt-6 text-sm text-white bg-black rounded"
            >
              <span className="font-medium">Confira</span>
              <svg
                className="w-5 h-5 ml-3 hidden md:block"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 block sm:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:col-span-2 lg:grid-cols-4 lg:py-8 justify-items-center">
          {items.map((item, index) => (
            <span key={`product-${type}-${index}`}>
            <iframe
              sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
              style={{ width: '120px', height: '240px' }}
              marginWidth="0"
              marginHeight="0"
              scrolling="no"
              frameBorder="0"
              src={item} />
            </span>))}
        </div>
      </div>
    </div>
  </section>
)

export default StoreSection
