import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default class App extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <MapView
          style={styles.mapStyle}
          showsUserLocation={false}
          zoomEnabled={true}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: -22.914056,
            longitude: -43.239911,
            latitudeDelta: 0.0043,
            longitudeDelta: 0.0034,
          }}>
          <Marker
            coordinate={{latitude: -22.914056, longitude: -43.239911}}
            title={"Apto Levy's"}
            description={'Devs: Samuel Levy e Paulo Levy'}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
