import React, { Component } from 'react';
import { ScrollView, View, SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Header, Right, Left, Body, Icon, Button, Footer } from 'native-base';
import { ButtonAnswer, ButtonContainer } from '../components/ButtonAnswers';
import { Correct } from '../components/Correct';

class HardQuestions extends Component {
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

            if (nextIndex >= 10) {
                return this.props.navigation.navigate('EndGame', { correct: this.state.correctCount, level: 'HardQuestions' });
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
                <ScrollView >
                    <View style={styles.containerQuestions}>
                        <View style={styles.containerLabel}>
                            <Button style={styles.btnlabel}>
                                <Text style={styles.txtLabel}>{question.question}</Text>
                            </Button>
                            {img ? img : null}
                        </View>
                        <View style={styles.containerBtn}>
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
                    </View>
                </ScrollView>
                <Footer style={styles.footer} >
                    <Text style={styles.textFooter}>Nível: Avançado</Text>
                    <Text style={styles.textFooter}>Acertos: {`${this.state.correctCount}`}</Text>
                    <Text style={styles.textFooter}> Total: 10</Text>
                </Footer>
                <Correct
                    correct={this.state.answerCorrect}
                    visible={this.state.answered}
                />
            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#508CA4",
        alignItems: 'center'
    },
    containerLabel: {
        flex: 0.4,
        paddingTop: hp('4%'),
        width: wp('100%'),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerQuestions: {
        flex: 1,
        minHeight: hp('94%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerBtn: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    txtLabel: {
        fontSize: 16,
        color: '#f7a219',
        textAlign: 'center'
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
    footer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: "#508CA4",
        height: hp('5%'),
        paddingHorizontal: 20
    },
    textFooter: {
        color: '#fff',
        fontSize: 15
    },
    img: {
        height: wp('50%'),
        width: wp('90%'),
        resizeMode: 'contain',
        marginTop: hp('6%')
    },
    btnlabel: {
        minHeight: hp('15%'),
        width: wp('95%'),
        height: 'auto',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#fefefe',
        padding: 15,
    },
    face: {
        fontSize: 20,
        color: '#fff'
    }
});

export default HardQuestions;



