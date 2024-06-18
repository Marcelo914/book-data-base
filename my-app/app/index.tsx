import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';


export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.loginBox}>
                <View style={styles.topBox}>
                    <Text style={styles.login}> Login</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={() => alert('Login pressed')}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <Link href={"redefinir"} style={styles.senha}>esqueceu sua senha?</Link>
                <Link href={"/addBook/addBook"}>adicionar livro</Link>
            </View>
        </View>



    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#C2AB89",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginBox: {

        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        width: '40%',
        padding: 20,
        backgroundColor: "#AA9679",
        borderRadius: 10,
        shadowColor: 'rgba(103, 42, 21, 0.99)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1.0,
        shadowRadius: 10,
        elevation: 5,
    },
    login: {
        color: '#261207',
        alignSelf: 'center',
        fontFamily: "Inknut-Antiqua",
        fontSize: 25,

    },

    input: {
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.44)',
        height: 40,
        width: 400,
        borderColor: 'rgba(103, 42, 21, 0.25)',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',

    },
    button: {
        width: '20%',
        alignSelf: 'center',
        backgroundColor: 'rgba(103, 42, 21, 0.28)',
        paddingVertical: 10,
        borderRadius: 20,

    },
    buttonText: {


        color: 'rgba(0, 0, 0, 1)',
        fontFamily: "Inknut-Antiqua",
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,

    },
    topBox: {
        shadowColor: 'rgba(87, 42, 21, 1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.0,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
        marginBottom: 20,
        backgroundColor: 'rgba(103, 42, 21, 0.4)',
        width: '100%', // Define a largura da div como 100% da largura do loginBox
        height: '100%',

        flex: 1,



    },
    senha: {
        alignSelf: 'center',
        marginTop: 20,
        fontFamily: "Inknut-Antiqua",

    }


});
