/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import VerticalScrollView from './components/VerticalScrollView';

AppRegistry.registerComponent(appName, () => VerticalScrollView);
