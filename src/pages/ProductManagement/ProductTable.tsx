import AlertMessage from "@/components/ui/AlertMessage";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/products/productsApi";
import { Pencil, Trash2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const ProductTable = () => {
  const { data, isLoading } = useGetAllProductsQuery({});
  const [deleteProduct] = useDeleteProductMutation();

  //handle delete
  const handleDelete = (id: string) => {
    deleteProduct(id);
    toast.success("Product deleted successfully");
  };

  if (isLoading) {
    return (
      <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
    );
  }

  return (
    <div className="mt-8 flex flex-col">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-8 py-3.5 text-left text-base font-medium text-gray-700"
                  >
                    <span>Product Name</span>
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-left text-base font-medium text-gray-700"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-left text-base font-medium text-gray-700"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="text-base font-medium text-gray-700"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data?.data.map((item: any) => (
                  <tr key={item._id}>
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-md text-gray-900">
                            {item.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4 text-left">
                      <div className="text-base text-gray-900 ">
                        {item.category}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-left text-base text-gray-700">
                      {item.price}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                      <div className="flex justify-center">
                        <NavLink to={`/products/update/${item._id}`}>
                          <Button
                            className="rounded-md bg-gray-100 px-3 py-2.5 font-semibold text-green-600 shadow-sm hover:bg-green-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                          >
                            <Pencil className="size-5" />
                          </Button>
                        </NavLink>
                        <AlertMessage
                          buttonTitle={
                            <div className="rounded-md bg-gray-100 px-3 py-2.5 items-center text-sm font-semibold text-red-500 shadow-sm hover:bg-red-500 hover:text-white">
                              <Trash2 className="size-5" />
                            </div>
                          }
                          onConfirm={() => handleDelete(item._id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
