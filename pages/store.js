import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import StoreSection from '../components/StoreSection/StoreSection'

const Store = () => (
<>
  <Navbar />
  <div className="font-sans bg-white flex flex-col min-h-screen w-full">
    <StoreSection />
    <StoreSection />
    <StoreSection />
  </div>
  <Footer />
</>
)

export default Store
