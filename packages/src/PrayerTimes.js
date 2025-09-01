import * as React from 'react';
import * as adhan from 'adhan';
import dayjs from 'dayjs';
import { View } from 'react-native';


// const latitude = gets latitude
// const longitude = gets longitude 

//coordinate will be set using React.useMemo() with latitude and longitude in the dependency array
const coordinates = new adhan.Coordinates('40.68772', '-73.80342');

const date = new Date();
const param = adhan.CalculationMethod.MuslimWorldLeague();
param.madhab = adhan.Madhab.Hanafi;


const prayerTime = new adhan.PrayerTimes(coordinates, date, param);
const dhuhrTime = dayjs(prayerTime.dhuhr).format('h:mm A');

export const NextPrayerView = ({ style, children }) => {
    return (
        <View style={ style }>
            {children}
        </View>
    );
};

export const NextPrayerContainer = ({ style, children }) => {
    return (
        <View style={ style }>
            {children}
        </View>
    );
};

export const FajrPrayer = ( {textStyle} ) => {

    const calculatePrayerFajr = React.useMemo(() =>
    {
        const param = adhan.CalculationMethod.MuslimWorldLeague();
        const prayerTime = new adhan.PrayerTimes(coordinates, date, param);

        return dayjs(prayerTime.fajr).format('h:mm A');
    },[date, coordinates]);
    
    return calculatePrayerFajr;
};

export const IshaPrayer = ( {textStyle} ) => {

    const calculatePrayerIsha = React.useMemo(() => {
        const param = adhan.CalculationMethod.MuslimWorldLeague();
        const prayerTime = new adhan.PrayerTimes(coordinates, date, param);

        return dayjs(prayerTime.isha).format('h:mm A');
    },[date, coordinates]);

    return calculatePrayerIsha;
};






