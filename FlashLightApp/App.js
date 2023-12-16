import React, { useEffect, useState } from "react";
import { View, Text, AppState } from "react-native";
import { Camera } from "expo-camera";

const App = () => {
  const [isCameraReady, setCameraReady] = useState(false);

  useEffect(() => {
    // Add an event listener to turn off the flashlight when the app is closed
    AppState.addEventListener("change", handleAppStateChange);

    // Clean up the event listener when the component unmounts
    return () => {
      AppState.removeEventListener("change", handleAppStateChange);
    };
  }, []);

  const handleAppStateChange = (nextAppState) => {
    // Turn off the flashlight when the app is closed
    if (nextAppState === "inactive" || nextAppState === "background") {
      turnOffFlashlight();
    }
  };

  const turnOnFlashlight = async () => {
    if (isCameraReady) {
      await Camera.flashModeAsync(Camera.Constants.FlashMode.torch);
    }
  };

  const turnOffFlashlight = async () => {
    if (isCameraReady) {
      await Camera.flashModeAsync(Camera.Constants.FlashMode.off);
    }
  };

  const handleCameraReady = () => {
    setCameraReady(true);
    turnOnFlashlight(); // Turn on the flashlight when the camera is ready
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        onCameraReady={handleCameraReady}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Flashlight App</Text>
          {/* Add your app content here */}
        </View>
      </Camera>
    </View>
  );
};

export default App;
