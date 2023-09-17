import React from "react";
import {
  Image,
  FlatList,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useBooks from "@/hooks/useBooks";
import { Link } from "expo-router";

const Page = () => {
  const { isLoading, data: { items: books = [] } = {} } = useBooks({
    params: { q: "harry potter" },
  });

  return (
    <View className="px-4 bg-white h-full">
      <View>
        <Text className="text-sky-900 font-bold text-xl">
          Explore and find your best Books
        </Text>
      </View>
      <Link asChild href="/search">
        <Pressable className="flex-row mt-6 items-center bg-white shadow-md px-2 py-3 rounded-lg">
          <View>
            <Ionicons name="search-outline" size={18} />
          </View>
          <View className="flex-1 pl-2">
            <Text className="text-gray-500">Search </Text>
          </View>
          <View>
            <Ionicons name="mic-outline" size={18} color="black" />
          </View>
        </Pressable>
      </Link>

      <View className="mt-6">
        <Text className="text-sky-900 font-bold text-xl">Popular Books</Text>
      </View>
      <FlatList
        data={books}
        className=""
        horizontal
        renderItem={({ item }) => (
          <View className="flex mr-4">
            <View className="rounded-lg">
              <Image
                className="rounded-lg"
                source={{ uri: item?.volumeInfo?.imageLinks?.thumbnail }}
                width={150}
                height={200}
              />
            </View>
            {/* <Text>{item?.volumeInfo?.title}</Text> */}
          </View>
        )}
      />
    </View>
  );
};

export default Page;
