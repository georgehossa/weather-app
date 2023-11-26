import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text>Favorites Screen</Text>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
