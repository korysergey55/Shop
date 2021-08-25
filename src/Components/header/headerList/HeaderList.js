import React from "react";
import { HeaderNavigation } from "./HeaderListStyled";
import { NavLink, withRouter } from "react-router-dom";

import { useSelector } from "react-redux";
import { cartItemLengthSelector } from "../../../redux/cart/cartSelectors";

const HeaderList = ({ route, token, hideModal }) => {
 const cartItemsLength = useSelector(cartItemLengthSelector);
 return (
  <HeaderNavigation>
   {!route.isPrivate && !route.isRestricted && (
    <li className="navigationListItem" key={route.path}>
     <NavLink
      to={route.path}
      exact={route.exact}
      className="navigationListItemAnchor"
      activeClassName="navigationListItemActive"
      onClick={hideModal}
     >
      {route.name}
      {route.name === "Cart" ? (
       <span className="cartLength">{cartItemsLength}</span>
      ) : (
       ""
      )}
     </NavLink>
    </li>
   )}
   {route.isPrivate && token && (
    <li className="navigationListItem" key={route.path}>
     <NavLink
      to={route.path}
      exact={route.exact}
      className="navigationListItemAnchor"
      activeClassName="navigationListItemActive"
      onClick={hideModal}
     >
      {route.name}
      {route.name === "Cart" ? (
       <span className="cartLength">{cartItemsLength}</span>
      ) : (
       ""
      )}
     </NavLink>
    </li>
   )}
   {!route.isPrivate && route.isRestricted && !token && (
    <li className="navigationListItem" key={route.path}>
     <NavLink
      to={route.path}
      exact={route.exact}
      className="navigationListItemAnchor"
      activeClassName="navigationListItemActive"
      onClick={hideModal}
     >
      {route.name}
      {route.name === "Cart" ? (
       <span className="cartLength">{cartItemsLength}</span>
      ) : (
       ""
      )}
     </NavLink>
    </li>
   )}
  </HeaderNavigation>
 );
};

export default withRouter(HeaderList);
