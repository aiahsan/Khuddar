import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry';
import { Avatar } from 'react-native-paper'
export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };



    render() {
        const { data: { title, subtitle, illustration,stars }, even } = this.props;

        const uppercaseTitle = title ? (
            <Text
                style={[styles.title, even ? styles.titleEven : {}]}
                numberOfLines={2}
            >
                { title.toUpperCase()}
            </Text>
        ) : false;

        return (
            <View
                activeOpacity={1}
                style={[styles.slideInnerContainer,{height:120}]}

            >

                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Avatar.Image source={{ uri: illustration }} size={50} />

                    <View style={{marginLeft:10}}>{uppercaseTitle}
                        <Text
                            style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                            numberOfLines={2}
                        >
                            {subtitle}
                           
                        </Text>
                        <Text    style={[styles.subtitle, even ? styles.subtitleEven : {}]}>
                        {stars} Stars
                        </Text>
                        </View>
                </View>
           
                </View>

              </View>
        );
    }
}