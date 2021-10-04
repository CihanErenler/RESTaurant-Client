import React, { useState } from 'react'
import { Button, Dimensions, Modal, StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const ModalMap = ({visible, coordinate, setVisible}) => {
    const [region, setRegion] = useState({latitude: coordinate.latitude, longitude: coordinate.longitude, latitudeDelta: 0, longitudeDelta: 0.1})
    const [mapType, setMapType] = useState('standard')

    return (
        <Modal visible={visible} coordinate={coordinate} setVisible={setVisible}>
            <View style={styles.container}>
                <MapView style={styles.mapStyle}
                    provider="google"
                    mapType={mapType}
                    region={region}
                >
                    <Marker coordinate={coordinate} />
                </MapView>
                <Button title='Go Back' onPress={()=>setVisible(false)} />
            </View>
        </Modal>
    )
}

export default ModalMap

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapStyle: {
        width: Dimensions.get('window').width - 40,
        height: 320
    }
})
