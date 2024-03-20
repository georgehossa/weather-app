import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from 'firebaseConfig';
import React, { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { DrawerStackScreenProps } from '~navigation/types';

type Props = DrawerStackScreenProps<'Login'>;

const Login = ({ navigation }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const [loading, setLoadig] = useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoadig(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response.user);
      if (response?.user) {
        navigation.navigate('DrawerStack', { screen: 'HomeStack' });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadig(false);
    }
  };
  const signUp = async () => {
    setLoadig(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadig(false);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        value={password}
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        onChangeText={(text) => setPasword(text)}
        secureTextEntry
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Pressable onPress={signIn}>
            <Text style={styles.button}>Login</Text>
          </Pressable>
          <Pressable onPress={signUp}>
            <Text style={styles.button}>Create account</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginVertical: 4,
    height: 50,
    padding: 10,
    backgroundColor: '#fff',
    width: '80%',
    borderWidth: 0.5,
  },
  button: {
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 20,
  },
});
