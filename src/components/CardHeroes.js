import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {
  Title
} from 'react-native-paper';

export const CardHeroes = ({ hero, onPress }) => {

  console.log("hero", hero);

  return (
    <TouchableOpacity onPress={() => onPress(hero)}>
    <View style={styles.item}>
      <View style={styles.card}>
        <Title style={styles.titleItem}>{hero.name}</Title>
        <Image source={{ uri: hero.image }} style={styles.img} />
      </View>
    </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 3,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card:{
    width: "100%",
  },
  titleItem: {
    fontSize: 20,
    marginBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  img: {
    width: "100%",
    height: 200,
  },
});