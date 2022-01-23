import React, { useCallback, useRef, useState } from "react"
import { WebView } from "react-native-webview"

export const WebViewComponent = () => {
  const webviewRef = useRef()
  const handleMessage = useCallback((event) => {
    console.log(event.nativeEvent)
    ;(webviewRef.current as any).postMessage("반가워")
  }, [])
  return (
    <WebView
      ref={webviewRef}
      source={{ uri: "http://172.30.1.32:3000" }}
      onMessage={handleMessage}
    />
  )
}
