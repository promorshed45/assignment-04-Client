import { TProduct } from "@/type";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type TProductDetailsProps = {
  product: TProduct;
  handleAddToCart: () => void;
  isProductOutOfStock: boolean;
};

const ProductDetailsCard = ({
  product,
  handleAddToCart,
  isProductOutOfStock,
}: TProductDetailsProps) => {
  const [updatedStock, setUpdatedStock] = useState<number>(product.stock);

  // Handler to update stock and call handleAddToCart
  const handleAddToCartAction = () => {
    if (!isProductOutOfStock) {
      // Example: Assuming handleAddToCart updates stock in a backend or state
      handleAddToCart();
      setUpdatedStock(updatedStock - 1); // Adjust as per your logic
    }
  };

  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-top lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={product.image}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10 text-left">
            <h1 className="my-4 text-3xl font-semibold text-black">
              {product.name}
            </h1>
            <p className="leading-relaxed">{product.description}</p>
            <div className="mb-5 mt-6 space-y-3 items-top border-b-2 border-gray-100 pb-5">
              <div className="flex items-center">
                <h1 className="mr-3 text-md font-semibold">
                  {" "}
                  Category:{" "}
                  <span className="pl-2 text-xl">{product.category}</span>{" "}
                </h1>
              </div>
              <div className="ml-auto flex items-center">
                <h1 className="mr-3 text-md font-semibold">
                  Stock: <span className="pl-2 text-xl">  {updatedStock} </span>{" "}
                </h1>
              </div>
            </div>
            <div className="card-actions justify-end">
           
          </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">
                Price: {product.price}
              </span>
              <Button
              className={`${ isProductOutOfStock ? 'btn-disabled' : 'btn'  }`}
              onClick={handleAddToCartAction} 
              disabled={isProductOutOfStock}
              >
                {isProductOutOfStock ? 'Out of Stock' : 'Add to Cart'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsCard;
