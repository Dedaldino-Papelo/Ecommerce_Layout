import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 1,
    },

    MoreItems: {
        width: 89,
        height: 85,
        backgroundColor: "#fff",
        elevation: 2,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        width: 70,
        height: 57,
        resizeMode: "contain"
    }

})

export default styles