import { IMG_CDN_URL } from "../constants";
import { BiCheckboxSquare, BiCaretUpSquare } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearItem } from '../utils/cartSlice'
import { useState } from "react";
import { setRestaurantDetails, deleteRestaurantDetails } from "../utils/cartSlice";

const MenuItem = ({ id, name, defaultPrice, price, description, cloudinaryImageId, isVeg, resDetail, handleIsModalOn }) => {
    const actualPrice = defaultPrice || price;
    const [isAdd, setIsAdd] = useState(true);
    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.items);
    const restaurantInCart = useSelector(store => store.cart.restaurantDetail)

    const handleAddItem = (itemObj) => {
        if (resDetail.rId !== restaurantInCart.rId && cartItems.length) {
            handleIsModalOn(true);
        } else {
            dispatch(addItem(itemObj));
            dispatch(setRestaurantDetails(resDetail))
            setIsAdd(false)
        }
    }

    const handleRemoveItem = (id) => {
        dispatch(clearItem(id))
        if (cartItems.length === 1) {
            dispatch(deleteRestaurantDetails())
        }
        setIsAdd(true)
    }
    return (
        cloudinaryImageId && <div className="grid grid-cols-4">
            <div className="col-start-2 col-end-4">
                <div className="flex justify-between border-b pt-6 pb-9 items-center">
                    <div>
                        {isVeg ? <BiCheckboxSquare className="text-green-700 text-2xl" /> : <BiCaretUpSquare className="text-red-600 text-xl" />}
                        <h3 className="text-xl font-medium">{name}</h3>
                        <div className="text-base font-medium opacity-90">&#8377; {actualPrice / 100}</div>
                        <div className="text-sm mt-[18px] text-[rgba(40,44,63,.45)]">{description}</div>
                    </div>
                    <div className="h-[120px] min-w-118 max-w-118 ml-3 relative">
                        <img className="h-full w-full rounded-md" src={IMG_CDN_URL + cloudinaryImageId} />
                        {isAdd ?
                            <button
                                className="text-[#60b246] border text-xs font-bold py-2 px-8 absolute left-2/4 -bottom-2 -translate-x-1/2 bg-white hover:scale-x-105"
                                onClick={() => { handleAddItem({ id, name, defaultPrice, price, cloudinaryImageId, isVeg }) }}>ADD</button> :
                            <button
                                className="text-[#60b246] border text-xs font-bold py-2 px-5 absolute left-2/4 -bottom-2 -translate-x-1/2 bg-white hover:scale-x-105"
                                onClick={() => { handleRemoveItem(id) }}>REMOVE</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItem;