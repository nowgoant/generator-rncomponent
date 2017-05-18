import React from 'react-native';
import StyleSheet from 'StyleSheet';
import Dimensions from 'Dimensions';
import PixelRatio from 'PixelRatio';
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "wrapper": {
        "backgroundColor": "#fff"
    }
});