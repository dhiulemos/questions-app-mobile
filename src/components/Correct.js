import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    circle: {
        backgroundColor: "#ff4136",
        width: hp('10%'),
        height: hp('10%'),
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    circleCorrect: {
        backgroundColor: "#28A125"
    },
    icon: {
        width: hp('10%')
    }
});

export const Correct = ({ correct, visible }) => {
    if (!visible) return null;

    const icon = correct
        ? require("../resources/img/check-mark.png")
        : require("../resources/img/wrong-mark.png");

    const circleStyles = [styles.circle];

    if (correct) {
        circleStyles.push(styles.circleCorrect);
    }
    return (
        <View style={styles.container}>
            <View style={circleStyles}>
                <Image source={icon} style={styles.icon} resizeMode="contain" />
            </View>
        </View>
    );
};