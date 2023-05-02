import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native";
import {  MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    shortDescription,
    dishes,
    long,
    lat,
}) => {
    
const navigation = useNavigation();

return (
        <TouchableOpacity
        onPress={() => {
            navigation.navigate("Restaurant", {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            shortDescription,
            dishes,
            long,
            lat,
            });
        }}
        style={tw`bg-white mr-3 shadow`}
        >
        <Image
            source={{
            uri:  urlFor(imgUrl).url(),
            }}
            style={tw`h-36 w-64 rounded-sm`}
        />
        <View style={tw`px-3 pb-4`}>
            <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
            <View style={tw`flex-row items-center gap-1`}>
            <StarIcon color="green" opacity={0.5} size={22} />
            <Text style={`text-xs text-gray-500`}>
                <Text style={`text-green-500`}>{rating}</Text> · {genre}
            </Text>
            </View>

            <View style={`flex-row items-center gap-1`}>
            <MapPinIcon color="gray" opacity={0.4} size={22} />
            <Text style={tw`text-xs text-gray-500`}>Nearby · {address}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
};

export default RestaurantCard;