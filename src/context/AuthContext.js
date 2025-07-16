
import createDataContext from "./createDataContext";
import tracks from "../api/tracks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {navigate} from '../navigatorRef'

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error': 
          return {...state, errorMessage: action.payload}
        case 'signin' :
          return {...state, errorMessage: '', token: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        case 'signout':
            return { token: null, errorMessage: ''}
        case 'set_loading':
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async() => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token }); // sets token in state
  }
  dispatch({ type: 'set_loading', payload: false }); // done loading either way
};

const clearErrorMessage = (dispatch) =>  () => {
    dispatch({ type: 'clear_error_message' });
  };

const signup = (dispatch) =>  async ({ email, password }) => { 
    try {
      const response = await tracks.post('/signup', {email, password})
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({type: 'signin', payload: response.data.token})
      //navigate('Main')
    } catch (err) {
       dispatch({type:'add_error', payload: 'Something went wrong while signing up'})
    }
  } 
  
const signin = (dispatch) =>  async ({email, password}) => {
    try {
      const response = await tracks.post('/signin', {email, password})
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({type: 'signin', payload: response.data.token})
      //navigate('Main')
    } catch (err) {
       dispatch({type:'add_error', payload: 'Something went wrong while signing in'})
    }
    }


const signout = (dispatch) => async() => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('Auth');
}


export const {Provider, Context} = createDataContext (
   authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: '', loading: true}
);



    