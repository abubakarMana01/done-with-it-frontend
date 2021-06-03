import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem';

import Colors from '../config/Colors';

const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          source={require('../assets/jacket.jpg')}
        />
      </View>

      <View style={styles.productInfo}>
        <Text style={styles.productName}>Red jacket for sale</Text>
        <Text style={styles.productPrice}>${100}</Text>
        <View style={styles.userContainer}>
          <ListItem
            title="Abubakar Mana"
            subTitle="5 Listings"
            image={require('../assets/mana01.jpg')}
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  productImageContainer: {
    height: 300,
    width: '100%',
  },
  productImage: {
    height: '100%',
    width: '100%',
  },
  productInfo: {
    padding: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: Colors.black,
  },
  productPrice: {
    fontSize: 18,
    color: Colors.secondary,
    marginBottom: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
