import {View, Text, StyleSheet, Dimensions} from "react-native";

export function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ваш персональный помощник</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "green",
        width: "100%",
        maxWidth: Dimensions.get("screen").width,
    },
    text: {
        fontSize: 18,
        color: "white"
    }
})