import React, {useState} from 'react';
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native';

import Card from '../components/Card';

const HomeScreen = () => {
  const [listings, setListings] = useState([
    {
      title: 'Red jacket for sale',
      price: 100,
      image: require('../assets/jacket.jpg'),
      id: 1,
    },
    {
      title: 'Couch in great condition',
      price: 1000,
      image: require('../assets/couch.jpg'),
      id: 2,
    },
    {
      title: 'Red jacket for sale',
      price: 100,
      image: require('../assets/jacket.jpg'),
      id: 3,
    },
    {
      title: 'Couch in great condition',
      price: 1000,
      image: require('../assets/couch.jpg'),
      id: 4,
    },
    {
      title: 'Red jacket for sale',
      price: 100,
      image: require('../assets/jacket.jpg'),
      id: 5,
    },
    {
      title: 'Couch in great condition',
      price: 1000,
      image: require('../assets/couch.jpg'),
      id: 6,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={product => product.id.toString()}
        renderItem={({item}) => (
          <Card title={item.title} subTitle={item.price} image={item.image} />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    // paddingTop: 20,
  },
});
