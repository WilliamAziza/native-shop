import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import shop from '../images/shop.png'
const OnlineShop = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.shopHeader} >ONLINE SHOPPING</Text>
            <Text style={styles.LoremText} >
                Welcome to Azey Shop! Discover the latest fashion trends and high-quality clothing. 
                Browse our collection of stylish jackets, hoodies, and accessories. 
                Start shopping now to find your perfect style at amazing prices.
            </Text>
            <Image source={shop} style={styles.images}/>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Cart')
            }} style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Entypo name="dots-three-horizontal" size={40} color="#dcdedd" style={styles.icon} />
                <Text style={styles.skipText}>Skip</Text>
            </View>
            
        </View>
    );
}

const styles= StyleSheet.create({
    shopHeader:{
        fontSize: 20,
        marginTop: 50,
        fontWeight: 'bold',
        marginHorizontal: 40,
        marginBottom: 20
    },
    container:{
        backgroundColor: 'white'
    },
    LoremText:{
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
    
    images:{
        marginHorizontal: 50,
        marginBottom: 30,
        marginTop: 20

    },
    footer:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50
    },
    icon:{
        marginHorizontal: 140
    },
    skipText:{
        // marginHorizontal: 50,
        marginTop: 10,
        color: '#7a7c80',
        fontWeight: 'bold'
    }


})

export default OnlineShop;
