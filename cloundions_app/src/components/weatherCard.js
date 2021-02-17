import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../assets/constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

// import { Container } from './styles';

/**
 * 
 * @param {{Title: string, Temperature: string,Icon:string }} props 
 */
const WeatherCard = (props) => {
    return (
        <View style={styles.weatherCard}>
            <Text style={styles.weatherCardTitle}>{props.Title}</Text>
            <Icon
                name={props.Icon}
                size={40}
                color={Colors.secondary}
            />
            <Text>{props.Temperature}°C</Text>
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
        marginTop: -6,
        paddingBottom: 10
    }
})
export default WeatherCard;