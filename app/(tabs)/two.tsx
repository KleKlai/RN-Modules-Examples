import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { startActivityAsync, ActivityAction } from "expo-intent-launcher";
import { useEffect } from "react";

export default function TabTwoScreen() {

  useEffect(() => {
    // Open location settings
    startActivityAsync(ActivityAction.LOCATION_SOURCE_SETTINGS);

    console.log(`~ Two.tsx:14 ~ useEffect ~ Opening: location_source_settings`)
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location Settings should open</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
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
