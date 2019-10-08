import React from 'react';
import {
    Text,
    View,
    Button,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Alert,
    KeyboardAvoidingView
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';

import firebase from '../data/firebaseConnection';
import logo from '../resources/img/geafom-logo.png';

class Cadastrar extends React.Component {

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
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <Image source={logo} style={styles.logoGeafom} />

                <Text style={styles.label}>FACE</Text>

                <View style={styles.form}>
                    <TextInput value={this.state.nome}
                        onChangeText={(nome) => this.setState({ nome })}
                        style={styles.input}
                        placeholder="Nome completo"
                        placeholderTextColor="#555"
                    />

                    <TextInput value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                        style={styles.input}
                        placeholder="E-mail"
                        autoCapitalize='none'
                        placeholderTextColor="#555"
                    />

                    <TextInput value={this.state.senha}
                        onChangeText={(senha) => this.setState({ senha })}
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        autoCapitalize='none'
                        placeholderTextColor="#555"
                    />

                    <TouchableOpacity onPress={this.cadastrar} style={styles.btn}>
                        <Text style={styles.txtBtn}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        );

    }
}

class Login extends React.Component {

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
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                    <Image source={logo} style={styles.logoGeafom} />

                <Text style={styles.label}>FACE</Text>

                <View style={styles.form}>

                    <TextInput value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                        style={styles.input}
                        placeholder="E-mail"
                        autoCapitalize='none'
                        placeholderTextColor="#555"
                    />

                    <TextInput value={this.state.senha}
                        onChangeText={(senha) => this.setState({ senha })}
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        autoCapitalize='none'
                        placeholderTextColor="#555"
                    />

                    <TouchableOpacity onPress={this.entrar} style={styles.btn}>
                        <Text style={styles.txtBtn}>ENTRAR</Text>
                    </TouchableOpacity>

                    <Text style={styles.txt} onPress={this.resetSenha}>Esqueceu sua senha?</Text>
                </View>


            </KeyboardAvoidingView>
        );
    }
}

const TabNavigator = createMaterialTopTabNavigator({
    Cadastrar: Cadastrar,
    Login: Login,
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C3C3C5'
    },
    btn: {
        height: 52,
        backgroundColor: '#f49f1a',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    txtBtn: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555'
    },
    txt: {
        marginTop: 10,
        fontSize: 12,
        color: '#555',
        alignSelf: 'center'
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
        color: '#555',
        height: 44,
        marginBottom: 20,
        backgroundColor: '#dcdcdc59'
    },
    txtInput: {
        color: "#F0F3BD",
        fontSize: 20,
        marginBottom: 8,
        marginLeft: 20,
        marginRight: 20
    },
    label: {
        fontSize: 30,
        color: "#555",
        marginBottom: 25,
        alignSelf: 'center'

    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    }
});
export default createAppContainer(TabNavigator);