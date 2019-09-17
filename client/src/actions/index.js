import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
/*

const fetchuser =()=>{
    return function (dispatch){
        axios.get ("sdcsdc/csd/csdc/wds")
        .then(res=> dispatch({type: fetch_user,payload:res.data}))
    }
}

ye neachay wala khud se kiya hai mane ulta

export const handleToken =function ( token) => {
    async function (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
}

*/
