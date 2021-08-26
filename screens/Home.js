import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { useEffect, useState } from 'react';
import useRestaurants from "../hooks/useRestaurants";
import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Home = ({ navigation }) => {

    const [ results, errorMessage] = useRestaurants();
    return (
        <View>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
          <Text >{results}</Text>
          <FlatList
            horizontal
            data={results}
            keyExtractor={result => result.restaurant_id}
            renderItem={({ item }) => {
              return <Text>{item.restaurant_name}</Text>;
            }}
          />
        </View>
      );
    };
    // const categoryData = [
    //     {
    //         id: 1,
    //         name: "Rice",
    //         icon: icons.rice_bowl,
    //     },
    //     {
    //         id: 2,
    //         name: "Noodles",
    //         icon: icons.noodle,
    //     },
    //     {
    //         id: 3,
    //         name: "Hot Dogs",
    //         icon: icons.hotdog,
    //     },
    //     {
    //         id: 4,
    //         name: "Salads",
    //         icon: icons.salad,
    //     },
    //     {
    //         id: 5,
    //         name: "Burgers",
    //         icon: icons.hamburger,
    //     },
    //     {
    //         id: 6,
    //         name: "Pizza",
    //         icon: icons.pizza,
    //     },
    //     {
    //         id: 7,
    //         name: "Snacks",
    //         icon: icons.fries,
    //     },
    //     {
    //         id: 8,
    //         name: "Sushi",
    //         icon: icons.sushi,
    //     },
    //     {
    //         id: 9,
    //         name: "Desserts",
    //         icon: icons.donut,
    //     },
    //     {
    //         id: 10,
    //         name: "Drinks",
    //         icon: icons.drink,
    //     },

    // ]

    // // price rating
    // const affordable = 1
    // const fairPrice = 2
    // const expensive = 3

    // const [categories, setCategories] = React.useState(categoryData)
    // const [selectedCategory, setSelectedCategory] = React.useState(null)
    // const [restaurants, setRestaurants] = useState([]);


    // function onSelectCategory(category) {
    //     //filter restaurant
    //     let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

    //     setRestaurants(restaurantList)

    //     setSelectedCategory(category)
    // }

    // function getCategoryNameById(id) {
    //     let category = categories.filter(a => a.id == id)

    //     if (category.length > 0)
    //         return category[0].name

    //     return ""
    // }

//     function renderHeader() {
//         return (
//             <View style={{ flexDirection: 'row', height: 50 }}>
//                 <TouchableOpacity
//                     style={{
//                         width: 50,
//                         paddingLeft: SIZES.padding * 2,
//                         justifyContent: 'center'
//                     }}
//                 >
//                     <Image
//                         source={icons.nearby}
//                         resizeMode="contain"
//                         style={{
//                             width: 30,
//                             height: 30
//                         }}
//                     />
//                 </TouchableOpacity>

//                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                     <View
//                         style={{
//                             width: '70%',
//                             height: "100%",
//                             backgroundColor: COLORS.lightGray3,
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             borderRadius: SIZES.radius
//                         }}
//                     >
//                         <Text style={{ ...FONTS.h3 }}>{}</Text>
//                     </View>
//                 </View>

//                 <TouchableOpacity
//                     style={{
//                         width: 50,
//                         paddingRight: SIZES.padding * 2,
//                         justifyContent: 'center'
//                     }}
//                 >
//                     <Image
//                         source={icons.basket}
//                         resizeMode="contain"
//                         style={{
//                             width: 30,
//                             height: 30
//                         }}
//                     />
//                 </TouchableOpacity>
//             </View>
//         )
//     }

//     function renderMainCategories() {
//         const renderItem = ({ item }) => {
//             return (
//                 <TouchableOpacity
//                     style={{
//                         padding: SIZES.padding,
//                         paddingBottom: SIZES.padding * 2,
//                         backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
//                         borderRadius: SIZES.radius,
//                         alignItems: "center",
//                         justifyContent: "center",
//                         marginRight: SIZES.padding,
//                         ...styles.shadow
//                     }}
//                     onPress={() => onSelectCategory(item)}
//                 >
//                     <View
//                         style={{
//                             width: 50,
//                             height: 50,
//                             borderRadius: 25,
//                             alignItems: "center",
//                             justifyContent: "center",
//                             backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
//                         }}
//                     >
//                         <Image
//                             source={item.icon}
//                             resizeMode="contain"
//                             style={{
//                                 width: 30,
//                                 height: 30
//                             }}
//                         />
//                     </View>

//                     <Text
//                         style={{
//                             marginTop: SIZES.padding,
//                             color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
//                             ...FONTS.body5
//                         }}
//                     >
//                         {item.name}
//                     </Text>
//                 </TouchableOpacity>
//             )
//         }

//         return (
//             <View style={{ padding: SIZES.padding * 2 }}>
//                 <Text style={{ ...FONTS.h1 }}>Main</Text>
//                 <Text style={{ ...FONTS.h1 }}>Categories</Text>

//                 <FlatList
//                     data={categories}
//                     horizontal
//                     showsHorizontalScrollIndicator={false}
//                     keyExtractor={item => `${item.id}`}
//                     renderItem={renderItem}
//                     contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
//                 />
//             </View>
//         )
//     }

//     function renderRestaurantList() {
//         const renderItem = ({ item }) => (
//             <TouchableOpacity
//                 style={{ marginBottom: SIZES.padding * 2 }}
//                 onPress={() => navigation.navigate("Restaurant", {
//                     item,
//                     currentLocation
//                 })}
//             >
//                 {/* Image */}
//                 <View
//                     style={{
//                         marginBottom: SIZES.padding
//                     }}
//                 >
//                     {/* <Image
//                         source={item.photo}
//                         resizeMode="cover"
//                         style={{
//                             width: "100%",
//                             height: 200,
//                             borderRadius: SIZES.radius
//                         }}
//                     /> */}

//                     <View
//                         style={{
//                             position: 'absolute',
//                             bottom: 0,
//                             height: 50,
//                             width: SIZES.width * 0.3,
//                             backgroundColor: COLORS.white,
//                             borderTopRightRadius: SIZES.radius,
//                             borderBottomLeftRadius: SIZES.radius,
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             ...styles.shadow
//                         }}
//                     >
//                         <Text style={{ ...FONTS.h4 }}>{item.restaurant_price}</Text>
//                     </View>
//                 </View>

//                 {/* Restaurant Info */}
//                 <Text style={{ ...FONTS.body2 }}>{item.restaurant_name}</Text>

//                 <View
//                     style={{
//                         marginTop: SIZES.padding,
//                         flexDirection: 'row'
//                     }}
//                 >
//                     {/* Rating */}
//                     <Image
//                         source={icons.star}
//                         style={{
//                             height: 20,
//                             width: 20,
//                             tintColor: COLORS.primary,
//                             marginRight: 10
//                         }}
//                     />
//                     <Text style={{ ...FONTS.body3 }}>{item.restaurant_price}</Text>

//                     {/* Categories */}
//                     <View
//                         style={{
//                             flexDirection: 'row',
//                             marginLeft: 10
//                         }}
//                     >
//                         {/* {
//                             item.categories.map((categoryId) => {
//                                 return (
//                                     <View
//                                         style={{ flexDirection: 'row' }}
//                                         key={categoryId}
//                                     >
//                                         <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
//                                         <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
//                                     </View>
//                                 )
//                             })
//                         } */}

//                         {/* Price */}
//                         {
//                             [1, 2, 3].map((priceRating) => (
//                                 <Text
//                                     key={priceRating}
//                                     style={{
//                                         ...FONTS.body3,
//                                         color: (priceRating <= item.restaurant_price) ? COLORS.black : COLORS.darkgray
//                                     }}
//                                 >$</Text>
//                             ))
//                         }
//                     </View>
//                 </View>
//             </TouchableOpacity>
//         )

//         return (
//             <FlatList
//                 data={restaurants}
//                 keyExtractor={(restaurants) => restaurants.restaurant_id}
//                 renderItem={({item})=>{
//                     return <text> {item.restaurant_name}</text>
//                 }
//             }
//                 contentContainerStyle={{
//                     paddingHorizontal: SIZES.padding * 2,
//                     paddingBottom: 30
//                 }}
//             />
//         )
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             {renderHeader()}
//             {renderMainCategories()}
//             {renderRestaurantList()}
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: COLORS.lightGray4
//     },
//     shadow: {
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 3,
//         },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//         elevation: 1,
//     }
// })
// }

export default Home