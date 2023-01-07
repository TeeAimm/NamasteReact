import React from "react";
import ReactDOM from "react-dom/client";

import casperLogo from "./asset/image/Casper.png";

console.log("Food-Dom App");

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Food-Dom logo"
      src="https://www.clipartmax.com/png/middle/112-1129793_healthy-food-logo-png.png"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = ({name,cloudinaryImageId,cuisines, lastMileTravelString}) => {
 //console.log("p--",props)
  return (
    <div className="restaurant-list">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines?.join(', ')}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};
const restaurantData = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "439223",
      name: "KARIM'S- Original from Jama Masjid Delhi- 6",
      uuid: "f6bf81b0-c31e-4283-94bd-888801fca5bd",
      city: "7",
      area: "Salt Lake",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "wusbnsbstd15y20fr2ck",
      cuisines: [
        "North Indian",
        "Biryani",
        "Tandoor",
        "Lucknowi",
        "Desserts",
        "Indian",
        "Kebabs",
      ],
      tags: [],
      costForTwo: 80000,
      costForTwoString: "₹800 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 4.400000095367432,
      slugs: {
        restaurant:
          "karims-(original-from-jama-masjid-delhi-6)-salt-lake-salt-lake",
        city: "kolkata",
      },
      cityState: "7",
      address:
        "AD-53, near Tank No 4, AD Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064, India",
      locality: "Bidhannagar",
      parentId: 284854,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4400,
        message: "",
        title: "Delivery Charge",
        amount: "4400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5615840~p=10~eid=00000185-8d3c-7496-13a1-a2fd00b80a0c",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "439223",
        deliveryTime: 40,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 4.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.1",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "301010",
      name: "Kolkata@99",
      uuid: "5ff9dcc9-0fea-4792-a293-bcb5223cd879",
      city: "7",
      area: "Bidhannagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "ptx2rjik3s57qhc6wz9o",
      cuisines: ["Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "37 MINS",
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: "kolkata@99-salt-lake-salt-lake",
        city: "kolkata",
      },
      cityState: "7",
      address: "Govinda Bhavan,2nd floor, near IAM",
      locality: "Salt Lake",
      parentId: 120048,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3000,
        message: "",
        title: "Delivery Charge",
        amount: "3000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "301010",
        deliveryTime: 37,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.6",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "36171",
      name: "China Green",
      uuid: "8a3f03f8-098b-4891-9079-b53955755e00",
      city: "7",
      area: "Bidhannagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "kz5hbqym7xhskmdq5hzn",
      cuisines: ["Chinese", "Asian", "Oriental", "Thai", "Pan-Asian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 41,
      minDeliveryTime: 35,
      maxDeliveryTime: 35,
      slaString: "41 MINS",
      lastMileTravel: 1,
      slugs: {
        restaurant: "china-green-prince-anwar-shah-road-jadavpur",
        city: "kolkata",
      },
      cityState: "7",
      address: "Naya Patty, Sector V, Kolkata-700102",
      locality: "Near NAvina Cinemas",
      parentId: 7686,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3000,
        message: "",
        title: "Delivery Charge",
        amount: "3000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "36171",
        deliveryTime: 41,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        lastMileTravel: 1,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "5246",
      name: "Haka",
      uuid: "f53c8f77-cda4-4f4b-8d0d-1f01014534aa",
      city: "7",
      area: "Bidhannagar",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "sclizan9ikrrzbguyncr",
      cuisines: ["Chinese", "Asian", "Seafood"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 49,
      minDeliveryTime: 40,
      maxDeliveryTime: 50,
      slaString: "40-50 MINS",
      lastMileTravel: 4.099999904632568,
      slugs: {
        restaurant: "haka-salt-lake",
        city: "kolkata",
      },
      cityState: "7",
      address:
        "E-205, Block-E, City Centre, DC Block, Sector-1, Salt Lake, Kolkata 700064",
      locality: "Salt Lake",
      parentId: 92713,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4400,
        message: "",
        title: "Delivery Charge",
        amount: "4400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5686610~p=7~eid=00000185-8d3c-7496-13a1-a2fc00b8072a",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "5246",
        deliveryTime: 49,
        minDeliveryTime: 40,
        maxDeliveryTime: 50,
        lastMileTravel: 4.099999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.5",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "242966",
      name: "La Pino'z Pizza",
      uuid: "590e7dd7-4dd1-4961-92f1-63a18a88e9ee",
      city: "7",
      area: "Bidhannagar",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "vipohbpqczfrv6jnycwa",
      cuisines: ["Italian", "Snacks"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 45,
      minDeliveryTime: 37,
      maxDeliveryTime: 37,
      slaString: "45 MINS",
      lastMileTravel: 0.8999999761581421,
      slugs: {
        restaurant: "la-pino'z-sector-v-salt-lake-sector-v-salt-lake",
        city: "kolkata",
      },
      cityState: "7",
      address:
        "SHOP NO 3 GROUND FLOOR  NETGURU BUILDING  E2 4 BLOCK GP SECTOR V  SALT LAKE  BIDHANNAGAR  KOLKATA   700091",
      locality: "Sector V Salt Lake",
      parentId: 4961,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3000,
        message: "",
        title: "Delivery Charge",
        amount: "3000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "242966",
        deliveryTime: 45,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        lastMileTravel: 0.8999999761581421,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "66633",
      name: "Agarwal's Kitchen",
      uuid: "e80b88c4-51f4-41fd-9880-21303afa466c",
      city: "7",
      area: "Bidhannagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "scs7y4lcgfapjik9z6wv",
      cuisines: ["Thalis", "North Indian", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "32 MINS",
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: "agarwals-kitchen-salt-lake-salt-lake",
        city: "kolkata",
      },
      cityState: "7",
      address: "AL-5, Sector II, Salt Lake, Kolkata-700091",
      locality: "Salt Lake",
      parentId: 6085,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹100 | Use code WELCOMEBACK",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3000,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3000,
        message: "",
        title: "Delivery Charge",
        amount: "3000",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "66633",
        deliveryTime: 32,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
];
const Body = () => (
  <div className="body">
    {
      restaurantData.map((restaurant)=> {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
      })
    }
  </div>
);
const Footer = () => <div>Footer</div>;

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
