import * as Location from 'expo-location'

export const askLocationPermission = async () => {
    const foreGround = await Location.requestForegroundPermissionsAsync();
    const backGround = await Location.requestBackgroundPermissionsAsync();
    if (foreGround.status!=='granted' && backGround.status!=='granted') return false
    return true
}

export const getUserLocation = async () => {
    const hasPermission = await askLocationPermission()
    if (hasPermission) return await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest, timeout:5000})
    return
}