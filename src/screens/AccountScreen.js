import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer'

const AccountScreen = () => {
  const {signout} = useContext(AuthContext);
  return <SafeAreaView forceInset={{top: 'always'}}>
    <Spacer>
      <Button title= 'Sign Out' onPress={() => signout()}/>
    </Spacer>
  </SafeAreaView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 200,
    justifyContent: 'flex-start',
  }
});

export default AccountScreen;