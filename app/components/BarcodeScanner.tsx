import {Button, StyleSheet, Text, View, SafeAreaView} from "react-native";
import {useState} from "react";
import {BarcodeScanningResult, CameraView, useCameraPermissions} from "expo-camera";
import PermissionButton from "@/app/components/PermissionButton";

interface Props {
    setItems: any;
    style: object;
}

const BarcodeScanner = (props: Props) => {
    const [permission, ] = useCameraPermissions();
    const [displayCamera, setDisplayCamera] = useState(permission?.granted)

    const onCodeScanned = (code: BarcodeScanningResult) => {
        console.log(`Scanned ${code.data}`)
    }


    if (!permission || !permission.granted) {
        // Camera permissions are not granted yet.
        return <PermissionButton/>
    } else if( permission.granted && !displayCamera ) {
        setDisplayCamera(true)
    }

    return (
        <View style={props.style}>
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

export default BarcodeScanner