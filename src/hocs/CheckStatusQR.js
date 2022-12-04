import {useAsync} from 'react-use';
import { useParams } from 'react-router-dom'; // Navigate, Link, useLocation
import axios from "axios";

const CheckStatusQR = ({ children }) => {
  const { id } = useParams();
  const state = useAsync(async () => {
    const result = await axios.get(`https://admin.jewelcocktail.com/v1/qrcodes/${id}`);
    return result.data;
  }, [id]);
  // const location = useLocation();
  const { status, typeMessage } = state.value || {};
  if (state.loading) return null;
  // console.log('typeMessage', typeMessage);
  // return (["default", "completed", "pending"].includes(status) && typeMessage !== undefined) ? children(typeMessage) : window.location = "/";
  return ["default", "completed", "pending"].includes(status) ? children(typeMessage) : window.location = "/";
};

export default CheckStatusQR;
