import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 120px;
 h5 {
   font-family: 'Montserrat', sans-serif;
   font-size: 30px;
   font-weight: 400;
   padding: 90px 22px 40px;
   letter-spacing: 0.425em;
   text-transform: uppercase;
   @media screen and (max-width: 768px) {
     font-size: 21px;
     padding: 35px 22px;
   }
 }
  .innerSliderItems {
    max-width: 300px;
    img {
      width: 100%;
    }
  }
`;
