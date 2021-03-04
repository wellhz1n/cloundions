import { useNavigation } from '@react-navigation/core';
import React, { useRef } from 'react';
import {
    View,
    Dimensions,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    Animated,
    StatusBar,
    SafeAreaView
} from 'react-native';

import Colors from "../../assets/constants/Colors";
import EstilosGerais from "../../assets/constants/Styles";


import InformacoesPrincipais from '../components/InformacoesPrincipais';
import WeatherCard from '../components/weatherCard';


// import { Container } from './styles';

const home = () => {
    const navigation = useNavigation();

    const wallpaper = Math.floor(Math.random() * 4);
    let wallpapers;
    switch (wallpaper) {
        case 1:
            wallpapers = require('../../assets/imgs/bg1.png')
            break;
        case 2:
            wallpapers = require('../../assets/imgs/bg2.png')
            break;
        case 3:
            wallpapers = require('../../assets/imgs/bg3.png')
            break;
        case 4:
            wallpapers = require('../../assets/imgs/bg4.png')
            break;
        default:
            wallpapers = require('../../assets/imgs/bg1.png')
            break;
    }

    return (
        <SafeAreaView style={styles.screen} >
            <StatusBar hidden={true} />
            {/* <ImageBackground
                source={require('../../assets/imgs/bg1.png')}
                style={styles.imagemFundo}
            > */}
            <View style={StyleSheet.absoluteFillObject}>

                <Image
                    style={[styles.imagemFundo]}
                    source={wallpapers}
                    blurRadius={5} />
            </View>
            <View
                style={styles.bodyTemp}>
                <View style={styles.informacoesWrapper}>
                    <InformacoesPrincipais
                        cidade="Cascavel"
                        graus="27"
                        estado="Nublado"
                    />
                </View>
                <View
                    style={styles.footerGraph}>
                    <WeatherCard
                        Title="Segunda"
                        Icon="sunny-sharp"
                        Temperature={30} ></WeatherCard>
                    <WeatherCard
                        Title="Terça"
                        Icon="rainy-sharp"
                        Temperature={24} ></WeatherCard>
                    <WeatherCard
                        Title="Quarta"
                        Icon="thunderstorm-sharp"
                        Temperature={20} ></WeatherCard>
                    <WeatherCard
                        Title="Quinta"
                        Icon="cloudy-sharp"
                        Temperature={18} ></WeatherCard>
                </View>
            </View>

            {/* </ImageBackground> */}
        </SafeAreaView >

    );
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    imagemFundo: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
    bodyTemp: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    informacoesWrapper: {
        flex: 7,
        justifyContent: 'center',
    },
    footerGraph: {
        flex: 2,
        marginBottom: 30,
        flexDirection: 'row',
    },



})

export default home;