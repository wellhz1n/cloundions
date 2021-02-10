import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    StatusBar,
    SafeAreaView
} from 'react-native';

//import Colors from "../../assets/constants/Colors.js";

// import { Container } from './styles';

const home = ({ navigation }) => {

    navigation.setOptions({ title: 'CASCAVEL' })

    return (
        <SafeAreaView style={styles.screen} >
            <StatusBar
                backgroundColor="rgba(0,0,0,0.6)"
            />
            <ImageBackground
                source={require('../../assets/imgs/bg3.png')}
                style={styles.imagemFundo}
            >
                <View
                    style={styles.headerTitle}
                >
                    <Text style={styles.titulo}>
                        CASCAVEL
                    </Text>
                </View>
                <View
                    style={styles.bodyTemp}
                >
                    <Text style={styles.textTemp}>24°</Text>
                    <Text>C</Text>

                </View>
                <View
                    style={styles.footerGraph}
                ></View>
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
    headerTitle: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyTemp: {
        flex: 8,
        flexDirection: 'row'
    },
    textTemp: {
        fontSize: 60,
        textAlign: 'center',
        color: 'white',
    },

    footerGraph: {
        flex: 2
    },
    titulo: {
        fontSize: 50,
        textAlign: 'center',
    }


})

export default home;