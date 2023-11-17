import { StyleSheet, ScrollView } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import * as Device from "expo-device";
import { useEffect } from "react";

export default function TabTwoScreen() {
  useEffect(() => {
    async function getDeviceInfo (): Promise<string[]> {
      console.log(await Device.getPlatformFeaturesAsync());
    }

    getDeviceInfo()
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device Information</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.description}>
        Example of Device Information getter using Expo Device Library
      </Text>
      <ScrollView>
        <View style={styles.ItemContainer}>
          <Text style={[styles.item, { fontSize: 18, paddingTop: 15 }]}>
            Type
          </Text>
          <Text style={[styles.item, { fontSize: 18, paddingTop: 15 }]}>
            Value
          </Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Text style={styles.item}>Brand</Text>
          <Text style={styles.item}>{Device.brand}</Text>

          <Text style={styles.item}>Design Name</Text>
          <Text style={styles.item}>{Device.designName}</Text>

          <Text style={styles.item}>Name</Text>
          <Text style={styles.item}>{Device.deviceName}</Text>

          <Text style={styles.item}>Type</Text>
          <Text style={styles.item}>{Device.deviceType}</Text>

          <Text style={styles.item}>Year Class</Text>
          <Text style={styles.item}>{Device.deviceYearClass}</Text>

          <Text style={styles.item}>Manufacturer</Text>
          <Text style={styles.item}>{Device.manufacturer}</Text>

          <Text style={styles.item}>Model ID</Text>
          <Text style={styles.item}>
            {Device.modelId === null ? "-" : Device.modelId}
          </Text>

          <Text style={styles.item}>OS Build Fingerprint</Text>
          <Text style={styles.item}>{Device.osBuildFingerprint}</Text>

          <Text style={styles.item}>OS Build ID</Text>
          <Text style={styles.item}>{Device.osBuildId}</Text>

          <Text style={styles.item}>OS Internal Build</Text>
          <Text style={styles.item}>{Device.osInternalBuildId}</Text>

          <Text style={styles.item}>OS Name</Text>
          <Text style={styles.item}>{Device.osName}</Text>

          <Text style={styles.item}>OS Version</Text>
          <Text style={styles.item}>{Device.osVersion}</Text>

          <Text style={styles.item}>Platform API Level</Text>
          <Text style={styles.item}>{Device.platformApiLevel}</Text>

          <Text style={styles.item}>Product Namel</Text>
          <Text style={styles.item}>{Device.productName}</Text>

          <Text style={styles.item}>Platform API Level</Text>
          <Text style={styles.item}>{Device.platformApiLevel}</Text>

          <Text style={styles.item}>CPU Architecture</Text>
          <Text style={styles.item}>{Device.supportedCpuArchitectures}</Text>

          <Text style={styles.item}>Total Memory</Text>
          <Text style={styles.item}>{Device.totalMemory}</Text>
        </View>
      </ScrollView>
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
  ItemContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center", // if you want to fill rows left to right
  },
  item: {
    textAlign: "center",
    width: "50%", // is 50% of container width
    padding: 3,
  },
  description: {
    fontSize: 15,
    fontWeight: "400",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
