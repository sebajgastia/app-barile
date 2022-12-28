import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button} from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUp } from '../store/actions/auth.action' 
import Input from '../components/Input'

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const AuthScreen = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [email] = useState('')
  const [password] = useState('')

  useEffect(() => {
    if (error) {
      Alert.alert("A ocurrido un error", error, [{ text: "Ok" }]);
    }
  }, [error]);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleSignUp = () => {
    dispatch(signUp(email, password));
  };

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <View style={styles.container}>
        <Text style={styles.title}>MI CUENTA</Text>
        <View>
          <Input
            id="email"
            label="Email"
            placeholder='example@example.com'
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="Por favor ingrese un email valido"
            onInputChange={onInputChangeHandler}
            initialValue=""
          />

          <Input
            style={styles.input}
            id="password"
            label='Contraseña'
            placeholder="Contraseña"
            keyboardType="default"
            secureTextEntry
            required
            minLength={6}
            autoCapitalize="none"
            errorText="Por favor ingrese un password"
            onInputChange={onInputChangeHandler}
            
            initialValue=""
          />
        </View>
      <View style={styles.footer}>
        <View style={styles.button}>
          <Button  title="Ingresar" onPress={handleSignUp}/>
        </View>
      </View>
    </View>
  </KeyboardAvoidingView>
  );
};


export default AuthScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
      },
      title: {
        fontSize: 24,
        marginBottom: 18,
      },
      container: {
        width: "80%",
        maxWidth: 400,
        backgroundColor: "#fff",
        height: "50%",
        maxHeight: 400,
        padding: 12,
      },
})

