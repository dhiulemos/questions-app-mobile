import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Header, Right, Left, Body, Icon, Button } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default class EndGame extends Component {

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
        let correct = this.props.navigation.getParam('correct');
        let level = this.props.navigation.getParam('level');
        return (
            <View style={styles.container}>
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

                <Text style={styles.result}>Número de acertos: {correct}</Text>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.dashButton}
                        onPress={() => this.props.navigation.navigate('Level')}>
                        <Text style={styles.dashButtonText}>
                            Iniciar novo quiz
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.dashButton}
                        onPress={() => this.props.navigation.navigate('Dashboard')}>
                        <Text style={styles.dashButtonText}>
                            Tela Inicial
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#508CA4",
        flex: 1,
        alignItems: 'center',
        height: hp('100%'),
        width: wp('100%')
    },
    containerButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('100%'),
    },
    dashButton: {
        backgroundColor: '#fefefe',
        height: hp('10%'),
        width: wp('80%'),
        marginBottom: 60,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'

    },
    dashButtonText: {
        fontSize: 24,
        color: '#f7a219'
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
    header: {
        backgroundColor: "#508CA4",
        width: wp('100%'),
        height: hp('7%'),

    },
    face: {
        fontSize: 20,
        color: '#fff'
    },
    sair: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    result: {
        marginTop: 30,
        fontSize: 24,
        color: '#fff',
        textAlign: 'center'
    }
});
