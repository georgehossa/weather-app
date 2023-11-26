import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { DrawerStackScreenProps } from '~navigation/types';

type Props = DrawerStackScreenProps<'Login'>;

const Login = ({ navigation }: Props) => {
  const handleButtonClick = () => {
    navigation.navigate('DrawerStack', { screen: 'HomeStack' });
  };
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Pressable onPress={handleButtonClick}>
        <Text
          style={{
            color: 'blue',
            fontWeight: 'bold',
            marginTop: 20,
            alignSelf: 'center',
            fontSize: 20,
          }}>
          Login
        </Text>
      </Pressable>
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
});
