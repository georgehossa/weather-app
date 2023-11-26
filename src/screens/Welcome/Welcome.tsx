import { Button, StyleSheet, Text, View } from 'react-native';

import { DrawerStackScreenProps } from '~navigation/types';

type Props = DrawerStackScreenProps<'Welcome'>;
const Welcome = ({ navigation }: Props) => {
  const handleSignUp = () => {
    navigation.navigate('DrawerStack', { screen: 'SignUp' });
  };
  const handleLogin = () => {
    navigation.navigate('DrawerStack', { screen: 'Login' });
  };
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <Button title="I'm new here" onPress={handleSignUp} />
      <Button title="I have an account" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;
