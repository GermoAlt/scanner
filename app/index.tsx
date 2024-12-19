import {StyleSheet, View} from "react-native";
import BarcodeScanner from "@/app/components/BarcodeScanner"
import ProductList from "@/app/components/ProductList";
import ActionBar from "@/app/components/ActionBar";
import {useState} from "react";

export enum ProductType {
    A= "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    G = "G",
    H = "H",
    I = "I",
    J = "J",
}

export interface Product {
    title: ProductType;
    data: string[];
}

export default function Index() {
    const [items, setItems] = useState<Product[]>([]);
    return (
        <View style={styles.container}>
            <BarcodeScanner style={styles.cameraContainer} setItems={setItems}></BarcodeScanner>
            <ProductList style={styles.listContainer} items={items}></ProductList>
            <ActionBar style={styles.actionBarContainer} items={items} setItems={setItems}></ActionBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "#7f0f0f",
    },
    cameraContainer: {
        backgroundColor: "#0f457f",
        flex: 1,
    },
    listContainer: {
        backgroundColor: "#347f0f",
        flex: 1,
    },
    actionBarContainer: {
        backgroundColor: "#ecda0f",
        flex: 1,
    },
})