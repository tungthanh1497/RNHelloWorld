import React, {Component} from 'react';
import {Image} from 'react-native';

export default class Robot extends Component {
  render() {
    return (
      <Image
        source={{
          uri:
            'https://s.meta.com.vn/img/thumb.ashx/Data/image/2020/01/09/robot-do-choi-robotek-kidbo-k100-g1.jpg',
        }}
        style={{width: 200, height: 200}}
      />
    );
  }
}
