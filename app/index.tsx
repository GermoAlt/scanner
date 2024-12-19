import {StyleSheet, View} from "react-native";
import BScanner from "@/app/components/BScanner"
import ProductList from "@/app/components/ProductList";
import ActionBar from "@/app/components/ActionBar";
import {useState} from "react";

export default function Index() {
    const [items, setItems] = useState([]);
    return (
        <View style={styles.container}>
            <BScanner setItems={setItems}></BScanner>
            <ProductList items={items}></ProductList>
            <ActionBar items={items} setItems={setItems}></ActionBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7f0f0f",
    }
})