import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { BiCheckboxSquare, BiCaretUpSquare } from "react-icons/bi";
import { removeItem } from "../utils/cartSlice";


const EmptyCartJSX = () => {
    return (<div className="flex justify-center flex-col items-center my-6">
        <img alt="Empty cart" className="w-[271px] h-56" src={IMG_CDN_URL + '2xempty_cart_yfxml0'} />
        <div className="text-[#535665] font-semibold text-xl mt-6">Your cart is empty</div>
        <div className="text-[#7e808c] mt-2 text-sm ">You can go to home page to view more restaurants</div>
    </div>)
}

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const restaurantDetail = useSelector(store => store.cart.restaurantDetail)
    const totalPrice = cartItems.reduce((acc, item) => acc + ((item.defaultPrice || item?.price) / 100), 0);
    const dispatch = useDispatch();
    const handleRemoveAll = () => {
        dispatch(removeItem())
    }
    return cartItems.length === 0 ? <EmptyCartJSX /> : <div className="bg-[#e9ecee] py-16 px-24">
        <div className="grid grid-cols-3 gap-4 ">
            <div className="col-span-2 bg-white p-8">
                <div className="flex mb-8">
                    <div>
                        <img alt="restaurent image" className="h-20 w-20" src={IMG_CDN_URL + restaurantDetail?.resImage} />
                    </div>
                    <div className="ml-4 border-b-2 border-black">
                        <div className="pt-2 text-[17px] text-[#282c3f] font-medium">{restaurantDetail?.resName}</div>
                        <div className="text-[#686b78] text-sm">{restaurantDetail?.resArea}</div>
                    </div>
                    <button className="h-11 bg-gray-600 px-4 text-white hover:scale-x-105 ml-auto" onClick={() => handleRemoveAll()}>Remove All</button>
                </div>
                <div className="mx-8">
                    {console.log("c", cartItems)}
                    {cartItems?.map((item) => {
                        return (
                            <div key={item?.id} className="flex items-center pb-2">
                                {item?.isVeg ? <BiCheckboxSquare className="text-green-700 text-2xl" /> : <BiCaretUpSquare className="text-red-600 text-lg ml-1" />}
                                <div className="pl-4">{item?.name}</div>
                                <div className="text-base font-medium opacity-90 ml-auto">&#8377; {(item?.defaultPrice || item?.price) / 100}</div>
                            </div>
                        )
                    })}
                    <div className="flex justify-between items-center border-black border-t-2 font-medium pt-2 mt-2">
                        <div>TO PAY</div>
                        <div>&#8377; {totalPrice}</div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-8">
                <div className="text-[#93959F] font-medium text-lg">Payment</div>
            </div>
        </div>
    </div>
}

export default Cart;