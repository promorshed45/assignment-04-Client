import ProductTable from "./ProductTable";
import CreateProduct from "./CreateProduct";

const ProductManagement = () => {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-10">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-2xl font-semibold">Product List </h2>
            {/* <p className="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit
              or delete existing ones.
            </p> */}
          </div>
          <div>
            <CreateProduct />
          </div>
        </div>
        <ProductTable />
        <div className="flex items-center justify-center pt-6">
          <a
            href="#"
            className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900"
          >
            <span className="hidden lg:block">&larr; Previous</span>
            <span className="block lg:hidden">&larr;</span>
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            1
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            2
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            3
          </a>
          <a
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
          >
            4
          </a>
          <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">Next &rarr;</span>
            <span className="block lg:hidden">&rarr;</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default ProductManagement;
