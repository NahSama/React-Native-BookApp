import React, {useState, useEffect} from 'react'
import {View, Text, SafeAreaView, ImageBackground, TouchableOpacity, Image} from 'react-native'
import { COLORS,FONTS, SIZES, icons, images  } from '../constants'

const LineDivider = () => {
    return (
        <View style={{width: 1, paddingVertical: 5}}>
            <View style={{flex: 1, borderLeftColor: COLORS.white, borderLeftWidth: 1}}></View>
        </View>
    )
}

const BookDetail = ({route, navigation}) => {
    const [book, setBook] = useState(null);

    useEffect(() => {
        let {book} = route.params;
        setBook(book);
    }, [book])

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
                            color: COLORS.white
                        }}
                    >
                        {book.bookName}
                    </Text>
                    <Text
                        style={{
                            ...FONTS.body4,
                            color: COLORS.white
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
                </View>

                {/* Button */}
                <View
                    style={{
                        height: 70
                    }}
                >
                </View>
            </View>
        )
    } else {
        return(null)
    }
    
}

export default BookDetail;