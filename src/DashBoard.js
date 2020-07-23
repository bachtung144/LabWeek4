import React from 'react';
import FlatlistHeader from './FlatlistHeader';
import {StyleSheet, View} from 'react-native';

export default function DashBoard() {
  return (
    <View style={styles.container}>
      <FlatlistHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
