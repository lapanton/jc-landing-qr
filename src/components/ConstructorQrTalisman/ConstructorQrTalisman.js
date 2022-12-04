import React from 'react';
import {useParams} from "react-router-dom";
import {useAsync} from "react-use";
import { Helmet } from "react-helmet";
import axios from "axios";
import './index.css';
import { Header } from "./components/header/Header";
import { Description } from "./components/description/Description";
import {ConstructorTalisman} from "./components/constructor/Constructor";
import {WrapperPending} from "./components/constructor/constructor-style";
import StarfieldAnimation from "react-starfield-animation";


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
      <StarfieldAnimation
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh'
        }}
        depth={4000}
      />
      <Header value={value} />
      <Helmet>
        <meta
          name="description"
          content="Живые Hi-Tech украшения с цифровым талисманом"
        />
      </Helmet>

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

