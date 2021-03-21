import { useNavigation } from '@react-navigation/core';
import React, { useRef, useEffect, useState } from 'react';

import {
    View,
    StyleSheet,
    StatusBar,
    SafeAreaView
} from 'react-native';

import { getLatestLocation, requestPermission } from 'react-native-location';
import { Weather } from '../../classes/Weather';


import { GetWeather } from '../../config/axios';


import InformacoesPrincipais from '../components/InformacoesPrincipais';
import WeatherCardGroup from '../components/WeatherCardGroup';
import BackgroundImage from '../components/BackgroundImage';


// import { Container } from './styles';

const home = () => {
    const [weather, setWeather] = useState<Weather>(null);
    useEffect(() => {
        requestPermission({
            android: {
                detail: "coarse",
                rationale: {
                    title: "Nós precisamos acessar sua localização",
                    message: "Nós usaremos sua localização para obter o clima",
                    buttonPositive: "Permitir",
                    buttonNegative: "Recusar"
                }
            }
        }).then(x => {
            if (x) {
                getLatestLocation().then(l => {
                    GetWeather(5, { lat: l.latitude, lon: l.longitude }).then(w => {
                        console.log(JSON.stringify(w));
                        w.forecast.shift();
                        setWeather(w);
                    })
                })
            }
        })
    }, []);

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.screen} >
            <StatusBar hidden={true} />
            <BackgroundImage
                condicao={weather?.condition_slug}
            />
            <View
                style={styles.bodyTemp}>
                <View style={styles.informacoesWrapper}>
                    <InformacoesPrincipais
                        cidade={weather?.city_name ?? ""}
                        graus={weather?.temp.toString() ?? ""}
                        estado={weather?.description ?? ""}
                        isloading={weather == null}
                        condicao={weather?.condition_slug}
                    />
                </View>

                <WeatherCardGroup
                    list={weather?.forecast??[]}
                    isLoading={weather == null}
                />
            </View>

            {/* </ImageBackground> */}
        </SafeAreaView >

    );
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    bodyTemp: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    informacoesWrapper: {
        flex: 7,
        justifyContent: 'center',
    }
})

export default home;