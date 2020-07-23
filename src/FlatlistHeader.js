import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Data} from '../Data';
export default function FlatlistHeader() {
  return (
    <View>
      <Text>List of Account</Text>
      <View>
        {Data.account_information.data.map((item) => (
          <View key={item.type}>
            <Text></Text>
            <Text></Text>
          </View>
        ))}
      </View>
      <View>
        <Text>{Data.account_information.total}</Text>
        <Text>Total Balance</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
