import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Alert
} from 'react-native';

import firebase from '../data/firebaseConnection';
import logo from '../resources/img/geafom-logo.png';

export default class Login extends Component {

    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: "#91AEC1"
        },
        headerTintColor: "#F0F3BD"
    }

    constructor(props) {
        super(props);
        this.state = {
            email: 'gui-negrini@hotmail.com',
            senha: '123456'
        }
        this.entrar = this.entrar.bind(this);
        this.resetSenha = this.resetSenha.bind(this);
    }

    entrar() {
        if (this.state.email != '' && this.state.senha != '') {
            //Se usa o listener a navegação ocorre antes de voltar a resposta de validação do Login
            //Corrigir ou deixar dentro da Promise do signIn abaixo mesmo
            /*firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                    if(user.emailVerified){
                        this.props.navigation.navigate('Dificuldade');
                    }else{
                        Alert.alert('Verificação', 'Verificação de e-mail pendente, confira sua caixa de e-mails.');
                    }
                }
            })*/
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
                .then(() => {
                    let user = firebase.auth().currentUser;
                    if (user) {
                        if (user.emailVerified) {
                            this.props.navigation.navigate('Dificuldade');
                        } else {
                            Alert.alert('Verificação', 'Verificação de e-mail pendente, confira sua caixa de e-mails.');
                        }
                    }
                })
                .catch((error) => {
                    alert(error.code);
                })
        } else {
            Alert.alert('Campos em branco', 'Por favor, preencha todos os campos.');
        }
    }

    resetSenha() {
        if (this.state.email != '') {
            firebase.auth().sendPasswordResetEmail(this.state.email)
                .then(() => {
                    Alert.alert('Nova senha', 'Um e-mail para redefinição de senha foi enviado para ' + this.state.email);
                })
                .catch((error) => {
                    alert(error.code);
                })
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.logoArea}>
                    <Image source={logo} style={styles.logoGeafom} />
                </View>

                <View style={styles.inputArea}>
                    <Text style={styles.txtInput}>E-mail</Text>
                    <TextInput value={this.state.email}
                        onChangeText={(email) => this.setState({ email: email })}
                        style={styles.input}
                        placeholder="E-mail"
                        autoCapitalize='none'
                    />
                    <Text style={styles.txtInput}>Senha</Text>
                    <TextInput value={this.state.senha}
                        onChangeText={(senha) => this.setState({ senha: senha })}
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        autoCapitalize='none'
                    />
                </View>

                <Text style={styles.txt} onPress={this.resetSenha}>Esqueceu sua senha?</Text>

                <View style={styles.btnArea}>
                    <TouchableOpacity onPress={this.entrar} style={styles.btn}>
                        <Text style={styles.txtBtn}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#508CA4",
        flex: 1
    },
    btn: {
        backgroundColor: "#91AEC1",
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 40,
        margin: 20,
        borderRadius: 10
    },
    txtBtn: {
        color: "#F0F3BD",
        fontSize: 18
    },
    btnArea: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25
    },
    logoGeafom: {
        margin: 20,
        marginTop: 50
    },
    logoArea: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputArea: {
        marginTop: 40,
        marginBottom: 5
    },
    input: {
        backgroundColor: "#E0DFD5",
        color: "#313638",
        padding: 5,
        height: 40,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 16
    },
    txtInput: {
        color: "#F0F3BD",
        fontSize: 20,
        marginBottom: 8,
        marginLeft: 20,
        marginRight: 20
    },
    txt: {
        fontSize: 16,
        color: "#F0F3BD",
        marginLeft: 20,
        alignItems: "center"
    }
});
