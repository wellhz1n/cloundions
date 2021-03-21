import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Colors from '../../assets/constants/Colors';
import { Forecast } from '../../classes/Weather';

import WeatherCard from '../components/weatherCard';

import { ConditionSlug } from '../../classes/Weather';

interface WeatherCardProps {
    list: Forecast[];
    isLoading: boolean;
}


const WeatherCardGroup = (props: WeatherCardProps) => {

    const getIcon = (condicao) => {
        let iconReturn = "sunny-sharp"


        if (
            condicao == ConditionSlug.hail ||
            condicao == ConditionSlug.rain ||
            condicao == ConditionSlug.snow
        ) {
            iconReturn = "rainy-sharp"
        }


        else if (
            condicao == ConditionSlug.storm
        ) {
            iconReturn = "thunderstorm-sharp";
        }


        else if (
            condicao == ConditionSlug.fog ||
            condicao == ConditionSlug.cloud ||
            condicao == ConditionSlug.cloudly_day ||
            condicao == ConditionSlug.cloudly_night
        ) {
            iconReturn = "cloudy-sharp"
        }

        return iconReturn;
    }

    return (
        < View
            style={styles.footerGraph}>
            {
                props.isLoading ? (
                    <SkeletonPlaceholder
                        highlightColor={Colors.primary}
                        speed={600}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.SkeletonStyle} />
                            <View style={styles.SkeletonStyle} />
                            <View style={styles.SkeletonStyle} />
                            <View style={styles.SkeletonStyle} />
                        </View>
                    </SkeletonPlaceholder>
                ) : (
                    <>
                        {
                            props.list.map((x, i) => {
                                console.log(x.condition + "+++++++++++++++++++++++++++++++++");
                                return (
                                    <WeatherCard
                                        key={i}
                                        Title={x.weekday}
                                        Icon={getIcon(x.condition)}
                                        TemperatureMax={x.max}
                                        TemperatureMin={x.min}
                                        condicao={x.condition}
                                    ></WeatherCard>
                                )
                            }
                            )

                        }

                    </>
                )}

        </View >
    );
}

const styles = StyleSheet.create({

    footerGraph: {
        flex: 2,
        marginBottom: 30,
        flexDirection: 'row',
    },
    SkeletonStyle: {
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
    }

});

export default WeatherCardGroup;
