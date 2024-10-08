import Hero from "./components/Hero";
import ProductDes from "./components/ProductDes";
import Testimonials from "./components/Testimonials";
import Data from "./Data/Data.json";

const App = () => {
  const { heroSection, productDescription, testimonials } = Data;
  return (
    <>
      <Hero
        title={heroSection.title}
        subtitle={heroSection.subtitle}
        description={heroSection.description}
        ctaText={heroSection.ctaText}
        ctaLink={heroSection.ctaLink}
      />
      <ProductDes
        productDescription={productDescription}
        heading={productDescription.heading}
        description={productDescription.description}
        features={productDescription.features}
        price={productDescription.price}
      />
      <Testimonials testimonials={testimonials} />
    </>
  );
};

export default App;
