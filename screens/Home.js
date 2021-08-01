import Color from 'color'
import React, { useState } from 'react'
import {SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import { color } from 'react-native-reanimated'
import { COLORS,FONTS, SIZES, icons, images  } from '../constants'

const LineDivider = () => {
    return (
        <View style={{width: 1, paddingVertical: 18}}>
            <View style={{flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1}}></View>
        </View>
    )
}

const Home = ({navigation}) => {
    const profileData = {
        name: 'Username',
        point: 200
    }

    const tag = {
        'Adventure': {
            tagColor: COLORS.darkGreen,
            textColor: COLORS.lightGreen
        },
        'Romance': {
            tagColor: COLORS.darkRed,
            textColor: COLORS.lightRed
        },
        'Drama': {
            tagColor: COLORS.darkBlue,
            textColor: COLORS.lightBlue
        }
    }

    const bookOtherWordsForHome = {
        id: 1,
        bookName: "Other Words For Home",
        bookCover: images.otherWordsForHome,
        rating: 4.5,
        language: "Eng",
        pageNo: 341,
        author: "Jasmine Warga",
        genre: [
            "Adventure", "Romance", "Drama"
        ],
        readed: "12k",
        description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const bookTheMetropolis = {
        id: 2,
        bookName: "The Metropolis",
        bookCover: images.theMetropolist,
        rating: 4.1,
        language: "Eng",
        pageNo: 272,
        author: "Seith Fried",
        genre: [
            "Adventure", "Drama"
        ],
        readed: "13k",
        description: "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    }

    const bookTheTinyDragon = {
        id: 3,
        bookName: "The Tiny Dragon",
        bookCover: images.theTinyDragon,
        rating: 3.5,
        language: "Eng",
        pageNo: 110,
        author: "Ana C Bouvier",
        genre: [
            "Adventure", "Romance", "Drama"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const myBooksData = [
        {
            ...bookOtherWordsForHome,
            completion: "75%",
            lastRead: "3d 5h",

        },
        {
            ...bookTheMetropolis,
            completion: "23%",
            lastRead: "10d 5h",

        },
        {
            ...bookTheTinyDragon,
            completion: "10%",
            lastRead: "1d 2h",

        }
    ]

    const categoriesData = [
        {
            id: 1,
            categoryName: "Best Seller",
            books: [
                bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon
            ]
        },
        {
            id: 2,
            categoryName: "The Latest",
            books: [
                bookTheMetropolis
            ]
        },
        {
            id: 3,
            categoryName: "Coming Soon",
            books: [
                bookTheTinyDragon
            ]
        },
    ]

    const [profile, setProfile] = useState(profileData);
    const [myBooks, setMyBooks] = useState(myBooksData);
    const [categories, setCategories] = useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = useState(1)

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

    function renderButtonSection(){
        return (
            <View 
                style={{
                    flex: 1, 
                    justifyContent:'center', 
                    padding: SIZES.padding
                }}
            >
                <View 
                    style={{
                        flexDirection:'row', 
                        height: 70, 
                        backgroundColor:COLORS.secondary, 
                        borderRadius: SIZES.radius
                    }}
                >
                    {/* Claims */}
                    <TouchableOpacity 
                        style={{
                            flex: 1
                        }}
                    >
                        <View 
                            style={{
                                flex: 1, 
                                flexDirection:'row', 
                                alignItems:'center', 
                                justifyContent:'center'
                            }}
                        >
                            <Image 
                                source={icons.claim_icon}
                                resizeMode="contain"
                                style={{
                                    width:30, 
                                    height: 30
                                }}
                            />
                            <Text 
                                style={{
                                    marginLeft: SIZES.base,
                                    ...FONTS.body3, 
                                    color: COLORS.white
                                }}
                            >
                                Claim
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* LineDivider */}
                    <LineDivider/>

                    {/* Get Point */}
                    <TouchableOpacity 
                        style={{
                            flex: 1
                        }}
                    >
                        <View 
                            style={{
                                flex: 1, 
                                flexDirection:'row', 
                                alignItems:'center', 
                                justifyContent:'center'
                            }}
                        >
                            <Image 
                                source={icons.point_icon}
                                resizeMode="contain"
                                style={{
                                    width:30, 
                                    height: 30
                                }}
                            />
                            <Text 
                                style={{
                                    marginLeft: SIZES.base,
                                    ...FONTS.body3, 
                                    color: COLORS.white
                                }}
                            >
                                Get Point
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* Line Divider */}
                    <LineDivider/>

                    {/* My Card */}
                    <TouchableOpacity 
                        style={{
                            flex: 1
                        }}
                    >
                        <View 
                            style={{
                                flex: 1, 
                                flexDirection:'row', 
                                alignItems:'center', 
                                justifyContent:'center'
                            }}
                        >
                            <Image 
                                source={icons.card_icon}
                                resizeMode="contain"
                                style={{
                                    width:30, 
                                    height: 30
                                }}
                            />
                            <Text 
                                style={{
                                    marginLeft: SIZES.base,
                                    ...FONTS.body3, 
                                    color: COLORS.white
                                }}
                            >
                                My Card
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderMyBookSection(myBooks){
        const renderItem = ({item, index}) => {
            return (
                <TouchableOpacity 
                    style={{
                        flex: 1,
                        marginRight: SIZES.padding
                    }}
                    onPress={() => {
                        navigation.navigate('BookDetail', {
                            book: item
                        })
                    }}
                >
                    {/* Book Covers */}
                    <Image
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{
                            width: 180,
                            height: 250,
                            borderRadius: 20
                        }}
                    />

                    {/* Book Infos */}
                    <View 
                        style={{
                            marginTop: SIZES.radius,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >   
                        <Image
                            source={icons.clock_icon}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                            resizeMode='contain'
                        />
                        <Text 
                            style={{
                                marginLeft: 5,
                                ...FONTS.body3,
                                color: COLORS.lightGray
                            }}
                        >
                            {item.lastRead}
                        </Text>
                        <Image
                            source={icons.page_icon}
                            style={{
                                marginLeft: SIZES.radius,
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text 
                            style={{
                                marginLeft: 5,
                                ...FONTS.body3,
                                color: COLORS.lightGray
                            }}
                        >
                            {item.completion}
                        </Text>
                    </View>

                </TouchableOpacity>
            )
        }

        return (
            <View 
                style={{
                    flex: 1, 
                    paddingLeft: SIZES.padding
                }}
            >
                {/* Header */}
                <View 
                    style={{ 
                        paddingHorizontal: SIZES.padding, 
                        flexDirection: 'row', 
                        justifyContent: 'space-between' 
                    }}
                >
                    <Text 
                        style={{ 
                            ...FONTS.h2, 
                            color: COLORS.white 
                        }}
                    >
                        My Book
                    </Text>

                    <TouchableOpacity
                        onPress={() => console.log("See More")}
                    >
                        <Text 
                            style={{ 
                                ...FONTS.body3, 
                                color: COLORS.lightGray, 
                                alignSelf: 'flex-start', 
                                textDecorationLine: 'underline' 
                            }}
                        >
                            see more
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Books */}
                <View style={{ flex: 1, marginTop: SIZES.padding }}>
                    <FlatList
                        data={myBooks}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }

    function renderCategoryHeader(){
        const renderItem = ({item, index}) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        marginRight: SIZES.padding,
                    }}
                    onPress={()=>setSelectedCategory(item.id)}
                >
                    <Text 
                        style={{
                            ...FONTS.h2,
                            color: selectedCategory === item.id ? COLORS.white: COLORS.lightGray
                        }}
                    >
                        {item.categoryName}
                    </Text>
                </TouchableOpacity>
            )
        }

        return(
            <View
                style={{
                    flex: 1,
                    paddingLeft: SIZES.padding
                }}
            >
                <FlatList 
                    data={categories}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={item => `${item.id}`}
                />

            </View>
        )
    }

    function renderCategoryData(){
        
        const books = categories.find((category) => category.id === selectedCategory).books;
        
        const renderItem = ({item, index}) => {
            return (
                <View>
                    <TouchableOpacity 
                        style={{
                            marginVertical: SIZES.base,
                            flex: 1,
                            flexDirection: 'row',
                        }}
                        onPress={() => {
                            navigation.navigate('BookDetail', {
                                book: item
                            })
                        }}
                    >
                        {/* Book Cover */}
                        <Image
                            source={item.bookCover}
                            style={{
                                width: 100,
                                height: 150,
                                borderRadius: SIZES.radius
                            }}
                            resizeMode='cover'
                        />
                        <View 
                            style={{
                                paddingLeft: SIZES.base
                            }}
                        >
                            {/* Book name and author */}
                            <View>
                                <Text
                                    style={{
                                        ...FONTS.h3,
                                        color: COLORS.white,
                                    }}
                                >
                                    {item.bookName}
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.h3,
                                        color: COLORS.lightGray,
                                    }}
                                >
                                    {item.author}
                                </Text>
                            </View>

                            {/* Book Info */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: SIZES.radius
                                }}
                            >
                                <Image 
                                    source={icons.page_filled_icon}
                                    resizeMode='contain'
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text 
                                    style={{
                                        ...FONTS.body4,
                                        color: COLORS.lightGray,
                                        paddingHorizontal: SIZES.radius
                                    }}
                                >
                                    {item.pageNo}
                                </Text>

                                <Image 
                                    source={icons.read_icon}
                                    resizeMode='contain'
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text 
                                    style={{
                                        ...FONTS.body4,
                                        color: COLORS.lightGray,
                                        paddingHorizontal: SIZES.radius
                                    }}
                                >
                                    {item.readed}
                                </Text>
                            </View>
                            {/* Genre */}
                            <View
                                    style={{
                                        flexDirection:'row',
                                        marginTop: SIZES.base
                                    }}
                                >
                                    {
                                        item.genre.map((genre) => {
                                            return (
                                                <View
                                                    style={{
                                                        justifyContent:'center',
                                                        alignItems: 'center',
                                                        padding: SIZES.base,
                                                        marginRight: SIZES.base,
                                                        backgroundColor: tag[genre].tagColor,
                                                        height: 40,
                                                        borderRadius: SIZES.radius
                                                    }}
                                                    key={genre}
                                                >
                                                    <Text
                                                        style={{
                                                            ...FONTS.body3,
                                                            color: tag[genre].textColor
                                                        }}
                                                    >
                                                        {genre}
                                                    </Text>
                                                </View>
                                            )
                                        })
                                    }

                                </View>
                        </View>
                    </TouchableOpacity>
                    {/* Bookmark */}
                    <TouchableOpacity
                        style={{
                            position:'absolute',
                            top: 5,
                            right: 15
                        }}
                        onPress={() => {}}
                    >
                        <Image
                            source={icons.bookmark_icon}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.lightGray
                            }}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View 
                style={{
                    flex: 1,
                    marginTop: SIZES.radius,
                    paddingLeft: SIZES.padding
                }}
            >
                <FlatList
                    data={books}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.style}>
            {/* Header section */}
            <View style={{height: 200}}>
                {renderHeader(profileData)}
                {renderButtonSection()}
            </View>

            {/* Body Section */}
            <ScrollView style={{ marginTop: SIZES.radius }}>
                {/* Books Section */}
                <View>
                    {renderMyBookSection(myBooks)}
                </View>

                {/* Categories Section */}
                <View style={{ marginTop: SIZES.padding }}>
                    <View>
                        {renderCategoryHeader()}
                    </View>
                    <View>
                        {renderCategoryData()}
                    </View>
                </View>
            </ScrollView>
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