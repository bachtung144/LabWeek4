import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Data} from '../Data';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from './Constants';

function CardItem({item}) {
  let cardTitle;
  let cardNumber = item.total;
  let cardColor;
  switch (item.type) {
    case 1:
      cardTitle = 'Bank account';
      cardColor = '#E437BC';
      break;
    case 2:
      cardTitle = 'Credit card';
      cardColor = '#EFA75A';
      break;
    case 3:
      cardTitle = 'Cash';
      cardColor = '#23E3D6';
      break;
  }
  return (
    <View style={[styles.eachCard, {backgroundColor: cardColor}]}>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <Text style={styles.cardNumber}>${cardNumber.toFixed(2)}</Text>
    </View>
  );
}
export default function FlatlistHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.listText}>List of Account</Text>
      <View style={styles.cardContainer}>
        {Data.account_information.data.map((item) => (
          <CardItem key={item.type} item={item} />
        ))}
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalNumber}>
          ${Data.account_information.total.toFixed(2)}
        </Text>
        <Text style={styles.totalText}>Total Balance</Text>
      </View>
      <Text style={styles.recordsText}>Last Records Overview</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  listText: {fontSize: 20},
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  eachCard: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: (SCREEN_WIDTH - 40) / 3 - 5,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 15,
    color: 'white',
  },
  cardNumber: {
    fontSize: 20,
    color: 'white',
    marginTop: 8,
  },
  totalContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  totalNumber: {
    color: '#FF958F',
    fontSize: 40,
  },
  totalText: {
    color: '#A6B1C0',
    fontSize: 20,
  },
  recordsText: {
    fontSize: 20,
    marginTop: 30,
  },
});
