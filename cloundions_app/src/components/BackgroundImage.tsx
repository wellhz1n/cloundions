import React from 'react';

import {
    StyleSheet,
    View,
    Image,
    ImageBackground
} from 'react-native';

import Images from "../../assets/imgs/index";


interface BackgroundImageProps {
    condicao: string;
}

const BackgroundImage = (props: BackgroundImageProps) => {

    let wallpaper = Images.wallpaper.cloudly_day;
    let conditionSlug = props.condicao;
    if (conditionSlug) {

        if (conditionSlug == "hail") {
            conditionSlug = "rain";
        }

        if (conditionSlug == "none_night") {
            conditionSlug = "clear_night";
        }

        wallpaper = Images.wallpaper[conditionSlug];
    }



    return (
        <View style={StyleSheet.absoluteFillObject}>
            <Image
                style={styles.imagemFundo}
                source={wallpaper}
                blurRadius={1.5}
            />
        </View>

    )

}

const styles = StyleSheet.create({

    imagemFundo: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
});

export default BackgroundImage;