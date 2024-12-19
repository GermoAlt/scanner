import {Button, StyleSheet, Text, View} from "react-native";
import {useState} from "react";
import {BarcodeScanningResult, CameraView, useCameraPermissions} from "expo-camera";

const BScanner = () => {
    const [displayCamera, setDisplayCamera] = useState(false)
    const [permission, requestPermission] = useCameraPermissions();

    const onCodeScanned = (code: BarcodeScanningResult) => {
        console.log(`Scanned ${code.data}`)
    }


    if (!permission || !permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission"/>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {!displayCamera ?
                <View>
                    <Text>s</Text>
                    <Button title={"Scan"} onPress={() => setDisplayCamera(true)}/>
                </View>
                :
                <CameraView
                    style={styles.camera}
                    facing={'back'}
                    barcodeScannerSettings={{
                        barcodeTypes: ['qr'],
                    }}
                    onBarcodeScanned={onCodeScanned}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
    message: {},
    camera: {}
})

export default BScanner