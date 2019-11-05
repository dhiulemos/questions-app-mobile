import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: wp('95%'),
        minHeight: hp('8%'),
        marginBottom: hp('3%'),
    },
    text: {
        color: "#fff",
        fontSize: 17,
        textAlign: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: 'flex-start',
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