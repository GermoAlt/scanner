import {View} from "react-native";

interface Props {
    items: any,
    setItems: any,
    style: object;
}

const ActionBar = (props: Props) => {
    return <View style={props.style}></View>
}

const styles = {

}

export default ActionBar