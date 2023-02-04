import { IMG_CDN_URL } from "../constants";
import { BiCheckboxSquare,BiCaretUpSquare } from "react-icons/bi";

const MenuItem = ({ name, price, description, cloudinaryImageId,isVeg }) => {
    return (
        <div className="grid grid-cols-4">
            <div className="col-start-2 col-end-4">
                <div className="flex justify-between border-b py-6 items-center">
                    <div>
                        {isVeg ? <BiCheckboxSquare className="text-green-700 text-2xl" />: <BiCaretUpSquare className="text-red-600 text-xl"/>}
                        <h3 className="text-xl font-medium">{name}</h3>
                        <div className="text-base font-medium opacity-90">&#8377; {price / 100}</div>
                        <div className="text-base mt-[18px] text-[rgba(40,44,63,.45)]">{description}</div>
                    </div>
                    <div className="img">
                        <img className="h-24" src={IMG_CDN_URL + cloudinaryImageId} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuItem;