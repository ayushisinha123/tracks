import React, {useContext} from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { useNavigation } from '@react-navigation/native';

const NavLink = ({navTitle, routeName}) => {
    const navigation = useNavigation();
   return <>
   <TouchableOpacity style={{ padding: 5 }} onPress={() => navigation.navigate(routeName)}>
    <Spacer>
    <Text style = {styles.actionText}>{navTitle}</Text>
    </Spacer>
  </TouchableOpacity>
  </>
}

const styles = StyleSheet.create({
    actionText: {
    marginLeft: 10,
    color: 'blue',
    fontSize: 20
  },
})

export default NavLink;