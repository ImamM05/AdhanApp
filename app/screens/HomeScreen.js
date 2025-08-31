import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Platform, ScrollView } from 'react-native';
import { FajrPrayer, NextPrayerContainer, NextPrayerView } from '../../packages/src/PrayerTimes';


const PrayerCard = (props) =>
{
    return (
        <View style={props.style}>
            <Text style={{ flexDirection:'row', justifyContent: 'center', alignContent: 'center'}}>
                    This will host the active prayer time
            </Text>
        </View>
    );
};

const NavBar = (props) =>
{
    return (
        <View style={props.style}>
            <Text style={{ flexDirection:'row', justifyContent: 'center', alignContent: 'center'}}>
                    This will host the navigation bar
            </Text>
        </View>
    );
};

const BottomScreen = ( {style, children} ) => {
    return (
        <View style={style}>
            {children}
        </View>
    );
};

//instead of passing props as a whole, passed just style and containerStyle props
const NextPrayerLayout = ({ style }) =>
{
    return (
    <NextPrayerContainer style={style}>
        <NextPrayerView style={styles.nextPrayerViewS}>
            <FajrPrayer/>
        </NextPrayerView>

        <NextPrayerView style={styles.nextPrayerViewM}>
            <Text>Dhuhr</Text>
        </NextPrayerView>

        <NextPrayerView style={styles.nextPrayerViewM}>
            <Text>Asr</Text>
        </NextPrayerView>

        <NextPrayerView style={styles.nextPrayerViewM}>
            <Text>Maghrib</Text>
        </NextPrayerView>

        <NextPrayerView style={styles.nextPrayerViewE}>
            <Text>Isha</Text>
        </NextPrayerView>
    </NextPrayerContainer>
    );

};

//need to implement navigate here later
const HomeView = (props) =>
{
    const ViewWrapper =  Platform.OS === 'ios' ? SafeAreaView : View;

    return (
        <ViewWrapper style={styles.homeContainer}>
            <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}>
                <PrayerCard style={styles.prayerCardContainer}/>
                <BottomScreen style={styles.bottomContainer}>
                    <NextPrayerLayout style={styles.nextPrayerContainer}/>
                </BottomScreen>
            </ScrollView>
            <NavBar style={styles.navBarContainer}/>

                
        </ViewWrapper>
    );
};

export default HomeView;

const styles = StyleSheet.create(
    {
        homeContainer: {
            flex: 1,
            backgroundColor: 'rgba(95, 150, 98, 1)',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        prayerCardContainer: {
            width: 335,
            height: 280,

            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingVertical: '5%',

            backgroundColor: 'rgba(170, 233, 127, 0.97)',
            borderRadius: 30,
            borderWidth: 1.5,
            borderColor: 'rgba(132, 182, 99, 0.73)',
            elevation: 4, // for android

            //shadows for ios
            shadowOffset: {0: 5}, //by how much the shadow shifts
            shadowOpacity: 0.15,
            shadowRadius: 20,
        },

         navBarContainer: {
            height: 50,
            width:'100%',

            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingHorizontal: '5%',

            backgroundColor: 'rgba(156, 197, 129, 0.97)',
        },
        //bottom of the card, has scrolling
        // height is as big as 
        scrollView: {
            width:'100%',
            flex:1,
        },

        scrollContainer: {
            justifyContent:'center',
            paddingHorizontal: 20,
        },

        // container object to pass to scrollContainer prop, this will handle the children of the scrollView
        bottomContainer: {
            paddingTop: 20,
        },
         nextPrayerContainer: {
            width: 335,
            height: 300,
            backgroundColor: 'rgba(170, 233, 127, 0.97)',
            borderRadius: 30,
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center',
        },
        nextPrayerViewS: {
            width: 335,
            height: 50,
            backgroundColor: 'rgba(156, 197, 129, 0.97)',

            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderWidth: 1.5,
            borderColor: 'rgba(126, 158, 104, 0.97)',

            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
            
        },
        nextPrayerViewE: {
            width: 335,
            height: 50,
            backgroundColor: 'rgba(156, 197, 129, 0.97)',

            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderWidth: 1.5,
            borderColor: 'rgba(126, 158, 104, 0.97)',

            flexDirection:'row',
            justifyContent:'flex-start',
            justifyContent:'flex-start',
            alignItems:'center',
            
        },
        nextPrayerViewM: {
            width: 335,
            height: 50,
            backgroundColor: 'rgba(156, 197, 129, 0.97)',

            borderWidth: 1.5,
            borderColor: 'rgba(126, 158, 104, 0.97)',

            flexDirection:'row',
            justifyContent:'flex-start',
            justifyContent:'flex-start',
            alignItems:'center',
        },



    }
);