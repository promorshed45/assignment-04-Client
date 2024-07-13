import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const EmptyCard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
          
        <div className="inline-flex gap-5 justify-center mx-auto">
          <ShoppingCart className="size-10"/>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Your Cart is Empty!
          </h1>
        </div>
          <p className="text-gray-700 mb-6">
            Looks like you haven't added anything to your cart yet. Browse our
            products and find something you like!
          </p>
          <div className="flex justify-center">
            <NavLink to={"/products"}>
              <Button
              >
                Shop Now
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCard;