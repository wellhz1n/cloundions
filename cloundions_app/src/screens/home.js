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

import Colors from "../../assets/constants/Colors.js";
import EstilosGerais from "../../assets/constants/Styles.js";


import InformacoesPrincipais from '../../src/components/InformacoesPrincipais';
import WeatherCard from '../components/weatherCard.js';


// import { Container } from './styles';

const { height, width } = Dimensions.get('screen');

const home = ({ navigation }) => {

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
                    source={require('../../assets/imgs/bg2.png')}
                    blurRadius={5} />
            </View>
            <View
                style={styles.bodyTemp}
            >
                <View style={styles.informacoesWrapper}>
                    <InformacoesPrincipais
                        cidade="Cascavel"
                        graus="27"
                        estado="Nublado"
                    />
                </View>
            </View>
            <View
                style={styles.footerGraph}
            >
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
        height,
        width,
    },
    bodyTemp: {
        flex: 8,
        alignItems: 'center'
    },
    informacoesWrapper: {
        marginTop: '40%',
    },
    footerGraph: {
        flex: 3,
        flexDirection: 'row',
    },



})

export default home;