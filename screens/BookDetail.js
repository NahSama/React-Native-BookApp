import React, {useState, useEffect} from 'react'
import {View, Text, SafeAreaView, ImageBackground, TouchableOpacity, Image, ScrollView, Animated} from 'react-native'
import { COLORS,FONTS, SIZES, icons, images  } from '../constants'
import SoundPlayer from 'react-native-sound-player'

const LineDivider = () => {
    return (
        <View style={{width: 1, paddingVertical: 5}}>
            <View style={{flex: 1, borderLeftColor: COLORS.white, borderLeftWidth: 1}}></View>
        </View>
    )
}

const BookDetail = ({route, navigation}) => {
    const [book, setBook] = useState(null);
    const [scrollViewWholeHeight, setScrollViewWholeHeight] = useState(1);
    const [scrollViewVisibleHeight, setScrollViewVisibleHeight] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const indicator = new Animated.Value(0)

    useEffect(() => {
        let {book} = route.params;
        setBook(book);
        SoundPlayer.loadUrl(book.url);
    }, [book])

    const togglePlayingAudio = () => {
        if (!isPlaying){
            try{
                SoundPlayer.play();
            } catch (error){
                console.log(error)
            }
        }else {
            try{
                SoundPlayer.pause();
            } catch (error){
                console.log(error)
            }
        }
        setIsPlaying(!isPlaying);
    }
    

    function renderBookInfoSection () {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <ImageBackground
                    source={book.bookCover}
                    resizeMode="cover"
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}
                />

                {/* Color Overlay */}
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: book.backgroundColor
                    }}
                >
                </View>

                {/* Navigation header */}
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.radius,
                        height: 80,
                        alignItems:'flex-end'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            marginLeft: SIZES.base,
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.back_arrow_icon}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: book.navTintColor
                            }}
                        />
                    </TouchableOpacity>

                    <View 
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.h4,
                                color: book.navTintColor
                            }}
                        >
                            Detail Book
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            marginLeft: SIZES.base,
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.more_icon}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: book.navTintColor,
                                alignSelf: 'flex-end'
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/* Book cover */}
                <View
                    style={{
                        flex: 5,
                        paddingTop: SIZES.padding2,
                        alignItems:'center'
                    }}
                >
                    <Image
                        source={book.bookCover}
                        resizeMode='contain'
                        style={{
                            flex: 1
                        }}
                    />
                </View>
                
                {/* Book name and cover */}
                <View 
                    style={{
                        flex: 1.5,
                        alignItems:'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.h3,
                            color: book.navTintColor
                        }}
                    >
                        {book.bookName}
                    </Text>
                    <Text
                        style={{
                            ...FONTS.body4,
                            color: book.navTintColor
                        }}
                    >
                        {book.author}
                    </Text>
                </View>

                {/* Info Bar */}
                <View 
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 20,
                        margin: SIZES.padding,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        borderRadius: SIZES.radius
                    }}
                >
                    {/* Rating */}
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.h3
                            }}
                        >
                            {book.rating}
                        </Text>
                        <Text 
                            style={{
                                color: COLORS.white,
                                ...FONTS.body4
                            }}
                        >
                            Rating
                        </Text>
                    </View>

                    <LineDivider/>
                    
                    {/* Pages */}
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.radius
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.h3
                            }}
                        >
                            {book.pageNo}
                        </Text>
                        <Text 
                            style={{
                                color: COLORS.white,
                                ...FONTS.body4,
                                textAlign: 'center'
                            }}
                        >
                            Number of pages
                        </Text>
                    </View>

                    <LineDivider/>

                    {/* Language */}
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.h3
                            }}
                        >
                            {book.language}
                        </Text>
                        <Text 
                            style={{
                                color: COLORS.white,
                                ...FONTS.body4
                            }}
                        >
                            Language
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderBookDescription(){
        const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ? scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : scrollViewVisibleHeight

        const difference = scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1

        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    padding: SIZES.padding
                }}
            >
                {/* Custom Scrollbar */}
                <View style={{ width: 4, height: "100%", backgroundColor: COLORS.gray1 }}>
                    <Animated.View
                        style={{
                            width: 4,
                            height: indicatorSize,
                            backgroundColor: COLORS.lightGray4,
                            transform: [{
                                translateY: Animated.multiply(indicator, scrollViewVisibleHeight / scrollViewWholeHeight).interpolate({
                                    inputRange: [0, difference],
                                    outputRange: [0, difference],
                                    extrapolate: 'clamp'
                                })
                            }]
                        }}
                    />
                </View>

                {/* Description */}
                <ScrollView
                    contentContainerStyle= {{
                        paddingLeft: SIZES.padding2,
                    }}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onContentSizeChange={(width, height) => {
                        setScrollViewWholeHeight(height)
                    }}
                    onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => {
                        setScrollViewVisibleHeight(height)
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: indicator } } }],
                        { useNativeDriver: false }
                    )}

                >
                    <Text 
                        style={{
                            color: COLORS.white,
                            ...FONTS.h2
                        }}
                    >
                        Description
                    </Text>
                    <Text
                        style={{
                            color: COLORS.lightGray,
                            ...FONTS.body2
                        }}
                    >
                        {book.description}
                    </Text>
                </ScrollView>
            </View>
        )
    }

    function renderButtonSection(){
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row'
                }}
            >
                {/* Bookmark */}
                <TouchableOpacity
                    style={{
                        width: 60,
                        backgroundColor: COLORS.secondary,
                        marginLeft: SIZES.padding,
                        marginVertical: SIZES.base,
                        borderRadius: SIZES.radius,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    onPress={() => {}}
                >
                    <Image
                        source={icons.bookmark_icon}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.lightGray
                        }}
                    />

                </TouchableOpacity>

                {/* Start Reading */}
                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.primary,
                        marginRight: SIZES.padding,
                        marginVertical: SIZES.base,
                        marginHorizontal: SIZES.base,
                        borderRadius: SIZES.radius,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                    onPress={togglePlayingAudio}
                >
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.h3
                        }}
                    >
                        {!isPlaying ? 'Start Playing' : 'Pause'}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    if (book){
        return (
            <View 
                style={{
                    flex: 1,
                    backgroundColor: COLORS.black
                }}
            >   
                {/* Book Cover Section */}
                <View
                    style={{
                        flex: 4,
                    }}
                >
                    {renderBookInfoSection()}
                </View>

                {/* Description */}
                <View
                    style={{
                        flex: 2,
                    }}
                >
                    {renderBookDescription()}
                </View>

                {/* Button */}
                <View
                    style={{
                        height: 70,
                        marginBottom: 30
                    }}
                >
                    {renderButtonSection()}
                </View>
            </View>
        )
    } else {
        return(null)
    }
    
}

export default BookDetail;