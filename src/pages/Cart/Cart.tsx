import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ShoppingCart } from 'lucide-react'
import { Link } from "react-router-dom";


const Cart = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>

            <button
            type="button"
            className="rounded-md border border-gray-200 bg-gray-100 px-3 py-2 text-sm font-semibold text-black hover:bg-gray-200 hover:text-gray-950 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ShoppingCart className="size-5 text-gray-600" />
          </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 mr-5">
                    <div className="mt-6 space-y-6">
                        <ul className="space-y-4">
                            {products.map((product) => (
                                <li key={product.id} className="flex items-center gap-4">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.name}
                                        className="h-16 w-16 rounded object-contain"
                                    />
                                    <div>
                                        <h3 className="text-sm text-gray-900">{product.name}</h3>
                                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                            <div>
                                                <dd className="inline font-bold">{product.price}</dd>
                                            </div>
                                            <div>
                                                <dt className="inline">Color:</dt>
                                                <dd className="inline">{product.color}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="space-y-4 text-center">
                            <Button asChild
                            variant={"outline"}
                                className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                <Link to='/view-cart'>
                                View Cart (3)
                                </Link>
                            </Button>
                            <Button
                                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Checkout
                            </Button>
                            <Button asChild
                                variant={"ghost"}
                                className="inline-block text-sm text-gray-600 transition hover:underline hover:underline-offset-4"
                            >
                                <Link to='/cart-page'>
                                Continue shopping &rarr;
                                </Link>
                            </Button>
                        </div>
                    </div>
            </PopoverContent>
        </Popover>
    );
};

export default Cart;


const products = [
    {
        id: 1,
        name: 'Nike Air Force 1 07 LV8',
        href: '#',
        price: '₹47,199',
        originalPrice: '₹48,900',
        discount: '5% Off',
        color: 'Orange',
        size: '8 UK',
        imageSrc:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
    },
    {
        id: 2,
        name: 'Nike Blazer Low 77 SE',
        href: '#',
        price: '₹1,549',
        originalPrice: '₹2,499',
        discount: '38% off',
        color: 'White',
        leadTime: '3-4 weeks',
        size: '8 UK',
        imageSrc:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png',
    },
    {
        id: 3,
        name: 'Nike Air Max 90',
        href: '#',
        price: '₹2219 ',
        originalPrice: '₹999',
        discount: '78% off',
        color: 'Black',
        imageSrc:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png',
    },
]