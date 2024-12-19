import {Button, StyleSheet, Text, View} from "react-native";
import {useCameraPermissions} from "expo-camera";

const PermissionButton = () => {
    const [permission, requestPermission] = useCameraPermissions();

    return <View style={styles.container}>
        <Text style={styles.message}>Necesitamos permiso para usar tu camara.</Text>
        <Button onPress={requestPermission} title="otorgar permiso"/>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
    message: {},
    camera: {}
})

export default PermissionButton;