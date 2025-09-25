import { useRouter } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"

export const MovieNotFound = () => {
   const router = useRouter()
   return (
      <View className="flex-1 items-center justify-center bg-gray-50">
         <Text className="text-xl text-gray-600">Filme não encontrado</Text>

         <TouchableOpacity
            onPress={() => router.back()}
            className="mt-4 bg-blue-600 px-6 py-3 rounded-lg">
            <Text className="text-white font-medium">Voltar</Text>
         </TouchableOpacity>
      </View>
   )
}