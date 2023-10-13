import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, View, Text, Button, FlatList, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MemberStructure from "./MemberStructure";
export default function Member({ data, stage }) {
  const keyExtractor = (item) => item.id.toString();
  return (
    <View className="h-[100%]">
      <View className="flex items-center my-4  m-[20px]">
        <Text className="text-[18px] font-bold ">Member(s)</Text>
        <View className="border-2 max-h-[650px] my-5 p-[15px] rounded-md border-[#CFCFCF] w-full ">
          <View className="items-end">
            <Text
              className="text-[20px]  "
              onPress={() => alert("add members")}
            >
              +
            </Text>
          </View>
          <ScrollView className="w-full">
            <FlatList
              keyExtractor={keyExtractor}
              data={data}
              renderItem={({ item }) => (
                <MemberStructure
                  id={item.id}
                  img={item.img}
                  name={item.name}
                ></MemberStructure>
              )}
            />
          </ScrollView>
        </View>
      </View>
      {stage === "edit" && (
        <View className="absolute bottom-[50px] w-11/12 m-4">
          <TouchableOpacity
            className="flex flex-row w-full  bg-[#BB2727] h-[40px]  rounded-md "
            onPress={() => alert("delete bill")}
          >
            <View className="p-2 justify-center">
              <FontAwesomeIcon
                icon={faTrashAlt}
                color="white"
                size={20}
              ></FontAwesomeIcon>
            </View>
            <Text className="text-center mx-[100px] mt-1 p-2 text-white font-semibold">
              Delete Bill
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
