import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const CategoryCard = ({title, imgUrl}) => {
  return (
    <TouchableOpacity style={tw`relative mr-2`}>
      <Image source={{uri: imgUrl}}
        style={tw`h-20 w-20 rounded`}/>    
      <Text style={tw`absolute bottom-1 left-1 text-white font-bold`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard