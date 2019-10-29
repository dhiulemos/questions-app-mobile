import React, { Component } from 'react';
import { BackHandler, Alert, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Header, Right, Left, Body, Button } from 'native-base';
import firebase from '../data/firebaseConnection';

export default class Dashboard extends Component {

    onBack = () => {
        BackHandler.addEventListener('hardwareBackPress', () => { return true });
    }

    signOut = () => {
        Alert.alert(
            'Sair',
            'Quer sair do aplicativo?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => { },
                    style: 'cancel',
                },
                { text: 'Sim', onPress: () => { firebase.auth().signOut(); return this.props.navigation.navigate('Home') } },
            ],
            { cancelable: false },
        );
    }

    render() {
        return (
            <View style={styles.container} onBack={this.onBack()}>
                <Header style={styles.header}>
                    <Left style={styles.left} />
                    <Body style={styles.body}>
                        <Text style={styles.face}>FACE</Text>
                    </Body>
                    <Right style={styles.right}>
                        <Button transparent onPress={() => this.signOut()}>
                            <Text style={styles.sair}>Sair</Text>
                        </Button>
                    </Right>
                </Header>
                <View style={styles.containerButtonFirst}>
                    <TouchableOpacity style={styles.dashButtonFirst}
                        onPress={() => this.props.navigation.navigate('Level')}>
                        <Text style={styles.dashButtonTextFirst}>
                            QUIZ
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerButtonSecond}>
                    <TouchableOpacity style={styles.dashButtonSecond}
                        onPress={() => this.props.navigation.navigate('Gallery')}>
                        <Text style={styles.dashButtonTextSecond}>
                            GALERIA
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#508CA4",
    },
    header: {
        backgroundColor: "#508CA4",
        width: '100%',
        height: Dimensions.get('window').height / 14,

    },
    containerButtonFirst: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerButtonSecond: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    dashButtonFirst: {
        backgroundColor: '#f49f1a',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        height: wp('60%'),
        width: wp('80%'),
        marginTop: wp('5%'),

    },
    dashButtonSecond: {
        backgroundColor: '#fafafa',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        height: wp('60%'),
        width: wp('80%'),
        marginTop: wp('7%'),
    },
    dashButtonTextFirst: {
        color: '#fafafa',
        fontSize: 40
    },
    dashButtonTextSecond: {
        color: '#f49f1a',
        fontSize: 40
    },
    sair: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    left: {
        flex: 1
    },
    right: {
        flex: 1
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    face: {
        fontSize: 20,
        color: '#fff'
    }
});


