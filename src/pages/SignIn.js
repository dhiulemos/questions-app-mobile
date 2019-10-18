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

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'gui-negrini@hotmail.com',
            senha: '123456'
        }
        this.entrar = this.entrar.bind(this);
        this.resetSenha = this.resetSenha.bind(this);
    }

    async entrar() {
        if (this.state.email != '' && this.state.senha != '') {

            let user = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha);

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

            <KeyboardAvoidingView style={styles.container} behavior="padding">

                <View style={styles.logoArea}>
                    <Image source={logo} style={styles.logoGeafom} />

                    <Text style={styles.label}>FACE</Text>

                </View>

                <View style={styles.form}>

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
        color: "#555",
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

export default (SignIn);