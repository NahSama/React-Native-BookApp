import Color from 'color'
import React, { useState } from 'react'
import {SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { color } from 'react-native-reanimated'
import { COLORS,FONTS, SIZES, icons   } from '../constants'

const Home = () => {
    const profileData = {
        name: 'Username',
        point: 200
    }

    const [profile, setProfile] = useState(profileData);

    function renderHeader(profileData){
        return (
            <View style={styles.header}>
                {/* Greetings */}
                <View style={{flex: 1}}>
                    <View>
                        <Text style={styles.greeting}>Good Morning</Text>
                        <Text style={styles.name}>{profileData.name}</Text>
                    </View>
                </View>
                {/* Points */}
                <TouchableOpacity 
                    style={styles.pointButton}
                >
                    <View style={styles.pointButtonView}>
                        <View style={styles.pointButtonViewImageBackground}>
                            <Image 
                                source={icons.plus_icon}
                                style={styles.pointButtonViewImage}
                                resizeMode="contain"
                            />
                        </View>
                        <Text style={styles.pointButtonViewText}>{profileData.point} points</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.style}>
            {/* Header section */}
            <View style={{height: 200}}>
                {renderHeader(profileData)}
            </View>

            {/* Body Section */}
            <View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    style: {
        flex: 1,
        backgroundColor: COLORS.black
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: SIZES.padding,
        alignItems: 'center'
    },
    greeting: {
        ...FONTS.h3,
        color: COLORS.white
    },
    name: {
        ...FONTS.h2,
        color: COLORS.white
    },
    pointButton: {
        backgroundColor: COLORS.primary,
        height: 40,
        paddingLeft: 3,
        paddingRight: SIZES.radius,
        borderRadius: 20
    },
    pointButtonView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pointButtonViewImageBackground: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    pointButtonViewImage: {
        width: 20,
        height: 20
    },
    pointButtonViewText: {
        marginLeft: SIZES.base,
        color: COLORS.white,
        ...FONTS.body3
    }
})

export default Home;