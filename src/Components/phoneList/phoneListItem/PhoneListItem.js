import React from "react";
import { ListItemContainer } from "./PhoneListItemStyled";
import { useDispatch, useSelector } from "react-redux";
import {
 useHistory,
 useLocation,
 useRouteMatch,
 withRouter,
} from "react-router-dom";
import { addToCart } from "../../../redux/cart/cartActions";
import { cartOrderSelector } from "../../../redux/cart/cartSelectors";
import { store } from "react-notifications-component";

const PhoneListItem = ({ phone }) => {
 const dispatch = useDispatch();
 const history = useHistory();
 const location = useLocation();
 const match = useRouteMatch();

 const cartItems = useSelector(cartOrderSelector);

 const addProduct = () => {
  dispatch(addToCart(phone));

  store.addNotification({
   title: "Wonderful!",
   message: "Товар добавлен в корзину",
   type: "success",
   insert: "top",
   container: "top-center",
   animationIn: ["animate__animated", "animate__fadeIn"],
   animationOut: ["animate__animated", "animate__fadeOut"],
   dismiss: {
    duration: 5000,
    onScreen: false,
   },
  });
 };

 const openDetails = () => {
  history.push({
   pathname: `${match.path}/${phone.id}`,
   state: { from: location.pathname },
  });
 };

 return (
  <ListItemContainer>
   <div className="content">
    <h3 className="listItemTitle">{phone.name}</h3>
    <div className="imageWrapper">
     <img
      src={phone.image}
      alt={phone.name}
      className="listItemImage"
      onClick={openDetails}
     />
    </div>

    <p className="priceTitle">
     {phone.isSale ? (
      <>
       <span className="withSalePrice"> {phone.price}</span>{" "}
       <span className="withoutSalePrice">
        {(phone.price - phone.price / 10).toFixed(0)}
       </span>
      </>
     ) : (
      <span className="withoutSalePrice">{phone.price}</span>
     )}
     {" UAH"}
    </p>
    <div className="options">
     <button className="detailsButton" onClick={openDetails}>
      Details
     </button>
     <button onClick={addProduct} className="addToCartButton">
      Add to cart
     </button>
    </div>
   </div>
  </ListItemContainer>
 );
};

export default withRouter(PhoneListItem);
