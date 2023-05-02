import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import tw from 'twrnc';

const BusketIcon = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View style={tw`absolute bottom-10 w-full z-50`}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        style={tw`bg-[#00CCBB] mx-5 p-4 rounded-lg items-center gap-1 flex-row`}
      >
        <Text style={tw`text-white font-extrabold text-lg bg-[#01A296] py-1 px-2`}>
          {items.length}
        </Text>
        <Text style={tw`flex-1 text-white font-extrabold text-lg text-center`}>
          View Basket
        </Text>
        <Text style={tw`text-lg text-white font-extrabold`}>
          {basketTotal}$
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BusketIcon;