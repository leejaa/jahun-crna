/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/split-platform-components */
import React, { useCallback, useRef, useState } from "react"
import { ActionSheetIOS, Platform, View } from "react-native"
import { CameraOptions, launchCamera, launchImageLibrary } from "react-native-image-picker"
import { WebView } from "react-native-webview"
import UploadModeModal from "../../components/Modal/Modal"

const imagePickerOption: CameraOptions = {
  mediaType: "photo",
  maxWidth: 768,
  maxHeight: 768,
  includeBase64: Platform.OS === "android",
}

export const WebViewComponent = () => {
  const webviewRef = useRef<WebView>(null)
  const [modalVisible, setModalVisible] = useState(false)

  const onPickImage = (res: any) => {
    const asset = res?.assets?.[0]
    console.log("asset", asset)
  }

  const onLaunchCamera = () => {
    launchCamera(imagePickerOption, onPickImage)
  }

  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOption, onPickImage)
  }

  const handleMessage = useCallback((event) => {
    if (Platform.OS === "android") {
      setModalVisible(true)
      return
    }

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["카메라로 촬영하기", "사진 선택하기", "취소"],
        cancelButtonIndex: 2,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          onLaunchCamera()
        } else if (buttonIndex === 1) {
          onLaunchImageLibrary()
        }
      },
    )
    // webviewRef.current.postMessage("반가워")
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <UploadModeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onLaunchCamera={onLaunchCamera}
        onLaunchImageLibrary={onLaunchImageLibrary}
      />
      <WebView
        ref={webviewRef}
        source={{ uri: "http://172.30.1.32:3000" }}
        onMessage={handleMessage}
      />
    </View>
  )
}
