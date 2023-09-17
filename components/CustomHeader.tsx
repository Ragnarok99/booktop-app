import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import BottomSheet from "@/components/BottomSheet";

import Colors from "@/constants/Colors";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const CustomHeader = () => {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <SafeAreaView className="mt-8">
      <View className="items-start px-4 py-6 justify-between flex-row gap-3">
        <View className="flex flex-row items-center flex-1">
          <TouchableOpacity className="pr-2" onPress={handlePresentModalPress}>
            <View className="border-2 border-amber-900 rounded-full p-[2px]">
              <Image
                source={require("@/assets/images/avatar.png")}
                className="rounded-full w-[40px] h-[40px]"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1">
            <Text className="text-gray-500 text-xs">Welcome 👋</Text>
            <View className="flex-row items-center gap-1">
              <Text className="text-gray-700 text-base font-bold">
                Hi, Ragnarok!
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="p-2 bg-gray-100 rounded-lg">
          <Ionicons
            size={20}
            color={Colors.light.tabIconSelected}
            name="notifications-outline"
          />
        </TouchableOpacity>
      </View>

      <BottomSheet ref={bottomSheetModalRef} />
    </SafeAreaView>
  );
};

export default CustomHeader;
