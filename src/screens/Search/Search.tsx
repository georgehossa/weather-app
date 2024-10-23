import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import { getPlaces } from '~api/weather';
import { SearchResult } from '~components';
import useDebounce from '~hooks/useDebounce';
import { globalStyles } from '~styles/global';
import { COLORS } from '~theme';

const Search = () => {
  const [search, setSearch] = useState('');
  const debouncedSearchTerm = useDebounce(search, 500);
  const { data, isLoading } = useQuery({
    queryKey: ['getPlaces', debouncedSearchTerm],
    queryFn: () => getPlaces(debouncedSearchTerm),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
          style={[globalStyles.paragraph, styles.input]}
        />
      </View>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator />
        </View>
      ) : null}
      <FlatList
        data={data}
        renderItem={({ item }) => <SearchResult item={item} />}
        keyExtractor={(item) => item.id}
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue.accent,
    alignItems: 'flex-start',
    padding: 16,
  },
  loaderContainer: {
    width: '100%',
    padding: 16,
  },
  inputContainer: {
    width: '100%',
    padding: 16,
  },
  listContainer: {
    width: '100%',
    padding: 16,
  },
  listContent: {
    gap: 16,
  },
  input: {
    width: Dimensions.get('window').width - 32,
    borderWidth: 1,
    padding: 16,
    borderRadius: 6,
    backgroundColor: COLORS.white,
  },
});

export default Search;
