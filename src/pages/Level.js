import React, { Component } from 'react';
import {
    View, StyleSheet, TouchableOpacity, Text,
    SafeAreaView, Picker
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import hardQuestions from '../data/hardQuestions';

export default class Level extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.btnLevel} onPress={() =>
                    this.props.navigation.navigate("HardQuestions", {
                        title: "Avançado",
                        questions: hardQuestions,
                        color: "#49475B"
                    })
                }>
                    < Text style={styles.textBtnLevel} >
                        AVANÇADO
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#508CA4',
        alignItems: 'center'
    },
    btnLevel: {
        backgroundColor: 'lightgrey',
        height: hp('7%'),
        width: wp('60%'),
        margin: wp('5%'),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtnLevel: {
        fontSize: 20,
        color: '#f7a219'
    },
    btnTxtArea: {
        borderRadius: 10,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('25%'),
        width: wp('80%'),
        margin: wp('5%')
    }
});