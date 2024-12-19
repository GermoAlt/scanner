import {View, SectionList, SectionListRenderItem} from "react-native";
import {Product} from "@/app";

interface Props {
    items: Product[]
    style: object;
}

const ProductList= (props: Props) => {

    const renderItem: SectionListRenderItem<string, Product> = () => {
        return <View></View>
    }

    return <View style={props.style}>
        <SectionList sections={props.items}
                     renderItem={renderItem}
        />
    </View>
}

export default ProductList