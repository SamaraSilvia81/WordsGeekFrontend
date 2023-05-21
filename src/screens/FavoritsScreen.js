import React from "react";

import { ActivityIndicator, View, StyleSheet, FlatList  } from "react-native";
import { Text } from 'react-native-paper';

import { useQuery } from "@tanstack/react-query";

import { CardHeroes } from "../components/CardHeroes";
import { getHeroes } from "../api/marvel";

function FavoritsScreen() {

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["WorldsGeeksApi"],
    queryFn: getHeroes,
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {isFetching && <Text>IS FETCHING</Text>}

      <View>
        <FlatList
          style={{ flex: 1 }}
          data={data}
          keyExtractor={(item) => item.objectId}
          renderItem={({ item }) => <CardHeroes hero={item} />}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    padding: 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fcfcfc',
  }
});


export default FavoritsScreen;