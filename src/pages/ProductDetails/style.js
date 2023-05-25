import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    backButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 60,
        width: 24,
        height: 24,
        marginLeft: 30
    },
    boxImage: {
        backgroundColor: "#791ba8",
        height: 0.40 * height,
        borderBottomLeftRadius: 75,
        paddingTop: 40
    },
    image: {
        width: 216,
        height: 220,
        alignSelf: "center",
        resizeMode: "contain"
    },
    boxdetails: {
        flex: 1
    },
    addDecrease: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 195,
        height: 49,
        backgroundColor: "rgba(114, 55, 169, 0.08)",
        borderRadius: 37,
        marginLeft: 105,
        marginTop: 20
    },
    number: {
        color: "#fff",
        textAlign: "center",
        fontSize: 15,
        fontWeight: 500,
        borderRadius: 50,
        width: 24,
        height: 24,
        backgroundColor: "#7237A9",
        marginHorizontal: 20
    },
    starPrice: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: 20
    },
    price: {
        color: "#F37121",
        fontSize: 22,
        fontWeight: "bold"
    },
    description: {
        color: "#7C7C7C",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 21,
        marginHorizontal: 20
    }
})

export default styles