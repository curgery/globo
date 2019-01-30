import React from 'react';
import { StyleSheet, Image, ScrollView, Text } from 'react-native';

const aboutGlobo = `Our development vision is about the essential deployment of a market-driven and targeted mobile business campaign. Continuity of messge, brand stipulation, and world-wide exposure is our emphasis. We provide all strategies for a ubiquitous market coverage and brand expansio, moreover, certifiable returns on your firm's bottom line portfolio. Our development projects are 'full-life cycle' and implemented with industry tested, state of the art technologies.`
const whatGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`



export class About extends React.Component {
    static navigationOptions = {
        header: null
    };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.pics} source={require('../sections/img/rlgava.jpg')}/>

        <Text style={styles.aboutTitle}>Who We Are</Text>
        <Text style={styles.aboutText}>{aboutGlobo}</Text>

        <Image style={styles.pics} source={require('../sections/img/chip.jpg')}/>
        <Text style={styles.aboutTitle}>What We Do</Text>
        <Text style={styles.aboutText}>{whatGlobo}</Text>
        <Text onPress={() => this.props.navigation.goBack()} style={styles.backButton}>GO BACK</Text>

      </ScrollView>
    );
  }
}

const styles =  StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    pics: {
        height: 400,
        paddingLeft: 450
    },
    aboutTitle: {
        paddingTop: 10,
        textAlign: 'center'
    },
    aboutText: {
        paddingBottom: 20,
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    backButton: {
        paddingBottom: 50,
        textAlign: 'center'
    }
})
