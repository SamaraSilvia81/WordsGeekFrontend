import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export const CardHeroes = ({ hero }) => {

  const backgroundUrl = hero.image.url();
  console.log("hero", hero);

  return (
    <View style={styles.item}>
      <View style={styles.body}>
        <Text style={styles.titleItem}>{hero.name}</Text>
      </View>
      <TouchableOpacity>
        <Image 
          source={{ uri: backgroundUrl }} 
          style={styles.img} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 3,
    padding: 3,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    width: 200,
    padding: 15,
    borderRadius: 5,
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  titleItem: {
    fontSize: 20,
    marginBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: "blue"
  },
  img: {
    width: 100,
    height: 50,
  },
});