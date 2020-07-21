/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import TouchGestureAndButton from './components/TouchGestureAndButton';

AppRegistry.registerComponent(appName, () => TouchGestureAndButton);
