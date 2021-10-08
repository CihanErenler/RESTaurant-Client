import React, { useEffect, useState } from 'react'
import { Button, Dimensions, Modal, StyleSheet, Text, TouchableOpacity, SafeAreaView, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Ionicons } from "@expo/vector-icons"
import spacings from '../helpers/spacings'

const ModalMap = ({visible, coordinate, setVisible}) => {
    const [region, setRegion] = useState({latitude: coordinate.latitude, longitude: coordinate.longitude, latitudeDelta: 0, longitudeDelta: 0.1})
    const [mapType, setMapType] = useState('standard')
    const [isMapReady, setIsMapReady] = useState(false)
    const [bottom, setbottom] = useState(0)

    const mapReadyHandler = () => {
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
            <SafeAreaView style={styles.container}>
                <View style={styles.wrap}>
                    <TouchableOpacity style={styles.backbtn}>
                        <Ionicons
                        name="chevron-back"
                        size={24}
                        color="black"
                        onPress={()=>setVisible(false)}
                        />
                    </TouchableOpacity>
                    <View style={styles.mapwrap}>
                        <MapView
                            // bug fix not showing zooming button on MapView
                            onMapReady={mapReadyHandler}
                            style={isMapReady ? {...styles.mapStyle, bottom} : {}}
                            // end bug fix
                            showsUserLocation={true}
                            showsMyLocationButton={true}
                            zoomControlEnabled={true}
                            toolbarEnabled={true}
                            // provider="google"
                            mapType={mapType}
                            region={region}
                        >
                            <Marker coordinate={coordinate} 
                                onPress={markerHandler}
                            />
                        </MapView>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    )
}

export default ModalMap

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    wrap: {
        width: Dimensions.get("window").width - 40,
        alignItems: 'center',
    },

    backbtn: {
        alignSelf: 'flex-start',
        marginBottom: spacings.s8,
        marginTop: Platform.OS === "android" ? spacings.s30 : null,
    },
    mapwrap: {
        width: '100%',
        height: Dimensions.get('window').height - 100,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: spacings.s20
    },
    mapStyle: {
        width: '100%',
        height: '100%'
    }
})
