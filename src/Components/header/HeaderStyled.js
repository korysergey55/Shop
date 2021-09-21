import styled from "styled-components";
export const HeaderContainer = styled.header`
 display: flex;
 align-items: center;
 justify-content: center;
 height: 60px;
 padding: 0 20px;
 border-bottom: 2px solid #819ff5;
 background-color: #424242;

 .navigationList {
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 20px;
 }
 .navigationListItem {
  margin-top: 0;
  margin-right: 20px;
  list-style: none;
 }
 .navigationListItemAnchor {
   font-weight: 700;
   text-transform: uppercase;
   text-decoration: none;
   color: #819ff5;

  &:hover {
   color: #5f73a1;
  }
 }
 .headerTitle {
  margin-right: 50px;
  font-size: 25px;
  color: #819ff5;
  text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
   #ff2d95 0px 0px 20px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,
   #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px;
 }

 .headerIcon {
  width: 40px;
  height: 40px;
  fill: #819ff5;
  
  &:hover {
   fill: #5f73a1;
   cursor: pointer;
  }
 }
 @media screen and (max-width: 768px) {
  justify-content: space-between;
 }
`;