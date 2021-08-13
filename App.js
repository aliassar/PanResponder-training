/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Picker,
} from 'react-native';
import {MyTest} from './PanResponderModule'

export default class App extends Component {

    render() {
        return (
            <MyTest/>
        );
    }
}


