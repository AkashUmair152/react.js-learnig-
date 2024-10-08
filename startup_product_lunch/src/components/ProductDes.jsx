
const ProductDes = ({ heading, description, features, price }) => {
  return (
    <>
      <h1 className="text-4xl text-center font-bold mb-4">{heading}</h1>
      <p className="text-center text-gray-600 text-base mb-4 md:max-w-[600px] mx-auto">
        {description}
      </p>
      <section className="bg-white dark:bg-gray-800 grid grid-cols-1 md:grid-cols-2 justify-center items-center overflow-hidden">
        <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg mt-10">
          <div className="relative w-full">
            <img
              className="w-[800px] h-[400px] object-cover"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Product Image"
            />
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              SALE
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col text-gray-600 mb-4 font-normal text-lg">
            {features.map((feature) => (
              <li
                className="list-disc list-inside mb-2 font-semibold text-lg"
                key={feature}
              >
                {feature}
              </li>
            ))}
          </div>
          <p className="text-gray-600 text-base mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">{price}</span>
          </div>
          <button className="bg-blue-500 text-base font-semibold text-white px-10 py-4 rounded-md mt-6">
            Buy Now
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductDes;
