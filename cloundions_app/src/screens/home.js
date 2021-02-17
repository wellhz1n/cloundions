import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    StatusBar,
    SafeAreaView
} from 'react-native';

import Colors from "../../assets/constants/Colors.js";
import EstilosGerais from "../../assets/constants/Styles.js";


import InformacoesPrincipais from '../../src/components/InformacoesPrincipais';
import WeatherCard from '../components/weatherCard.js';


// import { Container } from './styles';

const home = ({ navigation }) => {

    navigation.setOptions({ title: 'CASCAVEL' })

    return (
        <SafeAreaView style={styles.screen} >
            <StatusBar hidden={true} />
            <ImageBackground
                source={require('../../assets/imgs/bg1.png')}
                style={styles.imagemFundo}
            >
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
            </ImageBackground>
        </SafeAreaView >

    );
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    imagemFundo: {
        flex: 1,
        justifyContent: 'center'
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