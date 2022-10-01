import React from 'react';
import {useParams} from "react-router-dom";
import {useAsync} from "react-use";
import axios from "axios";
import './index.css';
import { Header } from "./components/header/Header";
import { Description } from "./components/description/Description";
import {ConstructorTalisman} from "./components/constructor/Constructor";
import {WrapperPending} from "./components/constructor/constructor-style";


export const ConstructorQrTalisman = () =>   {
  const { id } = useParams();
  const state = useAsync(async () => {
    const result = await axios.get(`https://admin.jewelcocktail.com/v1/qrcodes/${id}`);
    return result.data;
  }, [id]);
  const  { value, loading } = state;

  if (loading) return null;
  return (
    <div style={{ zIndex: 99999, position: 'relative', padding: '0 40px' }}>
      <Header value={value} />

      { (value?.status === 'pending') && (
      <WrapperPending>
        <h2>вы успешно сохранили ваше послание! Через некоторое время выше послание будет доступно</h2>
      </WrapperPending>)
    }
      {['pending', 'default'].includes(value?.status) && <Description /> }
      <ConstructorTalisman value={value} />
    </div>
  )
};

