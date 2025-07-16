import React, {useContext} from 'react';
import { View, StyleSheet} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const Signup = () => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext);

  
  useFocusEffect(
    useCallback(() => {
      clearErrorMessage();
    }, [])
  );
  
  return <View style = {styles.container}>
    <AuthForm
    header="Sign Up for Tracker"
    errorMessage={state.errorMessage}
    submitButtonText = "Sign Up"
    onSubmit={signup}
    />
    <NavLink 
    navTitle="Already have an account? Sign in instead."
    routeName= 'Signin'
    />
  </View>
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginBottom: 200,
    justifyContent: 'center'
  }
});

export default Signup;