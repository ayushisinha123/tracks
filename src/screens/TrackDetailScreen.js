import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, {Polyline} from 'react-native-maps';

const TrackDetailScreen = ({route}) => {
   const { state } = useContext(TrackContext);
  const _id = route?.params?._id;
  const track = state.find(t => t._id === _id);
   if (!track) return <Text>Track not found.</Text>;
   console.log(track)
  if (!track.location || track.location.length === 0) return <Text>No location data available.</Text>;

  const initialCoords = track.location[0].coords;
  return <>
  <Text style={{ fontSize: 48 }}>{track.name}</Text>
  <MapView style = {styles.map}
  initialRegion={{
    longitudeDelta : 0.01,
    latitudeDelta : 0.01,
    ...initialCoords
  }}
  >
    <Polyline 
    coordinates={track.location.map(loc => loc.coords)}
    strokeWidth={6}
    strokeColor="#FF0000" 
    />
  </MapView>
  </>
};

const styles = StyleSheet.create({
  map: {
    height : 300
  }
});

export default TrackDetailScreen;