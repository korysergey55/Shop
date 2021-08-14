import React, { Suspense, useEffect } from "react";
import styles from "./pagesStyled/ProductsPageStyled.module.css";
import Filter from "../Components/filter/Filter"

import { productsRoutes } from "../routes/productsRoutes";
import { NavLink, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";

const ProductsPage = () => {

 const history = useHistory();
 const match = useRouteMatch();

 useEffect(() => {
  history.push(match.path + "/phones");
 }, [history]);

 return (
   <div className={styles.ProductsPageContainer}>
   <ul className={styles.navigationList}>
    {productsRoutes.map(
     (route) =>
     route.isLink && (
       <li className={styles.navigationListItem} key={route.path}>
        <NavLink
         to={match.url + route.path}
         exact={route.exact}
         icon={route.icon}
         className={styles.navigationListItemAnchor}
         activeClassName={styles.navigationListItemActive}
        >
         {route.icon}
         {route.name}
        </NavLink>
       </li>
      )
      )}
   </ul>
      <Filter/>

   <Suspense fallback={<h2>...loading</h2>}>
    <Switch>
     {productsRoutes.map(({ name, path, exact, component }) => (
      <Route
       name={name}
       key={path}
       path={match.path + path}
       exact={exact}
       component={component}
      />
     ))}
    </Switch>
   </Suspense>
  </div>
 );
};

export default ProductsPage;
