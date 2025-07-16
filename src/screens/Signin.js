import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';



const Signin = () => {
  const {state, signin, clearErrorMessage} = useContext(AuthContext);
  useFocusEffect(
  useCallback(() => {
    clearErrorMessage();
  }, [])
);
  return <View style = {styles.container}>
    <AuthForm
    header="Sign In to your Account"
    errorMessage={state.errorMessage}
    onSubmit={signin}
    submitButtonText = "Sign In"
    />
    <NavLink 
    navTitle="Don't have an account? Go to Sign up"
    routeName= 'Signup'
    />
  </View>
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginBottom: 200,
    justifyContent: 'center'
  },
});

export default Signin;



