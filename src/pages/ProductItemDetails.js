import React, { useEffect } from "react";
import { ProductDetailsContainer } from "./pagesStyled/ProductItemDetailsStyled";

import {
 useHistory,
 useLocation,
 useRouteMatch,
 withRouter,
} from "react-router-dom";
import { getProductWithIdSelector } from "../redux/products/productsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdOperation } from "../redux/products/productsOperations";
import { addToCartOperation } from "../redux/cart/cartOperations";

const ProductItemDetails = () => {
 const history = useHistory();
 const location = useLocation();
 const match = useRouteMatch();
 const dispatch = useDispatch();
 const productById = useSelector(getProductWithIdSelector);

 const category = match.params.category;
 const productId = match.params.productID;

 useEffect(() => {
  dispatch(getProductByIdOperation(category, productId));
 }, [dispatch, category, productId]);

 const goBack = () => {
  if (location.state) {
   history.push(location.state.from);
  } else history.push(`/products/${category}`);
 };

 return (
  <ProductDetailsContainer>
   <button className="goBack" onClick={goBack}>
    Go back
   </button>

   {productById && (
    <div className="content">
     <h3 className="listItemTitle">{productById.name}</h3>
     <div className="imageWrapper">
      <img
       src={productById.image}
       alt={productById.name}
       className="listItemImage"
      />
     </div>
     <p className="description">{productById.description}</p>
     <p className="priceTitle">
      {productById.isSale ? (
       <>
        <span className="withSalePrice">{productById.price - 1000}</span>{" "}
        <span className="withoutSalePrice">{productById.price}</span>
       </>
      ) : (
       <span className="withoutSalePrice">{productById.price}</span>
      )}
      {" грн"}
     </p>
     <div className="options">
      <button
       onClick={() => dispatch(addToCartOperation(productById))}
       className="addToCartButton"
      >
       Add to cart
      </button>
      <button onClick={""} className="bayNow">
       Bay Now
      </button>
     </div>
    </div>
   )}
  </ProductDetailsContainer>
 );
};

export default withRouter(ProductItemDetails);
