import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Alert,
    KeyboardAvoidingView
} from 'react-native';

import firebase from '../data/firebaseConnection';
import logo from '../resources/img/geafom-logo.png';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: ''
        }

        firebase.auth().signOut();
        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar() {
        if (this.state.nome != '' && this.state.email != '' && this.state.senha != '') {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    firebase.database().ref('usuarios').child(user.uid).set({
                        nome: this.state.nome,
                        conta: 'aluno'
                    })
                }
            })
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
                .then(() => {
                    firebase.auth().currentUser.sendEmailVerification()
                        .then(() => {
                            Alert.alert('Verificação', 'E-mail de verificação enviado para ' + this.state.email);
                            this.props.navigation.navigate('Login');

                        })
                })
                .catch((error => {
                    alert(error.code);
                }))
        } else {
            Alert.alert('Campos em branco', 'Por favor, preencha todos os campos.');
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.logoArea}>
                    <Image source={logo} style={styles.logoGeafom} />

                    <Text style={styles.label}>FACE</Text>
                </View>


                <View style={styles.form}>
                    <TextInput value={this.state.nome}
                        onChangeText={(nome) => this.setState({ nome })}
                        style={styles.input}
                        placeholder="Nome completo"
                        placeholderTextColor='lightgray'
                    />

                    <TextInput value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                        style={styles.input}
                        placeholder="E-mail"
                        autoCapitalize='none'
                        placeholderTextColor='lightgray'
                    />

                    <TextInput value={this.state.senha}
                        onChangeText={(senha) => this.setState({ senha })}
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        autoCapitalize='none'
                        placeholderTextColor='lightgray'
                    />

                    <TouchableOpacity onPress={this.cadastrar} style={styles.btn}>
                        <Text style={styles.btnText}>CADASTRAR-SE</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#508CA4'
    },
    btn: {
        height: 52,
        backgroundColor: '#f7a219',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    btnText: {
        fontSize: 16,
        color: 'lightgray'
    },
    logoGeafom: {
        margin: 20,
        marginTop: 50
    },
    logoArea: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#dcdcdc59',
        paddingHorizontal: 20,
        borderRadius: 6,
        fontSize: 16,
        color: 'lightgray',
        height: 44,
        marginBottom: 20,
        backgroundColor: '#dcdcdc59'
    },
    label: {
        fontSize: 30,
        color: "#fff",
        marginBottom: 25,
        alignSelf: 'center'

    }, text: {
        fontSize: 13,
        color: 'lightgray',
        alignSelf: 'center',
        marginTop: 8
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    }
});

export default (SignUp);
