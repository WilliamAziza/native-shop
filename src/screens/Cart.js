import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import cart from '../images/cart.jpg'
import { Entypo } from '@expo/vector-icons';

const Cart = ({navigation}) => {
    return (
        <View style={styles.container}> 
            <Text style={styles.cartHeader}>ADD TO CART</Text>
            <Text style={styles.cartText}>
                Review your selected items before proceeding to checkout. 
                You can adjust quantities or remove items from your cart. 
                Secure payment options available for your convenience.
            </Text>
            <Image source={cart} style={styles.image}/>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Payment")
            }} style={styles.button}>
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
    cartHeader:{
        marginTop: 50,
        marginHorizontal: 50,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    },
    container:{
        backgroundColor: 'white'
    },
    cartText:{
        color: '#7a7c80',
        marginHorizontal: 30
    },
    image:{
        height: 310,
    
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
        marginTop: 30,
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
export default Cart;
