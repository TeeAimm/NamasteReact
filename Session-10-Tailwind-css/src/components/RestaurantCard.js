import { IMG_CDN_URL } from "../constants";
import { TbDiscount2 } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";

const RestaurantCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    slaString,
    avgRating,
    costForTwoString,
    aggregatedDiscountInfo,
    ribbon
}) => {
    return (
        <div className="p-4 border-[1px] border-white m-2 hover:border-[1px] hover:border-gray-300 relative">
            {ribbon?.[0]?.type && <div className="absolute left-2 text-white py-1 px-2 bg-[#3A3C41] font-medium text-xs">{ribbon?.[0]?.type}</div>}
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-semibold pt-3 text-base">{name}</h2>
            <h3 className="text-sm text-[#686b78]">{cuisines?.join(", ")}</h3>
            <div className="flex justify-between py-4 text-xs text-[#535665] border-b">
                <div className={`flex justify-between items-center ${+avgRating >= 4 ? 'bg-[#48c479]' : 'bg-[#db7c38]'}  py-[1px] px-1 text-white`}>
                    <span className="text-sm"><AiFillStar/></span>
                    <span className="pl-1">{avgRating}</span>
                </div>
                <div>•</div>
                <div>{slaString}</div>
                <div>•</div>
                <div>{costForTwoString}</div>
            </div>
            <div className="flex items-center text-[#8a584b] pt-3 font-semibold">
                <span><TbDiscount2/></span>
                <span className="pl-1 text-sm">{aggregatedDiscountInfo?.shortDescriptionList?.[0]?.meta}</span>
            </div>
        </div>
    );
};

export default RestaurantCard;
