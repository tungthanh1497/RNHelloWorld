/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HelloWorld from './components/HelloWorld';
import Robot from './components/Robot';
import MultipleGreeting from './components/MultipleGreeting';

AppRegistry.registerComponent(appName, () => MultipleGreeting);
