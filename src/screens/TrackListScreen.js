import React, { useContext, useCallback } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  console.log(state)
  useFocusEffect(
    useCallback(() => {
      fetchTracks();
    }, [])
  );

  return (
    <>
     <FlatList
  data={state}
  keyExtractor={(item) => item._id}
  renderItem={({ item }) => (
    <View>
    <TouchableOpacity
      onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}
    >
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
    </View>
  )}
/>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
