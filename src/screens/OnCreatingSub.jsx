import { Image, View, Text, Button, FlatList, ScrollView, TextInput } from "react-native";
import ImagePickerExample from "../components/ImgPicker";


export default function OnCreatingSub({ navigation }) {
    return (
        <View className="flex flex-col items-center mx-4 my-4 h-[88%]">
            <View className="border-[0.25px] rounded-xl w-full h-[30%] p-4">
                <View className="flex flex-row justify-between">
                    <ImagePickerExample />
                    <View className="flex flex-row items-center">
                        <Text className="mx-2">฿</Text>
                        <TextInput placeholder="0.00" className="border-[0.25px] p-2 rounded-lg w-28 h-6" />
                    </View>
                </View>
                <View className="mt-3 border-t-[0.25px] flex flex-row justify-between items-center py-3">
                    <Text>Name</Text>
                    <TextInput placeholder="Enter Name" className="p-2 rounded-lg w-28 h-6 ml-2" />
                </View>
            </View>
            <View>
                <Text>Members</Text>
            </View>
        </View>
    );
}