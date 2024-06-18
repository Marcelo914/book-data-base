import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";


export default function redefinir() {
    return (
        <View style={styles.container}>
            <Text>Página de redefinir</Text>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#C2AB89",
        justifyContent: "center",
        alignItems: "center",

    },
});
