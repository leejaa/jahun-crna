import Realm from "realm"
import AppLoading from "expo-app-loading"
import React, { useState } from "react"
import * as Font from "expo-font"
import { Image, useColorScheme } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Asset } from "expo-asset"
import { NavigationContainer } from "@react-navigation/native"
import { QueryClient, QueryClientProvider } from "react-query"
import Root from "./navigation/Root"
import { ThemeProvider } from "styled-components/native"
import { darkTheme, lightTheme } from "./styled"
import { DBContext } from "./context"

const FeelingSchema = {
  name: "Feeling",
  properties: {
    _id: "int",
    emotion: "string",
    message: "string",
  },
  primaryKey: "_id",
}

const queryClient = new QueryClient()

const loadFonts = (
  fonts:
    | string[]
    | {
        [fontFamily: string]: Font.FontSource
      }[],
) => fonts.map((font) => Font.loadAsync(font))

const loadImages = (images: string[] | number[] | string[][] | number[][]) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image)
    } else {
      return Asset.loadAsync(image)
    }
  })

export default function App() {
  const [ready, setReady] = useState(false)
  const [realm, setRealm] = useState(null)

  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font])
    await Promise.all([...fonts])

    // await setTestDeviceIDAsync("EMULATOR");
    const connection = await Realm.open({
      path: "nomadDiaryDB",
      schema: [FeelingSchema],
    })
    setRealm(connection)
  }
  const onFinish = () => setReady(true)

  const isDark = useColorScheme() === "dark"
  if (!ready) {
    return <AppLoading startAsync={startLoading} onFinish={onFinish} onError={console.error} />
  }
  return (
    <QueryClientProvider client={queryClient}>
      <DBContext.Provider value={realm}>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </ThemeProvider>
      </DBContext.Provider>
    </QueryClientProvider>
  )
}
