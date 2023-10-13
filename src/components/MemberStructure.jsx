import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Image, Text, TouchableOpacity } from "react-native";
export default function MemberStructure({ id, img, name }) {
  return (
    <View className="flex flex-row w-full justify-between  my-2  border-2 p-[10px] rounded-md border-[#CFCFCF]">
      <View className="flex flex-row">
        <Image className="h-10 w-10 rounded-full" source={{ uri: img }} />
        <Text className="p-3">{name}</Text>
      </View>

      <TouchableOpacity
        className="flex flex-row m-2"
        onPress={() => alert(`delete member ${id} `)}
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          color="red"
          size={20}
        ></FontAwesomeIcon>
      </TouchableOpacity>
    </View>
  );
}
