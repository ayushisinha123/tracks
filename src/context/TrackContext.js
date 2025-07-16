import LocationContext from './LocationContext';
import createDataContext from './createDataContext';
import tracksApi from "../api/tracks";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TrackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
};

const fetchTracks = dispatch => async() => {
  const response = await tracksApi.get('/tracks');
  dispatch({type:'fetch_tracks', payload: response.data});
};

const createTracks = dispatch => async (name, locations) => {
  await tracksApi.post('/createTracks', { name, location: locations });
};


export const {Context, Provider} = createDataContext(
    TrackReducer, 
    {fetchTracks, createTracks},
    []
);