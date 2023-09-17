import React from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSearchStore } from "@/stores/search";

const SearchHeader = () => {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  const { setQuery } = useSearchStore();
  const searchRef = React.useRef<any>(null);

  const handleSearch = (text: string) => {
    setSearch(text);

    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }

    searchRef.current = setTimeout(() => {
      setQuery(text);
    }, 2000);
  };

  return (
    <SafeAreaView className="mt-8 bg-white">
      <View className="px-4 py-6">
        <View className="flex flex-row items-center gap-4">
          <TouchableOpacity
            onPress={() => router.back()}
            className="shadow-md bg-white rounded-full p-1"
          >
            <Ionicons name="arrow-back-outline" size={24} />
          </TouchableOpacity>
          <View className="flex-row flex-1 items-center bg-white shadow-md px-2 py-3 rounded-lg">
            <View>
              <Ionicons name="search-outline" size={18} />
            </View>
            <TextInput
              value={search}
              onChangeText={handleSearch}
              placeholder="Search"
              className="flex-1 pl-2"
            />
            {/* <View>
              <Ionicons name="mic-outline" size={18} color="black" />
            </View> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchHeader;
