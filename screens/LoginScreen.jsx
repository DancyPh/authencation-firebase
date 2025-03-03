import { ActivityIndicator, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';  
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; 
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();
    useEffect(() => {
        const unsubrise = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace("Home")
            }
        })

        return unsubrise;
    }, [])

    const handleSignUp = async () => {
        setLoading(true);
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
            Alert.alert('Thành công', 'Đăng ký thành công!'); // Success alert
        } catch (error) {
            Alert.alert('Lỗi', `Đăng ký thất bại: ${error.message}`); // Error alert
            console.log(error.message);
        } finally {
            setLoading(false);
            setEmail('');
            setPassword('');
        }
    };

    const handleLogin = async () => {
        setLoading(true);
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            console.log('Logged with:', user.email);
            
        } catch (error) {
            Alert.alert('Lỗi', `Đăng nhap thất bại: ${error.message}`); // Error alert
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
        
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder='Password'
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            />
        </View>

        {loading ? (
            <ActivityIndicator size="large" color="#0782F9" style={{marginTop: 40}} />
        ) : (
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
        </View>
        )}
        
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer:{
        width: '80%'
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button:{
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutline:{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2
    },
    buttonOutlineText:{
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16
    }
});
