import { lazy } from "react";
import AirPodsIcon from "../Components/productIcons/AirPodsIcon";
import AppleWatchIcon from "../Components/productIcons/AppleWatchIcon";
import IpadIcon from "../Components/productIcons/IpadIcon";
import IphoneIcon from "../Components/productIcons/IphoneIcon";
import MacIcon from "../Components/productIcons/MacIcon";

export const productsRoutes = [
  {
    name: "ProductDetails",
    path: "/:category/:productID",
    component: lazy(() => import("../Components/productDeteils/ProductItemDetails")),
    exact: false,
    isLink: false,
  },
  {
    name: "iPhones",
    path: "/phones",
    component: lazy(() => import("../Components/phoneList/PhoneList")),
    exact: true,
    isLink: true,
    icon: <IphoneIcon />,
  },
  {
    name: "Mac",
    path: "/laptops",
    component: lazy(() => import("../Components/laptopList/LaptopList")),
    exact: true,
    isLink: true,
    icon: <MacIcon />,
  },
  {
    name: "iPad",
    path: "/ipad",
    component: lazy(() => import("../Components/ipad/IpadList")),
    exact: true,
    isLink: true,
    icon: <IpadIcon />,
  },
  {
    name: "AppleWatch",
    path: "/watch",
    component: lazy(() => import("../Components/watch/AppleWatchList")),
    exact: true,
    isLink: true,
    icon: <AppleWatchIcon />,
  },
  {
    name: "AirPods",
    path: "/pods",
    component: "",
    exact: true,
    isLink: true,
    icon: <AirPodsIcon />,
  },
];
