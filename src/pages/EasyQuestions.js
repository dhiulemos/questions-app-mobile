import React, { Component } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen'
import { Header, Right, Left, Body, Icon, Button, Footer } from 'native-base';
import { ButtonAnswer, ButtonContainer } from '../components/ButtonAnswers';
import { Alert } from '../components/Alert';


class EasyQuestions extends Component {
    state = {
        correctCount: 0,
        totalCount: this.props.navigation.getParam("questions", []).length,
        activeQuestionIndex: 0,
        answered: false,
        answerCorrect: false,
        nextIndex: 0
    };

    answer = correct => {
        this.setState(
            state => {
                const nextState = { answered: true };
                if (correct) {
                    nextState.correctCount = state.correctCount + 1;
                    nextState.answerCorrect = true;
                } else {
                    nextState.answerCorrect = false;
                }

                return nextState;
            },
            () => {
                setTimeout(() => this.nextQuestion(), 1050);
            }
        );
    };

    nextQuestion = () => {
        this.setState(state => {
            const nextIndex = this.state.activeQuestionIndex + 1;

            if (nextIndex >= this.state.totalCount) {
                return this.props.navigation.navigate('EndGame', { correct: this.state.correctCount, level: 'EasyQuestions' });
            }

            return {
                activeQuestionIndex: nextIndex,
                answered: false
            };
        });
    };


    render() {
        let img = '';
        const questions = this.props.navigation.getParam("questions", []);
        const question = questions[this.state.activeQuestionIndex];
        if (question.img) {
            img = <Image style={styles.img} source={question.img} />
        }

        return (
            <SafeAreaView style={styles.container}>
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
                <View style={styles.containerLabel}>
                    <Button style={styles.btnlabel}>
                        <Text style={styles.txtLabel}>{question.question}</Text>
                    </Button>
                    {img ? img : null}
                </View>
                <View style={styles.containerQuestions}>
                    <ButtonContainer>
                        {question.answers.map(answer => (
                            <ButtonAnswer
                                key={answer.id}
                                text={answer.text}
                                onPress={() => { this.answer(answer.correct) }}
                            />
                        ))}
                    </ButtonContainer>
                </View>
                <Footer style={styles.footer} >
                    <Text style={styles.textFooter}>
                        {`${this.state.correctCount}/${this.state.totalCount}`}
                    </Text>
                </Footer>
                <Alert
                    correct={this.state.answerCorrect}
                    visible={this.state.answered}
                />
            </SafeAreaView>
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
    containerLabel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxHeight: Dimensions.get('window').height / 2,
    },
    txtLabel: {
        fontSize: Dimensions.get('window').width / 20,
        color: '#f7a219',
        textAlign: 'center'
    },
    containerQuestions: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: Dimensions.get('window').height / 2,
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
        width: '100%',
        height: Dimensions.get('window').height / 14,

    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: "#508CA4",
        height: hp('4%')
    },
    textFooter: {
        color: '#fff',
        fontSize: 15
    },
    img: {
        height: wp('50%'),
        width: wp('90%'),
        resizeMode: 'contain',
        marginTop: 10
    },
    btnlabel: {
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height / 6,
        borderRadius: 20,
        backgroundColor: '#fefefe',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    face: {
        fontSize: 20,
        color: '#fff'
    }
});

export default EasyQuestions;



