import React from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";
import { images } from "../constants/images";

interface TabIconProps {
  focused: boolean;
  icon: ImageSourcePropType | undefined;
  title: string;
}

const TabIcon = ({ focused, icon, title }: TabIconProps) => {
  return focused ? (
    <View className="flex-1 items-center justify-center">
      <ImageBackground
        source={images.highlight}
        resizeMode="cover"
        className="flex flex-row items-center justify-center min-w-[112px] min-h-16 rounded-full"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    </View>
  ) : (
    <View className="flex-1 items-center justify-center">
      <Image source={icon} className="size-5" tintColor="#A8B5DB" />
    </View>
  );
};

export default TabIcon;
