import { Text, View, Image } from 'react-native'

export default function DetailSubscription({ navigation, route }) {
    console.log(route.params);
    const { name, price, img, color, firstbill, cycle, daytopay } = route.params;
    return (
        <View className="flex flex-col w-full bg-white h-full">
            <View className="flex flex-row items-center justify-between mx-8 my-5">
                <Image className="h-20 w-20 rounded-full" source={{ uri: img }} />
                <Text className="text-4xl font-medium">฿ {price}</Text>
            </View>
            <View className="flex flex-row items-center justify-between mx-8">
                <Text className="text-xl font-light">First Bill</Text>
                <Text className="text-xl font-light">{firstbill}</Text>
            </View>
            <View className="flex flex-col items-center my-10 pt-7 gap-2">
                <Text className="text-4xl">Next bill in</Text>
                <Text className="text-7xl">{daytopay}</Text>
                <Text className="text-4xl">Days</Text>
            </View>
        </View>
    );
}