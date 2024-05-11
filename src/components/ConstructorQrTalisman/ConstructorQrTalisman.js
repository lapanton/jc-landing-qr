import React from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "react-use";
import { Helmet } from "react-helmet";
import axios from "axios";
import "./index.css";
import { Header } from "./components/header/Header";
import { Description } from "./components/description/Description";
import { ConstructorTalisman } from "./components/constructor/Constructor";
import { WrapperPending } from "./components/constructor/constructor-style";
import StarfieldAnimation from "react-starfield-animation";
import logo from "../../components/withUs/logo.png";
import styled from "styled-components";

const WrapCloseText = styled.span`
  &.itCloseText {
    transform: translate(3%, 0%);
    display: inline-block;
    font-family: "Organetto";
    white-space: nowrap;
    color: #fff;
    pointer-events: none;
    position: absolute;
    left: 5rem;
    top: 50%;
    &:hover {
      text-decoration: none;
    }
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const ConstructorQrTalisman = (props) => {
  const { langProps } = props;
  const { id } = useParams();
  const state = useAsync(async () => {
    const result = await axios.get(
      `https://admin.jewelcocktail.com/v1/qrcodes/${id}`,
    );
    return result.data;
  }, [id]);
  const { value, loading } = state;

  if (loading) return null;
  return (
    <div style={{ zIndex: 99999, position: "relative", padding: "0 40px" }}>
      <StarfieldAnimation
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
        depth={4000}
      />
      <Header value={value} langProps={langProps} />
      <Helmet>
        <meta
          name="description"
          content={
            langProps.locale === "ru"
              ? "Живые Hi-Tech украшения с цифровым посланием"
              : "Living Hi-Tech jewelry with a digital message"
          }
        />
      </Helmet>

      {value?.status === "pending" && (
        <WrapperPending>
          <h2>
            {langProps.locale === "ru"
              ? "вы успешно сохранили ваше послание! Через некоторое время выше послание будет доступно"
              : "you have successfully saved your message! After a while, the above message will be availableyou have successfully saved your message! After a while, the above message will be available"}
          </h2>
        </WrapperPending>
      )}
      {["pending", "default"].includes(value?.status) && (
        <Description langProps={langProps} />
      )}
      <ConstructorTalisman value={value} langProps={langProps} />
      {value.status === "completed" && (
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
            href="/"
            style={{ width: "5rem", height: "5rem", display: "inlineBlock" }}
          >
            <img src={logo} alt="JewelCocktail" style={{ maxWidth: "100%" }} />
            {value.status === "completed" && (
              <WrapCloseText className="itCloseText">
                ...closer than it seems
              </WrapCloseText>
            )}
          </a>
        </div>
      )}
    </div>
  );
};
