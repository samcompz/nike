import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className='relative lg:mx-[250px]'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='py-10'>
        <PopularProducts />
      </section>
      <section className='py-10'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='py-10'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue py-10'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-gray-800 padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
