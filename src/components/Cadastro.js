import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Alert
} from 'react-native';

import firebase from '../data/firebaseConnection';
import logo from '../resources/img/geafom-logo.png';

export default class Cadastro extends Component {

    static navigationOptions = {
        title: 'Cadastro',
        headerStyle: {
            backgroundColor: "#91AEC1"
        },
        headerTintColor: "#F0F3BD"
    }

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
            <ScrollView style={styles.container}>

                <View style={styles.logoArea}>
                    <Image source={logo} style={styles.logoGeafom} />
                </View>

                <View style={styles.inputArea}>
                    <Text style={styles.txtInput}>Nome completo</Text>
                    <TextInput value={this.state.nome}
                        onChangeText={(nome) => this.setState({ nome: nome })}
                        style={styles.input}
                        placeholder="Nome completo"
                    />
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

                <View style={styles.btnArea}>
                    <TouchableOpacity onPress={this.cadastrar} style={styles.btn}>
                        <Text style={styles.txtBtn}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
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
        justifyContent: "center"
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
        marginTop: 20,
        marginBottom: 15
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
    }
});
