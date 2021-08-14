import React from "react";
import styles from "./pagesStyled/HomePageStyled.module.css";
import LaptopList from "../Components/laptopList/LaptopList";
import PhoneList from "../Components/phoneList/PhoneList";

const HomePage = () => {
 return (
  <>
   <h2 className={styles.homePageTitle}>My Apple Shop</h2>

   <PhoneList />
   <LaptopList />
  </>
 );
};

export default HomePage;
