import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { globalStyles } from '~styles/global';
import { COLORS } from '~theme';
import { Place } from '~types/search.types';

type SearchResultProps = {
  item: Place;
};

const SearchResult = ({ item }: SearchResultProps) => {
  const navigation = useNavigation();

  const handleSelect = () => {
    navigation.navigate('HomeStack', { screen: 'Home', params: { place: item } });
  };

  return (
    <Pressable onPress={handleSelect} style={styles.pressable}>
      <Feather name="map-pin" size={20} color={COLORS.white} />
      <View>
        <Text style={[globalStyles.paragraph, globalStyles.colorWhite]}>{item.name}</Text>
        <Text style={[globalStyles.paragraphSmall, globalStyles.colorWhite]}>{item.country}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    columnGap: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default SearchResult;
