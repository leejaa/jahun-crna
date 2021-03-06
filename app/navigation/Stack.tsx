import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Detail } from "../screens/Detail/Detail"
import { BLACK_COLOR } from "../colors"
import { useColorScheme } from "react-native"
import { Write } from "../screens"

const NativeStack = createNativeStackNavigator()

const Stack = () => {
  const isDark = useColorScheme() === "dark"
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: isDark ? BLACK_COLOR : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : BLACK_COLOR,
        },
      }}
    >
      <NativeStack.Screen name="Detail" component={Detail} />
      <NativeStack.Screen name="Write" component={Write} />
    </NativeStack.Navigator>
  )
}

export default Stack
