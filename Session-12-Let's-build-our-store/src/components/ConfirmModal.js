import { useDispatch } from "react-redux"
import { deleteRestaurantDetails, removeItem } from "../utils/cartSlice"

const ConfirmModal = ({handleCloseModal}) => {
    const dispatch = useDispatch()
    const handleClose = () => {
        handleCloseModal(false)
    }
    const handleStartNew = () => {
        dispatch(removeItem());
        dispatch(deleteRestaurantDetails());
        handleClose()
    }
    return <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-transparent opacity-100 z-50">
        <div className="p-8 bg-white shadow-2xl w-1/3 border">
            <div className="text-[#282c3f] font-semibold text-xl pb-1">Items already in cart</div>
            <div className="text-sm text-[#535665] pb-6">Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?</div>
            <div className="flex justify-between text-sm font-semibold">
                <button className="border-2 flex justify-center basis-0 grow border-[#60b246] text-[#60b246] py-2 hover:shadow-md" onClick={() => handleClose()}>NO</button>
                <span className="w-5"></span>
                <button className="border-2 border-[#60b246] flex justify-center basis-0 grow py-2 text-white bg-[#60b246] hover:shadow-md" onClick={() => handleStartNew()}>YES, START AFRESH</button>
            </div>
        </div>
    </div>
}
export default ConfirmModal;