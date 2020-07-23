import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
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
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            //   backgroundColor: this.props.index % 2 == 0 ? 'cyan' : 'yellow',
            backgroundColor: 'mediumseagreen',
          }}>
          <Image
            source={{uri: this.props.item.imageUrl}}
            style={{width: 50, height: 50}}></Image>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
            <Text style={styles.flatListItem}>
              {this.props.item.description}
            </Text>
          </View>
        </View>
        <View style={{height: 1, backgroundColor: 'white'}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatListItem: {
    color: 'white',
    padding: 10,
    fontSize: 16,
  },
});
