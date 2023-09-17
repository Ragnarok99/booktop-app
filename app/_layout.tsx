import { Stack } from "expo-router";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CustomHeader from "@/components/CustomHeader";
import SearchHeader from "@/components/search-header";

// Create a client

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

const queryClient = new QueryClient();

export default function RootLayoutNav() {
  return (
    <QueryClientProvider client={queryClient}>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              header: () => <CustomHeader />,
            }}
          />
          <Stack.Screen
            name="search"
            options={{
              header: () => <SearchHeader />,
            }}
          />
        </Stack>
      </BottomSheetModalProvider>
    </QueryClientProvider>
  );
}
