import { View, Text, Button, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {

    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCategories] = useState([])

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "featured"] {..., restaurants[]->{..., dishes[]->}}`)
        .then((data) => {
            setFeaturedCategories(data);
        })
        .catch((err) => {
            console.log("Err at Home Page:", err);
        });
    }, []);    

return (
    <SafeAreaView style={tw`bg-white pt-5`}>
            {/* Header */}
            <View style={tw`flex-row pb-3 gap-2 items-center mx-4`}>
                <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU'}}
                    style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}/>
                <View style={tw`flex-1`}>
                    <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now</Text>
                    <Text style={tw`font-bold text-xl`}>
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB"/>
                    </Text>
                </View>
                <UserIcon size={30} color="#00CCBB"/>
            </View>

            {/* Search */}
            <View style={tw`flex-row items-center gap-2 pb-2 mx-4`}>
                <View style={tw`flex-row items-center gap-2 flex-1 bg-gray-200 p-2`}>
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput
                    placeholder="Restaurants and cuisine"
                    keyboardType="default"
                />
                </View>
                <AdjustmentsVerticalIcon color="#00CCBB" size={24}/>
            </View>

            {/* Body */}
            <ScrollView style={tw`bg-gray-100`}>
                {/* Categories */}
                <Categories />
                {/* Featured rows */}
                {featuredCategories.map((category, index) => (
                    <FeaturedRow 
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}
            </ScrollView>

    </SafeAreaView>
)
}

export default HomeScreen