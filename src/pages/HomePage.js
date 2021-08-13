import React from "react";
import styles from "./pagesStyled/HomePageStyled.module.css";
import LaptopList from "../Components/laptopList/LaptopList";
import PhoneList from "../Components/phoneList/PhoneList";
import Filter from "../Components/filter/Filter";

const HomePage = () => {
 return (
  <>
   <h2 className={styles.homePageTitle}>My Apple Shop</h2>

   <Filter />
   <PhoneList />
   <LaptopList />
  </>
 );
};

export default HomePage;
