import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

import EstilosGerais from "../../assets/constants/Styles";
import Colors from "../../assets/constants/Colors";

import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { ConditionSlug } from '../../classes/Weather';
interface InformacoesPrincipaisProps {
    graus: string;
    cidade: string;
    estado: string;
    isloading: boolean;
    condicao: ConditionSlug;
}

const InformacoesPrincipais = (props: InformacoesPrincipaisProps) => {

    var corGraus = Colors.primary;
    var corInformacoesSecundarias = Colors.white;

    if ( // Muda a cor primária de acordo com a condição
        props.condicao == "clear_night" ||
        props.condicao == "snow"
    ) {
        corGraus = Colors.primary
        if(props.condicao == "snow") {
            corInformacoesSecundarias = Colors.primary;
        };
    }
    else if (
        props.condicao == "rain" ||
        props.condicao == "storm" ||
        props.condicao == "fog"
    ) {
        corGraus = Colors.secondary;
        if(props.condicao == "fog") {
            corInformacoesSecundarias = Colors.secondary;
        }
    }
    else if (
        props.condicao == "cloudly_day" ||
        props.condicao == "clear_day" ||
        props.condicao == "cloud"
    ) {
        corGraus = Colors.terciary;
        corInformacoesSecundarias = Colors.secondary;
        if(props.condicao == "clear_day") {
            corInformacoesSecundarias = Colors.terciary;
        }
    }

    else if (
        props.condicao == "cloudly_night" ||
        props.condicao == "none_day"
    ) {
        corGraus = Colors.quaternary
    }




    return (
        <View style={styles.wrapperGeral}>
            {
                props.isloading ? (
                    <SkeletonPlaceholder 
                    highlightColor={Colors.primary}
                    speed={600}>

                        <View style={[{
                            height: 130,
                            width: 250,
                            paddingVertical: 10,
                            paddingHorizontal: 25,
                            borderRadius: 10,
                        }, EstilosGerais.BoxShadow]} />
                        <View style={{ marginTop: 10, marginLeft: 10, width: '90%', borderRadius: 12, height: 30 }} />
                        <View style={{ marginTop: 10, marginLeft: 25, width: '80%', borderRadius: 12, height: 20 }} />

                    </SkeletonPlaceholder>
                ) : (
                    <>
                        <View style={[styles.grausWrapper, EstilosGerais.BoxShadow, { borderColor: corGraus }]}>

                            <Text style={[styles.textTemp, { color: corGraus }]}>
                                {props.graus}° C
                            </Text>

                        </View >
                        <View style={styles.estadoWrapper}>

                            <Text style={{...styles.estadoText, ...{color: corInformacoesSecundarias}}}>
                                {props.estado}
                            </Text>


                        </View>
                        <View style={styles.cidadeWrapper}>
                            <Text style={{...styles.textCidade, ...{color: corInformacoesSecundarias}}}>
                                {props.cidade}
                            </Text>
                        </View>
                    </>
                )
            }


        </View >
    )
}

const styles = StyleSheet.create({
    wrapperGeral: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    grausWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
        width: 250,
        backgroundColor: Colors.white,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 10,
        borderWidth: 3,
    },
    textTemp: {
        fontSize: 70,
        textAlign: 'center',
    },
    estadoWrapper: {
        marginTop: 15
    },
    estadoText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    cidadeWrapper: {
        marginTop: 7
    },
    textCidade: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'

    },
});


export default InformacoesPrincipais;
