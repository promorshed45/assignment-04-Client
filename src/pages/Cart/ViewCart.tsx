import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import EmptyCard from "./EmtyCard";
import UserContactInfo from "./UserContactInfo";
import { TCartCardProps } from "@/type";

const ViewCart = ({
  cart,
  handleUpdateQuantity,
  handleRemoveFromCart,
  totalPrice,
}: TCartCardProps) => {
  return (
    <div className="mx-auto py-5 md:py-10 max-w-4xl md:my-6">
      <div className="overflow-hidden  rounded-xl">
        {cart?.items.length === 0 ? (
          <EmptyCard />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product List */}
            <div className="bg-gray-100 px-5 py-6 md:px-8">
              <div className="flow-root text-left">
                <ul className="-my-7 divide-y divide-gray-200">
                  {cart.items.map((item) => (
                    <li
                      key={item._id}
                      className="flex items-stretch justify-between space-x-5 py-7"
                    >
                      <div className="flex flex-1 items-stretch">
                        <div className="flex-shrink-0">
                          <img
                            className="h-20 w-20 rounded-lg border border-gray-200 bg-white object-contain"
                            src={item.image}
                            alt={item.image}
                          />
                        </div>
                        <div className="ml-5 flex flex-col justify-between">
                          <div className="flex-1">
                            <p className="text-sm font-bold">{item.name}</p>
                          </div>
                          <div className="flex items-center">
                            <p className="text-base mr-2">Quantity:</p>
                            <button
                              className="py-2 border border-gray-200 px-2.5 rounded-md bg-gray-50"
                              onClick={() =>
                                handleUpdateQuantity(
                                  item._id as string,
                                  item.quantity - 1
                                )
                              }
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="size-3"/>
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button
                              className="py-2 border border-gray-200 px-2.5 rounded-md bg-gray-50"
                              onClick={() =>
                                handleUpdateQuantity(
                                  item._id as string,
                                  item.quantity + 1
                                )
                              }
                              disabled={item.quantity >= item.stock}
                            >
                              <Plus className="size-3"/>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="ml-auto flex flex-col items-end justify-between">
                        <p className="text-right text-sm font-bold text-gray-900">
                          ${item.price.toFixed(2)}
                        </p>
                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveFromCart(item._id as string)
                          }
                          className="-m-2 inline-flex rounded px-2 pb-3.5 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                        >
                          <span className="sr-only -mt-5">Remove</span>
                          <X className="size-6" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <UserContactInfo totalPrice={totalPrice} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCart;
