import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import MapView, { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function TabOneScreen() {
  const [location, setLocation] = useState<any>();
  const [errorMsg, setErrorMsg] = useState<string>();

  // You can make it dynamic by using Expo Location
  const [mapRegion, setMapRegion] = useState({
    latitude: 7.151153,  
    longitude: 125.599511,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Example of Map View</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>
        <MapView 
        region={mapRegion}
        zoomEnabled
        zoomTapEnabled
        minZoomLevel={18}
        style={{ width: '100%', height: '100%'}}>
          <Marker coordinate={mapRegion} title='Marker'/>
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
