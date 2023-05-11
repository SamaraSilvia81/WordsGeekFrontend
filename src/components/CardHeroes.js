import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {
  Card,
  Title,
  Paragraph,
  List,
  Provider as PaperProvider,
} from 'react-native-paper';

export const CardHeroes = ({ hero }) => {

  console.log("hero", hero);

  return (
    <View style={styles.item}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.titleItem} >{hero.name}</Title>
          <Image 
            source={{uri: hero.image}}
            style={styles.img} 
          />
        </Card.Content>
      </Card>
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