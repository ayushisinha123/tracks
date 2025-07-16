import { useContext } from "react";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as TrackContext } from "../context/TrackContext";
import {navigate} from '../navigatorRef';

export default () => {
   const {createTracks} = useContext(TrackContext);
   const {state: {locations, name}, reset} = useContext(LocationContext);

   const saveTrack = async() => {
    await createTracks(name, locations)
    reset();
    navigate('Tracks', {
     screen: 'TrackList'
    });
   }
   return [saveTrack];
};