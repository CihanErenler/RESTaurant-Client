import React, { useEffect, useState } from 'react'
import { Button, Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Ionicons } from "@expo/vector-icons"
import spacings from '../helpers/spacings'

const ModalMap = ({visible, coordinate, setVisible}) => {
    const [region, setRegion] = useState({latitude: coordinate.latitude, longitude: coordinate.longitude, latitudeDelta: 0, longitudeDelta: 0.1})
    const [mapType, setMapType] = useState('standard')
    const [isMapReady, setIsMapReady] = useState(false)
    const [bottom, setbottom] = useState(0)

    const mapReadyHandler = () => {
        // setIsMapReady(false)
        setIsMapReady(true)
    }
    
    const markerHandler = () => {
        setbottom(-1)
    }

    useEffect(() => {
        if (bottom === -1) return setbottom(0)
    }, [bottom])

    return (
        <Modal visible={visible} coordinate={coordinate} setVisible={setVisible}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backbtn}>
                    <Ionicons
                    name="chevron-back"
                    size={24}
                    color="black"
                    onPress={()=>setVisible(false)}
                    />
                </TouchableOpacity>
                <MapView
                    // bug fix not showing zooming button on MapView
                    onMapReady={mapReadyHandler}
                    style={isMapReady ? {...styles.mapStyle, bottom} : {}}
                    // end bug fix
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    zoomControlEnabled={true}
                    toolbarEnabled={true}
                    provider="google"
                    mapType={mapType}
                    region={region}
                >
                    <Marker coordinate={coordinate} 
                        onPress={markerHandler}
                    />
                </MapView>
            </View>
        </Modal>
    )
}

export default ModalMap

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: spacings.s10,
        alignItems: 'center'
    },
    backbtn: {
        alignSelf: 'flex-start',
        marginBottom: spacings.s8,
    },
    mapStyle: {
        // width: '100%',
        width: Dimensions.get('window').width - 40,
        // height: 320,
        height: '90%'
    }
})
