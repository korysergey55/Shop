import React, { Component } from "react";
import { HeaderContainer } from "./HeaderStyled";
import sprite from "../../icons/header/symbol-defs.svg";
import HeaderList from "./headerList/HeaderList";
import Modal from "../modal/Modal";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUserOperation } from "../../redux/auth/authOperations";
import { mainRoutes } from "../../routes/mainRoutes";

class Header extends Component {
 state = {
  width: window.innerWidth,
  breakPoint: 768,
  isModalOpen: false,
 };

 componentDidMount() {
  window.addEventListener("resize", this.handleResizeWindow);
 }
 componentWillUnmount() {
  window.removeEventListener("resize", this.handleResizeWindow);
 }

 handleResizeWindow = () => this.setState({ width: window.innerWidth });

 setModalState = () =>
  this.setState((prev) => ({ isModalOpen: !prev.isModalOpen }));

 goHome = () => {
  this.props.history.push("/");
 };

 render() {
  const { width, breakPoint, isModalOpen } = this.state;
  const history = this.state.history;
  return (
   <HeaderContainer>
    <h2 className="headerTitle"> AppleMacShop</h2>

    {width < breakPoint ? (
     <svg className="headerIcon" onClick={this.goHome}>
      <use href={sprite + "#icon-home"} />
     </svg>
    ) : null}

    {width < breakPoint ? (
     <svg className="headerIcon" onClick={this.setModalState}>
      <use href={sprite + "#icon-menu"} />
     </svg>
    ) : null}

    <ul className="navigationList">
     {mainRoutes.map((route) => (
      <HeaderList route={route} token={this.props.token} key={route.path} />
     ))}

     {this.props.token && (
      <>
       <li className="navigationListItem">
        <NavLink
         onClick={this.props.logoutUserOperation}
         to="logout"
         className="navigationListItemAnchor"
         activeClassName="navigationListItemActive"
        >
         Logout
        </NavLink>
       </li>
      </>
     )}
    </ul>

    {isModalOpen && (
     <Modal hideModal={this.setModalState}>
      <HeaderList hideModal={this.setModalState} />
     </Modal>
    )}
   </HeaderContainer>
  );
 }
}
const mapStateToProps = (state, ownProps) => ({
 token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => {
 return {
  logoutUserOperation: (history) => dispatch(logoutUserOperation(history)),
 };
};

// const mapDispatchToProps = {
//  logoutUserOperation,
// };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
