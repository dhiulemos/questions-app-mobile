import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView, BackHandler, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Header, Right, Left, Body, Icon, Button } from 'native-base';
import hardQuestions from '../data/hardQuestions';
import easyQuestions from '../data/easyQuestions';

export default class Level extends Component {

    onBack = () => {
        BackHandler.addEventListener('hardwareBackPress', () => { return false });
    }

    shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    shufflequestions = (questions) => {
        questions.map((answers) => (
            this.shuffle(answers.answers)
        ));

        this.shuffle(questions);
        console.log(questions)

        return questions;
    }

    render() {
        return (
            <SafeAreaView style={styles.container} onBack={this.onBack()}>
                <Header style={styles.header}>
                    <Left style={styles.left}>
                        <Button transparent onPress={() => { this.props.navigation.goBack() }}>
                            <Icon type='FontAwesome' name='angle-left' style={styles.icon} />
                        </Button>
                    </Left>
                    <Body style={styles.body}>
                        <Text style={styles.face}>FACE</Text>
                    </Body>
                    <Right style={styles.right} />
                </Header>

                <View style={styles.viewLabel}>
                    <Text style={styles.txtLabel}>Selecione o nível desejado para iniciar o quiz</Text>
                </View>

                <View style={styles.viewBtn}>
                    <TouchableOpacity style={styles.btnLevel} onPress={() =>
                        this.props.navigation.navigate("EasyQuestions", {
                            title: "Iniciante",
                            questions: this.shufflequestions(easyQuestions),
                        })
                    }>
                        < Text style={styles.textBtnLevel} >
                            INICIANTE
                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnLevel} onPress={() =>
                        this.props.navigation.navigate("HardQuestions", {
                            title: "Avançado",
                            questions: this.shufflequestions(hardQuestions),
                        })
                    }>
                        < Text style={styles.textBtnLevel} >
                            AVANÇADO
                    </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#508CA4'
    },
    btnLevel: {
        backgroundColor: '#fefefe',
        height: hp('8%'),
        marginTop: wp('10%'),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtnLevel: {
        fontSize: 20,
        color: '#f7a219'
    },
    viewBtn: {
        flex: 1,
        width: wp('80%'),
        justifyContent: 'flex-start',
        marginTop: hp('10%')
    },
    viewLabel: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 20,
        width: wp('80%'),
        maxHeight: hp('20%'),
        padding: hp('5%'),
        marginTop: hp('10%'),
        alignItems: 'center',
        alignContent: 'center',
    },
    txtLabel: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center'
    },
    header: {
        backgroundColor: "#508CA4",
        width: '100%',
        height: Dimensions.get('window').height / 14,

    },
    sair: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    icon: {
        color: '#fff',
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