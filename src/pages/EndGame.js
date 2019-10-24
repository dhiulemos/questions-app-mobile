import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Header } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default class EndGame extends Component {
    render() {
        let correct = this.props.navigation.getParam('correct');
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'FACE', style: { color: '#f7a219', fontSize: 25 } }}
                    containerStyle={{
                        backgroundColor: '#508CA4',
                        height: hp('8%')
                    }}
                />
                <View><Text>Você acertou {correct} questões!</Text></View>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.dashButton}
                        onPress={() => this.props.navigation.navigate('Gallery')}>
                        <Text style={styles.dashButtonText}>
                            Tentar Novamente
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dashButton}
                        onPress={() => this.props.navigation.navigate('Gallery')}>
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
        marginTop: hp('13%'),
        marginBottom: hp('13%'),
        width: wp('77%'),
    },
    dashButton: {
        backgroundColor: 'lightgrey',
        height: hp('7%'),
        width: wp('60%'),
        margin: wp('5%'),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    dashButtonText: {
        fontSize: 20,
        color: '#f7a219'
    }
});
