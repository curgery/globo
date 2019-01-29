import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js';
import { Hero } from '../sections/Hero.js';
import { Menu } from '../sections/Menu.js';
import { bold } from 'ansi-colors';
import { StackNavigator } from 'react-navigation';


export class Home extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Header navigate = {navigate} message = 'Press to Login' />
                <Text style={styles.firmText}>RLG Developer Associates, LLC</Text>
                <Text style={styles.firmText}>Integrated Mobile Application Systems(IMAS)</Text>
                <Hero />
                <Menu navigate = {navigate} />
            </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 5,
},
    firmText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});