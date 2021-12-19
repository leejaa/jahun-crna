/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/display-name */
/* eslint-disable react-native/no-inline-styles */
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Movies, Tv, Search } from "../screens"
import { useColorScheme } from "react-native"
import { BLACK_COLOR, DARK_GREY, LIGHT_GREY, YELLOW_COLOR } from "../colors"
import { Ionicons } from "@expo/vector-icons"
import { Lang } from "../screens/Lang/Lang"

const Tab = createBottomTabNavigator()

const Tabs = () => {
  const isDark = useColorScheme() === "dark"
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? BLACK_COLOR : "white",
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? BLACK_COLOR : "white",
        },
        tabBarActiveTintColor: isDark ? YELLOW_COLOR : BLACK_COLOR,
        tabBarInactiveTintColor: isDark ? DARK_GREY : LIGHT_GREY,
        headerStyle: {
          backgroundColor: isDark ? BLACK_COLOR : "white",
        },
        headerTitleStyle: {
          color: isDark ? "white" : BLACK_COLOR,
        },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 10,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"film-outline"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="tv-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Lang"
        component={Lang}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"search-outline"} color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"search-outline"} color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  )
}

export default Tabs
