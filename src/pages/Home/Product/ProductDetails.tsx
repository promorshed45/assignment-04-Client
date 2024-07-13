import { setToCart } from '@/redux/features/cart/cartSlice';
import { useGetSingleProductQuery } from '@/redux/features/products/productsApi';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux/store';
import { useParams } from 'react-router-dom'; 
import { toast } from 'sonner';
import ProductDetailsCard from './ProductDetailsCard';

const ProductDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetSingleProductQuery(id as string);
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state: RootState) => state.cart);
    const product = data?.data;


    if (isLoading) {
        return (
            <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
        );
    }
    

    // find matching cart item
    const cartItem = cart.items.find((item) => item._id === product._id);
    //check is the product out of stock
    const isProductOutOfStock = cartItem
        ? cartItem.quantity >= product.stock
        : false;


    const handleAddToCart = async () => {
        if (!isProductOutOfStock) {
            dispatch(setToCart(product));
            toast.success("Successfully added cart!", {
                duration: 1000,
              });
        }
    };

    console.log(product);
    return (
        
        <ProductDetailsCard
        product={product}
        handleAddToCart={handleAddToCart}
        isProductOutOfStock={isProductOutOfStock}
        />
        
    );
};

export default ProductDetails;
