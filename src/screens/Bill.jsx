import { Image, View, Text, Button, FlatList, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DataBox from "../components/DataBox";
const Data = [
  {
    id: 1,
    name: "Bill 01",
    price: 169,
    amount_of_member: 2,
  },
  {
    id: 2,
    name: "Bill 02",
    price: 129,
    amount_of_member: 3,
  },
];

export default function Bill({ route, navigation }) {
  const keyExtractor = (item) => item.id.toString();
  return (
    <View className="my-2 m-[30px] h-full">
      <ScrollView className="w-full">
        <FlatList
          keyExtractor={keyExtractor}
          data={Data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("BillSummary", { id: item.id });
              }}
            >
              <DataBox
                id={item.id}
                name={item.name}
                price={item.price}
                amount_of_member={item.amount_of_member}
              ></DataBox>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
}
