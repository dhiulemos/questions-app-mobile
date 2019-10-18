import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Header } from 'react-native-elements';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

export default class Dashboard extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text: 'FACE', style: { color: '#f7a219', fontSize: 25 } }}
                    containerStyle={{
                        backgroundColor: '#508CA4',
                        height: heightPercentageToDP('8%')
                    }}
                />
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.dashButtonFirst}>
                        <Text style={styles.dashButtonTextFirst}>QUIZ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.dashButtonSecond}>
                        <Text style={styles.dashButtonTextSecond} onPress={() => this.props.navigation.navigate('Gallery')}>GALERIA</Text>
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
        height: heightPercentageToDP('100%'),
        width: widthPercentageToDP('100%')
    },
    containerButton: {
        flex: 1,
        marginTop: heightPercentageToDP('13%'),
        marginBottom: heightPercentageToDP('13%'),
        width: widthPercentageToDP('77%'),
    },
    dashButtonFirst: {
        flex: 2,
        backgroundColor: '#f49f1a',
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 35

    },
    dashButtonSecond: {
        flex: 2,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 35

    },
    dashButtonTextFirst: {
        color: 'lightgray',
        fontSize: 40
    },
    dashButtonTextSecond: {
        color: '#f49f1a',
        fontSize: 40
    }
});
