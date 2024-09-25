import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px 50px;
  font-size: 12px;
  text-align: center;
  border-top: 1px solid #c4c4c4;
  position: relative;
  z-index: 99998;
  color: ${(props) => props.color};
`;
