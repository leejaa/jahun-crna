/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/no-color-literals */
import React from "react"
import { Modal, Pressable, StyleSheet, Text, View } from "react-native"

interface Props {
  visible: boolean
  onClose: () => void
  onLaunchCamera: () => void
  onLaunchImageLibrary: () => void
}

function UploadModeModal({ visible, onClose, onLaunchCamera, onLaunchImageLibrary }: Props) {
  return (
    <Modal visible={visible} transparent={true} animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.background} onPress={onClose}>
        <View style={styles.whiteBox}>
          <Pressable
            style={styles.actionButton}
            android_ripple={{ color: "#eee" }}
            onPress={() => {
              onLaunchCamera()
              onClose()
            }}
          >
            <Text>카메라로 촬영하기</Text>
          </Pressable>
          <Pressable
            style={styles.actionButton}
            android_ripple={{ color: "#eee" }}
            onPress={() => {
              onLaunchImageLibrary()
              onClose()
            }}
          >
            <Text>사진 선택하기</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  actionButton: {
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
  },
  background: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 16,
  },
  whiteBox: {
    backgroundColor: "white",
    borderRadius: 4,
    elevation: 2,
    width: 300,
  },
})

export default UploadModeModal
