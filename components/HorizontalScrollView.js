import React, {Component} from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import Button from 'react-native-button';

export default class HorizontalScrollView extends Component {
  render() {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        onMomentumScrollBegin={() => {
          // alert('get data here');
          console.log('begin');
        }}
        onMomentumScrollEnd={() => {
          // alert('end');
          console.log('end');
        }}
        scrollEventThrottle={16}
        onScroll={(event) => {
          let logData = `Scroll to x = ${event.nativeEvent.contentOffset.x}`;
          console.log(logData);
        }}
        style={{marginTop: 50}}
        keyboardDismissMode="on-drag"
        maximumZoomScale={3}
        minimumZoomScale={0.2}>
        <View style={{width: screenWidth, flex: 1, backgroundColor: 'yellow'}}>
          <Text>alo</Text>
        </View>
        <View style={{width: screenWidth, flex: 1, backgroundColor: 'tomato'}}>
          <Text>alo</Text>
        </View>
        <View style={{width: screenWidth, flex: 1, backgroundColor: '#5f9ae0'}}>
          <Text>alo</Text>
        </View>
      </ScrollView>
    );
  }
}
