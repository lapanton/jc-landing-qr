import React from 'react';
import {useAsync} from 'react-use';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import axios from "axios";

const CheckStatusQR = ({ children }) => {
  const { id } = useParams();
  const state = useAsync(async () => {
    const result = await axios.get(`https://admin.jewelcocktail.com/v1/qrcodes/${id}`);
    return result.data;
  }, [id]);

  const location = useLocation();
  const { status } = state.value;
  return status === "pending" ? children : <Navigate to="/" replace state={{ path: location.pathname }} />;
};

export default CheckStatusQR;
