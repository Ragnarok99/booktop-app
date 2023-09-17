import React from "react";
import { Text } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const BottomSheet = React.forwardRef<BottomSheetModal>((props, ref) => {
  const snapPoints = React.useMemo(() => ["50%"], []);
  return (
    <BottomSheetModal ref={ref} snapPoints={snapPoints}>
      <Text>BottomSheet</Text>
    </BottomSheetModal>
  );
});

export default BottomSheet;
