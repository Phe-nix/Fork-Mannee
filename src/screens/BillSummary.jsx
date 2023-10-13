import { Image, View, Text, Button, FlatList, ScrollView } from "react-native";
import Member from "../components/Member";
import MainNavigation from "../router/MainNavigation";
const MemberData = [
  {
    id: 1,
    img: "https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs",
    name: "user 01",
    price: 169,
    amount_of_member: 2,
  },
  {
    id: 2,
    img: "https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs",
    name: "user 02",
    price: 129,
    amount_of_member: 3,
  },
];
export default function BillSummary({ route }) {
  const { id } = route.params;
  return (
    <View className="w-full">
      <View className="my-5">
        <Member data={MemberData} stage="add"></Member>
      </View>

      <View className=" w-full absolute  bottom-5">
        <View className="flex flex-row  border-2 m-5 p-4 rounded-md justify-between">
          <Text className=" text-[16px]">Total</Text>
          <Text className=" text-[16px]">1987 ฿</Text>
        </View>

        <View className="flex flex-row border-2 mx-5 p-4 justify-between rounded-md bg-black">
          <Text className="text-white text-[16px]">You need to pay</Text>
          <Text className="text-white text-[16px]">150 ฿</Text>
        </View>
      </View>
      <MainNavigation />
    </View>
  );
}
