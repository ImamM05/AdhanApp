import React from 'react'
import { View, StyleSheet, Image, Text, Button, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import HomeView  from './HomeScreen';

//OpenView has a prop: navigation which has a function navigate which takes it to Madhab Selection
const OpenView = () => 
{
    return (
    <View style={styles.openingContainer}>
        <Image 
        style={styles.imageStyle}
        source={require('../../packages/src/assets/Bismillah_arabic_temp.png')}/>
        <View style={styles.textStyle}>
            <Text>
                In the name of Allah,
            </Text>
            <Text>
                The Most Gracious, The Most Merciful
            </Text>
        </View>
        <Link href={'./screens/HomeScreen'}>Next</Link>
    </View>);
};

export default OpenView;

const styles = StyleSheet.create(
    {
        openingContainer: {
            flex: 1,
            backgroundColor: 'rgba(200, 230, 202, 1)',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '15%',
        },
        imageStyle: {
            width: '300',
            height: '100',
        },
        textStyle:{
            width: '250',
            height: '50', 
            flexDirection:'column', 
            justifyContent:'center', 
            alignItems:'center',
        },

        nextButton: {
            position: 'absolute',
            bottom: 0,
            height: '10%',
            width:'100%',

            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor: 'rgba(156, 197, 129, 0.97)',
            
        },

    }
);