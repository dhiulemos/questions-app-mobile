import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Dificuldade extends Component{

    static navigationOptions = {
        title: 'Dificuldade',
        headerStyle: {
            backgroundColor: "#91AEC1"
        },
        headerTintColor: "#F0F3BD"
    }

    constructor(props){
        super(props);
        this.state = {
            dificuldade: '',
        }

        this.selecionaDificuldade = this.selecionaDificuldade.bind(this);
    }

    selecionaDificuldade(value){
        this.setState({dificuldade:value});
    }
    render(){
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Escolha a dificuldade: </Text>

            <TouchableOpacity onPress={()=>this.selecionaDificuldade('facil')} style={styles.btn}>
                <Text style={styles.txtBtn}>FÁCIL</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>this.selecionaDificuldade('dificil')} style={styles.btn}>
                <Text style={styles.txtBtn}>DIFÍCIL</Text>
            </TouchableOpacity>

          </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#508CA4",
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#F0F3BD",
        marginTop: 40,
        marginBottom: 20
    },
    btn: {
        backgroundColor: "#91AEC1",
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 40,
        margin: 10,
        borderRadius: 10
    },
    txtBtn: {
        color: "#F0F3BD",
        fontSize: 18
    }
});
