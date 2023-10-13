import { View, Image, Text } from "react-native";

export default function DataBox({ id, name, price, amount_of_member }) {
  return (
    <View className="flex my-2 flex-row justify-between border-2 p-[15px] rounded-md border-[#CFCFCF]">
      <View className="pt-2">
        <Text>{name}</Text>
      </View>
      <View className=" items-end">
        <Text>฿{price}</Text>
        <Text className="text-[12px] text-gray-600">
          {amount_of_member} Members
        </Text>
      </View>
    </View>
  );
}
