import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import MenuItem from "./MenuItem";
import Shimmer from "./Shimmer";
import { AiFillStar } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurant = useRestaurant(resId);

    return !restaurant ? <Shimmer /> : (
        <>
            <div className="flex bg-[#171a29] text-white py-10 px-20">
                <img className="h-40" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <div className="px-14">
                    <h2 className="text-3xl">{restaurant?.name}</h2>
                    <div className="text-[15px] mt-2 opacity-70">{restaurant?.cuisines?.join(', ')}</div>
                    <div className="text-[15px] mt-3 opacity-70">{restaurant?.locality}, {restaurant?.area}</div>
                    <div className="mt-5 flex">
                        <div className="pr-9 border-r">
                            <div className="flex items-center font-semibold">
                                <span><AiFillStar /></span>
                                <span className="pl-[2px]">{restaurant?.avgRatingString}</span>
                            </div>
                            <div className="text-xs opacity-70">{restaurant?.totalRatingsString}</div>
                        </div>
                        <div className="px-9 border-r">
                            <div className="font-semibold">{restaurant?.sla?.slaString}</div>
                            <div className="text-xs opacity-70">Delivery Time</div>
                        </div>
                        <div className="pl-9">
                            <div className="font-semibold">{restaurant?.costForTwo / 100}</div>
                            <div className="text-xs opacity-70">Cost for two</div>
                        </div>
                    </div>
                </div>
                <div className="ml-auto">
                    <div className="relative inline top-3 pr-[10px] pb-[6px] text-xl bg-[#171A29] font-medium">OFFER</div>
                    <div className="border border-white pt-8 pr-10 pb-6 pl-6 font-medium text-sm">
                        {restaurant?.aggregatedDiscountInfo?.descriptionList.map((item, index) => {
                            return <div className="flex items-center" key={index}><TbDiscount2 className="text-3xl pr-[2px]" />{item?.meta}</div>
                        })}
                    </div>
                </div>
            </div>

            <div className="mt-10">
                {(Object.values(restaurant?.menu?.items)).map((item) => {
                    return (
                        <MenuItem {...item} key={item.id} />
                    )
                })}
            </div>
        </>
    )
}

export default RestaurantMenu;