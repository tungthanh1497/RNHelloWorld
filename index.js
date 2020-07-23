/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import BasicFlatList from './components/BasicFlatList';

AppRegistry.registerComponent(appName, () => BasicFlatList);
