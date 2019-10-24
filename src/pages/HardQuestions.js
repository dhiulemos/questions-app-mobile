import React, { Component } from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Card } from 'react-native-elements';
import { Button, ButtonContainer } from '../components/ButtonAnswers';
import { Alert } from '../components/Alert';
import { NavigationActions } from 'react-navigation';


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#508CA4",
        flex: 1,
        alignItems: 'center',
        height: hp('100%'),
        width: wp('100%')
    },
    containerQuestions: {
        flex: 1,
        alignItems: 'center',
        height: hp('90%'),
        width: wp('90%')
    }
});

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
                setTimeout(() => this.nextQuestion(), 750);
            }
        );
    };

    nextQuestion = () => {

        this.setState(state => {
            const nextIndex = this.state.activeQuestionIndex + 1;

            if (nextIndex >= this.state.totalCount) {
                return this.props.navigation.navigate('EndGame', { correct: this.state.correctCount });
            }

            return {
                activeQuestionIndex: nextIndex,
                answered: false
            };
        });
    };


    render() {
        const questions = this.props.navigation.getParam("questions", []);
        const question = questions[this.state.activeQuestionIndex];

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.containerQuestions}>
                    <Card><Text>{question.question}</Text></Card>
                    <ButtonContainer>
                        {question.answers.map(answer => (
                            <Button
                                key={answer.id}
                                text={answer.text}
                                onPress={() => { this.answer(answer.correct) }}
                            />
                        ))}
                    </ButtonContainer>
                </View>
                <Text style={styles.text}>
                    {`${this.state.correctCount}/${this.state.totalCount}`}
                </Text>

                <Alert
                    correct={this.state.answerCorrect}
                    visible={this.state.answered}
                />
            </SafeAreaView>
        );
    }
}

export default HardQuestions;



