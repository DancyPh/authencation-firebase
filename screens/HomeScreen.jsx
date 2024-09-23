import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const [loading, setLoading] = useState(false);
    
    const navigation = useNavigation();
    const handelLogOut = async() => {
        setLoading(true);
        try {
            await signOut(auth); 
            navigation.replace("Login");           
        } catch (error) {
            Alert.alert('Lỗi', `Logout thất bại: ${error.message}`); // Error alert
            console.log(error.message);
        } finally {
            
            setLoading(false);
        }
    }
  return (
    <View style={styles.container}>
      <Text>email: {auth.currentUser?.email}</Text>
      {loading ? (
         <ActivityIndicator size="large" color="#0782F9" style={{marginTop: 40}} />
      ): (

          <TouchableOpacity
            onPress={handelLogOut}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
                Sign out
            </Text>
          </TouchableOpacity>
      )}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',alignItems: 'center'
    },
    button: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0782F9',
        padding: 10,
        borderRadius: 15,
        marginTop: 40
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    }
})