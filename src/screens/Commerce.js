import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import blueJacket from '../assets/blueJacket.jpg';
import fourStar from '../assets/fourStar.png'
import pinkhoody from '../assets/pinkhoody.jpg'
import jacket from '../assets/jacket.jpg'
import hoody from '../assets/hoody.jpg'
const Commerce = () => {
    return (
        <View>
            <View style={styles.icons}>
                <Ionicons name="arrow-back-outline" size={24} color="black"  style={styles.backArrow}/> 
                <MaterialCommunityIcons name="cart-outline" size={24} color="black" style={styles.cart}/>
            </View>
       <Text style={styles.header} >Woman Jacket</Text>
       <TouchableOpacity style={styles.button} >
        <Text style={styles.search}>Search Jacket</Text>
        <Text style={styles.filter}>Filter</Text>
       </TouchableOpacity>

       <View style={styles.container}>
        <View><Image source={blueJacket} style={styles.image}/></View>
        
        <View style={styles.rightCont}>
            <Text>Bike Jacket Softshell Warm</Text>
            <Image source={fourStar} style={styles.star}/>
            <Text style={styles.amount}>$99</Text>
        </View>
        
       </View>
       <View style={styles.container}>
        <View><Image source={pinkhoody} style={styles.image}/></View>
        
        <View style={styles.rightCont}>
            <Text>Pink Hoody Merino</Text>
            <Image source={fourStar} style={styles.star}/>
            <Text style={styles.amount}>$80</Text>
        </View>
        
       </View>
       <View style={styles.container}>
        <View><Image source={jacket} style={styles.image}/></View>
        
        <View style={styles.rightCont}>
            <Text>Red Women Jacket</Text>
            <Image source={fourStar} style={styles.star}/>
            <Text style={styles.amount}>$115</Text>
        </View>
        
       </View>
       <View style={styles.container}>
        <View><Image source={hoody} style={styles.image}/></View>
        
        <View style={styles.rightCont}>
            <Text>Hooded Jacket Classic</Text>
            <Image source={fourStar} style={styles.star}/>
            <Text style={styles.amount}>$140</Text>
        </View>
        
       </View>
        </View>

    );
}

const styles= StyleSheet.create({
    icons: {
        display: 'flex',
        marginTop: 20,
        flexDirection: 'row'
    },
    backArrow:{
        marginHorizontal: 20,
    },
    cart:{
        marginLeft:250
    },
    header:{
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 20,
        marginLeft: 29,
        marginBottom: 20

    },
    button:{
        backgroundColor: "#fff",
        width: 300,
        borderRadius: 10,
        marginLeft: 30,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center'
    },
    search:{
        marginLeft: 10,
        color: "#cacdcf"
    },
    filter:{
        marginLeft: 140,
        color: "#2d4391",
        fontWeight: 'bold'
    },
    image:{
        marginTop: 30,
        height: 80,
        width: 80,
        marginLeft: 30

    },
    star:{
        height: 25,
        width: 110,
        
    },
    amount:{
        fontWeight: 'bold',
        color: "#8341c4"
    },
    container:{
        display: 'flex',
        flexDirection: 'row'

    },
    rightCont:{
        marginTop:50,
        marginLeft: 20
    }
    

})

export default Commerce;
