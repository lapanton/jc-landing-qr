import React, { useEffect } from 'react';
import {useParams} from "react-router-dom";
import {useAsync} from "react-use";
import axios from "axios";
import './index.css';
import { Header } from "./components/header/Header";
import { Description } from "./components/description/Description";
import {Constructor} from "./components/constructor/Constructor";
import {BottomSlider} from "./components/bottomSlider/BottomSlider";


export const ConstructorQr = () =>   {
  const { id } = useParams();
  const state = useAsync(async () => {
    const result = await axios.get(`https://admin.jewelcocktail.com/v1/qrcodes/${id}`);
    return result.data;
  }, [id]);
  const  { value, loading } = state;

  if (loading) return null;
  return (
    <div style={{ zIndex: 99999, position: 'relative' }}>
      <Header />
      {value?.status !== 'completed' && <Description /> }
      <Constructor value={value} />
      {value?.status !== 'completed' && <BottomSlider /> }
    </div>
  )
};

