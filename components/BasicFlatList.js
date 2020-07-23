import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, FlatList} from 'react-native';
import flatListData from '../data/FlatListData';

export default class BasicFlatList extends Component {
  render() {
    return (
      <View style={{marginTop: 50, flex: 1}}>
        <FlatList
          style={{backgroundColor: 'yellow'}}
          data={flatListData}
          renderItem={({item, index}) => {
            console.log('alo');
            console.log(`Item: ${JSON.stringify(item)} - ${index}`);
            return <ItemFlatList item={item} index={index}></ItemFlatList>;
          }}></FlatList>
        <Text>aaaaaalooooooo</Text>
      </View>
    );
  }
}

class ItemFlatList extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.props.index % 2 == 0 ? 'cyan' : 'yellow',
        }}>
        <Text style={styles.flatListItem}>{this.props.item.name}</Text>
        <Text style={styles.flatListItem}>{this.props.item.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatListItem: {
    color: 'tomato',
    padding: 10,
    fontSize: 16,
  },
});
