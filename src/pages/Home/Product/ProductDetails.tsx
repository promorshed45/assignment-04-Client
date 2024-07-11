import { useGetSingleProductQuery } from '@/redux/features/productsApi';
import { useParams } from 'react-router-dom'; 

const ProductDetails = () => {
    const { id: _id } = useParams();
    const { data, isLoading } = useGetSingleProductQuery(_id as string);

    if (isLoading) {
        return (
            <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
        );
    }

    const { name, description, price, category, stock } = data.data;

    console.log(data.data);
    return (
        <section className="overflow-hidden">
            <div className="mx-auto max-w-5xl px-5 py-24">
                <div className="mx-auto flex flex-wrap items-top lg:w-4/5">
                    <img
                        alt="Nike Air Max 21A"
                        className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
                        src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    />
                    <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10 text-left">
                        <h1 className="my-4 text-3xl font-semibold text-black">{name}</h1>
                        <p className="leading-relaxed">
                            {description}
                        </p>
                        <div className="mb-5 mt-6 space-y-3 items-top border-b-2 border-gray-100 pb-5">
                            <div className="flex items-center">
                                <h1 className="mr-3 text-md font-semibold"> Category: <span className='pl-2 text-xl'>{category}</span> </h1>
                            </div>
                            <div className="ml-auto flex items-center">
                                <h1 className="mr-3 text-md font-semibold">Stock: <span className='pl-2 text-xl'> {stock} </span> </h1>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="title-font text-xl font-bold text-gray-900">Price: {price}</span>
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
