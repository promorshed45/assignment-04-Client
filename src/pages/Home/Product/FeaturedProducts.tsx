import { Button } from "@/components/ui/button";
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { TProduct } from "@/type";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery({});

  if (!isLoading) {
    <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>;
  }

  return (

    <div className="container mx-auto  py-5 md:py-20 px-4 sm:px-6 lg:px-16">
      <div className="pb-10 text-4xl font-bold text-center">
          <h1>Featured Products</h1>
        </div>
      <div className=" grid  max-w-7xl items-center  md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        
        {data?.data.slice(0, 4).map((item: TProduct) => (
          <div
            key={item._id}
            className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
          >
            <img
              src={item.image}
              alt="AirMax Pro"
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white"> {item.name} </h1>
              <p className="mt-2 text-sm text-gray-300">{item.description}</p>
              <Link to={`/products/${item._id}`}>
                <button className="my-2 inline-flex cursor-pointer items-center text-sm font-semibold white bg-gray-300 px-4 py-2 rounded-md">
                  Explore More &rarr;
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-10 text-4xl font-bold text-center">
        <Button asChild>
          <Link to='/products'> All Products </Link>
        </Button></div>
    </div>

  );
};

export default FeaturedProducts;
