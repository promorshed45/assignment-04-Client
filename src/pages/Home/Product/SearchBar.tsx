import { Button } from "@/components/ui/button";
import { setSearchTerm } from "@/redux/features/filter/filterSlice";
import { useAppDispatch } from "@/redux/hook";
import { SearchIcon } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";

const SearchBar = () => {
    const dispatch = useAppDispatch();
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data: FieldValues) => {
//     dispatch(setSearchTerm(data));
//     console.log(data);
//   };

  return (
    <div className="py-5 md:pb-10">
      <form
        // onSubmit={handleSubmit(onSubmit)}
        
        className="w-full max-w-sm mx-auto"
      >
        <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
          <input
        //   {...register("search")}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            className="flex h-10 w-full rounded-md bg-transparent px-3 text-md placeholder:text-gray-600 focus:outline-none   disabled:opacity-50"
             type="search"
            name="search"
            placeholder="Search..."
            aria-label="Search"
          ></input>          
            <Button variant={"ghost"} type="submit" className="px-3">
            <SearchIcon className="size-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
