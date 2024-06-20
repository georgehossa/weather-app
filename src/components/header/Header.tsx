import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

const Header = () => {
  /* TODO:
   * - If the user is not authenticated, navigate to login screen
   * - if the user is authenticated, show user preferences
   */
  const handleUserClick = () => {
    console.log('show user prefrences');
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={handleUserClick}>
        <Feather name="user" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default Header;
