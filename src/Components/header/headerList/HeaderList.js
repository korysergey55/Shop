import React from "react";
import { HeaderNavigation } from "./HeaderListStyled";
import { NavLink, withRouter } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoutes";
import { useSelector } from "react-redux";
import { cartItemLengthSelector } from "../../../redux/cart/cartSelectors";


const HeaderList = ({  hideModal }) => {
  const cartItemsLength = useSelector(cartItemLengthSelector);
 return (
  <HeaderNavigation>
   <ul className="navigationList">
    {mainRoutes.map((route) => (
     <li className="navigationListItem" key={route.path}>
      <NavLink
       to={route.path}
       exact={route.exact}
       className="navigationListItemAnchor"
       activeClassName="navigationListItemActive"
       onClick={hideModal}
      >
       {route.name}
       {route.name === "Cart" ? <span className='cartLength'>{cartItemsLength}</span> : ""}
      </NavLink>
     </li>
    ))}
   </ul>
  </HeaderNavigation>
 );
};

export default withRouter(HeaderList);
