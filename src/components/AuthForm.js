import React, {useState} from 'react';
import { SafeAreaView,View, StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';



const AuthForm = ({header, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return <>
     <Spacer>
      <Text h3 style = {styles.text}>{header}</Text>
    </Spacer>
    <Spacer>
      <Input 
      label = "Email" 
      value = {email} 
      onChangeText={setEmail}
      autoCapitalize= 'none'
      autoCorrect = {false}
      />
    </Spacer>
  <Spacer>
      <Input 
      secureTextEntry
      label = "Password" 
      value = {password} 
      onChangeText={setPassword}
      autoCapitalize= 'none'
      autoCorrect = {false}
      />
  </Spacer>
  {errorMessage ? <Text style = {styles.errorText}>{errorMessage}</Text> : null}
  <Spacer>
    <Button title= {submitButtonText} style = {styles.button} onPress={() => onSubmit({email, password})}/>
  </Spacer>
  </>
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginBottom: 200,
    justifyContent: 'center'
  },
  button: {
    
  },
  text: {
    marginLeft: 10,
    marginBottom: 20
  },
  errorText: {
    marginLeft: 10,
    marginBottom: 10,
    color: 'red'
  }
})
export default AuthForm;