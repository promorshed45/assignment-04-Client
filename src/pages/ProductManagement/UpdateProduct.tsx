/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/features/products/productsApi";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Backpack, Undo2 } from "lucide-react";



const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useGetSingleProductQuery(id);

  //update product
  const [updateProduct] = useUpdateProductMutation();

  const { register, handleSubmit } = useForm({
    values: data?.data,
    resetOptions: {
      keepDirtyValues: true, // keep dirty fields unchanged, but update defaultValues
    },
  });
  const onSubmit = async (data: any) => {
    const { name, price, category, description, stock, image } = data;
    const product = {
      name: name,
      price: price,
      category: category,
      description: description,
      stock: stock,
      image: image,
    };
    await updateProduct({ id, product });
    toast.success("Product updated successfully");
    navigate("/products-management");
  };

  const goBack = () => {
    navigate(-1); // This will navigate back to the previous page in the history stack
  };

  
  return (

    <>
    <Button onClick={goBack} className="absolute right-16 top-28 bg-gray-100 text-gray-700 px-3 py-2.5 hover:text-white ">
        <Undo2/>
      </Button>
    <div className="sm:max-w-[600px] mx-auto rounded-md md:px-10 py-5 md:py-10 ">
      <div>
        <h1 className="text-center text-2xl font-bold pb-3">
          Update a Product
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input type="text" id="name" {...register("name")} className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="price" className="text-right">
            Price
          </Label>
          <Input type="number" id="price" {...register("price")} className="col-span-3" />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="image" className="text-right">
            Images
          </Label>
          <Input type="text" id="image" {...register("image")} className="col-span-3" />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="category" className="text-right">
            Category
          </Label>
          <select
            {...register("category")}
            className="select select-bordered w-full py-2 px-2 col-span-3 border rounded-md"
          >
            <option disabled selected>
              Select Category
            </option>
            <option> Functional Training </option>
                <option> Outdoor Fitness </option>
                <option> HIIT Equipment </option>
                <option> Accessories </option>
          </select>
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="stock" className="text-right">
            Stock
          </Label>
          <Input id="stock" {...register("stock")} className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Description
          </Label>
          <Textarea
            id="description" {...register("description")} className="col-span-3"
          />
        </div>
        <Button type="submit" className="text-center mx-auto">
          Update Product
        </Button>
      </form>
    </div></>
  );
};

export default UpdateProduct;
