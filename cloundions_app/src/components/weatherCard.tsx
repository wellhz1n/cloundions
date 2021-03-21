import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../assets/constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { ConditionSlug } from '../../classes/Weather';
import ConditionColorUtils from '../../utils/ConditionColorUtils';

// import { Container } from './styles';



interface WeatherCardProps {
    Title: string;
    Icon: string;
    TemperatureMax: number;
    TemperatureMin: number;
    condicao: ConditionSlug
}

const WeatherCard = (props: WeatherCardProps) => {

    const [colorUtils, setColorUtils] = useState(ConditionColorUtils.getColorByCondition(props.condicao));

    return (
        <View style={styles.weatherCard}>
            <Text style={styles.weatherCardTitle}>{props.Title}</Text>
            <Icon
                name={props.Icon}
                size={30}
                color={colorUtils.corPrimaria}
            />
            <Text style={{ fontWeight: 'bold', color: Colors.quaternary }}>{props.TemperatureMax}°C</Text>
            <Text style={{ fontSize: 10, color: Colors.terciary }}>{props.TemperatureMin}°C</Text>

        </View>
    );
}
const styles = StyleSheet.create({
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
        marginTop: -4,
        fontWeight:'bold',
        paddingBottom: 10
    }
})
export default WeatherCard;