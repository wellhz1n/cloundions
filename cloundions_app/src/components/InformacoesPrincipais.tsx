import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import EstilosGerais from "../../assets/constants/Styles";
import Colors from "../../assets/constants/Colors";

/**
 * 
 * @param {{graus: string, cidade: string, estado: string}} props 
 */

interface InformacoesPrincipaisProps {
    graus: string;
    cidade: string;
    estado: string;
}

const InformacoesPrincipais = (props: InformacoesPrincipaisProps) => {
    return (
        <View>
            <View style={[styles.grausWrapper, EstilosGerais.BoxShadow]}>
                <Text style={styles.textTemp}>
                    {props.graus}° C
                </Text>
            </View>
            <View style={styles.estadoWrapper}>
                <Text style={styles.estadoText}>
                    {props.estado}
                </Text>
            </View>
            <View style={styles.cidadeWrapper}>
                <Text style={styles.textCidade}>
                    {props.cidade}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    grausWrapper: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 10,
        borderColor: Colors.primary,
        borderWidth: 3,
    },
    textTemp: {
        fontSize: 70,
        textAlign: 'center',
        color: Colors.primary,
    },
    estadoWrapper: {
        marginTop: 15
    },
    estadoText: {
        fontSize: 40,
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    cidadeWrapper: {
        marginTop: 7
    },
    textCidade: {
        fontSize: 18,
        color: Colors.white,
        textAlign: 'center',
        fontWeight: 'bold'

    },
});


export default InformacoesPrincipais;
