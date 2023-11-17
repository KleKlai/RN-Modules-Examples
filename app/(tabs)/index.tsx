import { StyleSheet, Image, Platform } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TabOneScreen() {
  const [image, setImage] = useState(null);

  const pickImageController = async () => {
    try {
      // no permission request needed for launching image gallery
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        allowsMultipleSelection: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(
        ` ~ Index.tsx:pickImageController ~ result: ${result.assets[0].fileName}`
      );

      if (!result.canceled) {
        console.log(` ~ Index.tsx:pickImageController ~ logo: canceled`);
        setImage(result.assets[0].uri);
      }
    } catch (err) {

      // Handle close button here
      console.log(` ~ Index.tsx:31 ~ error: ${err}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Selection Library</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TouchableOpacity onPress={pickImageController}>
        <Text>Pick an image from camera roll</Text>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
