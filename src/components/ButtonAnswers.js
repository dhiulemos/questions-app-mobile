import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import normalize from "react-native-normalize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: Dimensions.get('window').width - 20,
        minHeight: hp('8%'),
        marginTop: hp('3%'),

    },
    text: {
        color: "#fff",
        fontSize: Dimensions.get('window').width / 20,
        textAlign: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: 'center'
    }
});

export const ButtonAnswer = ({ text, onPress = () => { } }) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
);

export const ButtonContainer = ({ children }) => (
    <View style={styles.buttonContainer}>{children}</View>
);