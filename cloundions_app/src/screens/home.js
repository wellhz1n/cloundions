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
import Icon from 'react-native-vector-icons/Ionicons';


import InformacoesPrincipais from '../../src/components/InformacoesPrincipais';


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
                    <View style={styles.weatherCard}>
                        <Text style={styles.weatherCardTitle}>Segunda</Text>
                        <Icon
                            name="rainy-sharp"
                            size={40}
                            color={Colors.secondary}
                        />
                        <Text>30°C</Text>
                    </View>
                    <View style={styles.weatherCard}>
                        <Text style={styles.weatherCardTitle}>Terça</Text>
                        <Icon
                            name="sunny-sharp"
                            size={40}
                            color={Colors.secondary}
                        />
                        <Text>30°C</Text>
                    </View>
                    <View style={styles.weatherCard}>
                        <Text style={styles.weatherCardTitle}>Quarta</Text>
                        <Icon
                            name="thunderstorm-sharp"
                            size={40}
                            color={Colors.secondary}
                        />
                        <Text>30°C</Text>
                    </View>
                    <View style={styles.weatherCard}>
                        <Text style={styles.weatherCardTitle}>Quinta</Text>
                        <Icon
                            name="cloudy-sharp"
                            size={40}
                            color={Colors.secondary}
                        />
                        <Text>30°C</Text>
                    </View>
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
    weatherCard: {
        marginHorizontal: 5,
        height: 100,
        width: 80,
        shadowColor: '#000',
        shadowOffset: {
            height: 0,
            width: 0
        },
        shadowOpacity: .8,
        elevation: 2,
        borderRadius: 16,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    weatherCardTitle: {
        color: Colors.primary,
        fontSize: 12,
        marginTop: -6,
        paddingBottom: 10
    }


})

export default home;