import { View, Text } from "react-native";
import React from "react";

import useBooks from "@/hooks/useBooks";
import { useSearchStore } from "@/stores/search";
import { REACT_QUERY_KEYS } from "@/constants";

const Search = () => {
  const { query } = useSearchStore();
  const { data, isLoading } = useBooks({
    prefix: REACT_QUERY_KEYS.SEARCH,
    params: { q: query },
  });

  console.log("query", query);

  //   console.log("isLoading", isLoading);
  return (
    <View>
      {data?.items?.map((item) => (
        <Text key={item?.volumeInfo?.title}>{item?.volumeInfo?.title}</Text>
      ))}
    </View>
  );
};

export default Search;
