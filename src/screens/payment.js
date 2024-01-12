import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import payment from '../images/payment.jpg';
import { Entypo } from '@expo/vector-icons';

const Payment = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.payHeader}>PAYMENT SUCCESSFUL</Text>
            <Text style={styles.payText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
            <Image source={payment} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

            <View style={styles.cartFooter}>
                <Text style={styles.footerLeft}>Previous</Text>
                <Entypo name="dots-three-horizontal" size={24} color="#dcdedd" style={styles.cartIcon} />
                <Text style={styles.footerRight}>Skip</Text>
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    payHeader:{
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 40,
        marginBottom: 20
    },
    container:{
        backgroundColor: 'white'
    },
    payText:{
        color: '#7a7c80',
        marginHorizontal: 30
    },
    button:{
        backgroundColor: '#6b0b9c',
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        marginHorizontal: 90
    },

    buttonText:{
        color: 'white',
        fontWeight: 'bold'
    },
    cartFooter:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 40,
    },
    footerLeft:{
        marginHorizontal: 15,
        color: '#7a7c80',
        fontWeight: '500'
    },
    cartIcon:{
        marginHorizontal: 70
    },
    footerRight:{
        marginHorizontal: 50,
        color: '#7a7c80',
        fontWeight: '500'
    }
})

export default Payment;
