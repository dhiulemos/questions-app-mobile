import React from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, TextInput,
    Image, Alert, KeyboardAvoidingView
} from 'react-native';

import firebase from '../data/firebaseConnection';
import logo from '../resources/img/geafom-logo.png';

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'gui-negrini@hotmail.com',
            senha: '123456',
            errorUser: false,
            errorPass: false
        }
        this.entrar = this.entrar.bind(this);
        this.resetSenha = this.resetSenha.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleError(e){
        switch(e.code) {
            case 'auth/user-not-found':
                this.setState({errorUser:true});
                Alert.alert('Endereço de e-mail não encontrado', 'Confira o endereço de e-mail digitado.');
                break;
            case 'auth/wrong-password':
                this.setState({errorPass:true});
                Alert.alert('Senha incorreta', 'Confira a senha digitada.');
                break;
            case 'auth/invalid-email':
                this.setState({errorUser:true});
                Alert.alert('Endereço de e-mail inválido', 'Por favor, insira um endereço de e-mail válido.');
                break;
            case 'auth/too-many-requests':
                Alert.alert('Tentativas de login excedidas', 'Confira atentamente seu endereço de e-mail e sua senha antes de tentar novamente.');
                break;
            default:
                alert(e.code);
        }
    }

    async entrar() {
        this.setState({errorName:false});
        this.setState({errorUser:false});
        this.setState({errorPass:false});

        if (this.state.email != '' && this.state.senha != '') {
            await firebase.auth().signOut();
            let user = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
            .catch(error => this.handleError(error));

            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    if (user.emailVerified) {
                        this.props.navigation.navigate('Dashboard');
                    } else {
                        Alert.alert('Verificação', 'Verificação de e-mail pendente, confira sua caixa de e-mails.');
                    }
                }
            })
        } else {
            this.setState({errorUser:this.state.email===''});
            this.setState({errorPass:this.state.senha===''});
            Alert.alert('Campos em branco', 'Por favor, preencha todos os campos.');
        }
    }

    resetSenha() {
        if (this.state.email != '') {
            firebase.auth().sendPasswordResetEmail(this.state.email)
                .then(() => {
                    Alert.alert('Nova senha', 'Um e-mail para redefinição de senha foi enviado para ' + this.state.email);
                })
                .catch(error => this.handleError(error));
        }else{
            Alert.alert('Nova senha', 'Por favor, digite o e-mail cadastrado para recuperar sua senha.')
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

                    <TextInput value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                        style={this.state.errorUser ? styles.error:styles.input}
                        placeholder="E-mail"
                        autoCapitalize='none'
                        placeholderTextColor='lightgray'
                    />

                    <TextInput value={this.state.senha}
                        onChangeText={(senha) => this.setState({ senha })}
                        style={this.state.errorPass ? styles.error:styles.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        autoCapitalize='none'
                        placeholderTextColor='lightgray'
                    />

                    <TouchableOpacity onPress={this.entrar} style={styles.btn}>
                        <Text style={styles.btnText}>LOGIN</Text>
                    </TouchableOpacity>

                    <Text style={styles.text} onPress={this.resetSenha}>Esqueceu sua senha?</Text>
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
    },
    error: {
        borderWidth: 2,
        borderColor: '#a49251',
        paddingHorizontal: 20,
        borderRadius: 6,
        fontSize: 16,
        color: 'lightgray',
        height: 44,
        marginBottom: 20,
        backgroundColor: '#dcdcdc59',

    }
});

export default (SignIn);
