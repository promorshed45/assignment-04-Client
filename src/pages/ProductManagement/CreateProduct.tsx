import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCreateProductMutation } from "@/redux/features/products/productsApi";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateProduct = () => {
  const { control, register, handleSubmit } = useForm();
  const [createProduct]=  useCreateProductMutation();

  
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Adding Product');

    const productData = {
        name: data.name,
        price: data.price,
        description: data.description,
        image: data.image,
        category: data.category,
        stock: data.stock,
    }
    console.log(data);
    try {
      const result = await createProduct(productData).unwrap();
      console.log('form hote', result);
      toast.success('Create Product Successfully', { id: toastId, duration: 2000 });
    } catch (err) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };


  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Create a New Product</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] md:pr-10">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              Create a New Product
            </DialogTitle>
          </DialogHeader>
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
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                type="text" id="description" {...register("description")} className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Images
              </Label>
              <Input type="text" id="image" {...register("image")} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 w-full">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Controller
                name="category"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value} >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="functional-training">Functional Training</SelectItem>
                      <SelectItem value="outdoor-fitness">Outdoor Fitness</SelectItem>
                      <SelectItem value="hiit-equipment">HIIT Equipment</SelectItem>
                      <SelectItem value="mind-body-wellness">Mind-Body Wellness</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="stock" className="text-right">
                Stock
              </Label>
              <Input id="stock" {...register("stock")} className="col-span-3" />
            </div>
            <Button type="submit" className="text-center">
              Add Product
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateProduct;
