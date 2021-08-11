import React from "react";
import { HeaderNavigation } from "./HeaderListStyled";
import { NavLink, withRouter } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoutes";

const HeaderList = ({ data, hideModal, match }) => {
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
      </NavLink>
     </li>
    ))}
   </ul>
  </HeaderNavigation>
 );
};

export default withRouter(HeaderList);
