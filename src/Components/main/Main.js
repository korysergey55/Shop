import React, { Suspense } from "react";
import { MainContainer } from "./MainStyled";
import { Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import { useSelector } from "react-redux";
import { authTokenSelector } from "../../redux/auth/authSelectors";

const Main = () => {
 const token = useSelector(authTokenSelector);
 return (
  <>
   <MainContainer>
    <Suspense fallback={<h2>...loading</h2>}>
     <Switch>
      {mainRoutes.map((route) =>
       route.isPrivate ? (
        <PrivateRoute
         path={route.path}
         exact={route.exact}
         component={route.component}
         key={route.path}
         token={token}
        />
       ) : (
        <PublicRoute
         path={route.path}
         exact={route.exact}
         isRestricted={route.isRestricted}
         component={route.component}
         key={route.path}
         token={token}
        />
       )
      )}
     </Switch>
    </Suspense>
   </MainContainer>
  </>
 );
};

export default Main;
