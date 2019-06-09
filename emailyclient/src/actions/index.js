import axios from 'axios'; 
import * as types from './types';

// export const fetchUser = () => {
    
//     return function(dispatch) {
//       axios.get('/api/current_user')
//         .then(res => dispatch({type: FETCH_USER, payload: res}));
//     }
// };

// export const fetchUser = () => 
//     dispatch => axios
//       .get('/api/current_user')
//         .then(res => dispatch({type: FETCH_USER, payload: res}));

const myAxios = axios.create({
   baseURL: 'http://localhost:5000' 
});

export const fetchUser = () =>  async dispatch => {
    const res = await axios.get('/api/current_user'); 
       
    dispatch({type: types.FETCH_USER, payload: res.data });
}; 

export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    
    dispatch({ type: types.FETCH_USER, payload: res.data}); 
};


export const logout = () => dispatch => {
    axios.get('/api/logout'); 
       
    dispatch({type: types.LOGOUT});
};

export const login = () => async dispatch => {
    const res = await myAxios.get('/auth/google'); 
    
    console.log(res);
       
    dispatch({type: types.LOGIN});
}; 

    
