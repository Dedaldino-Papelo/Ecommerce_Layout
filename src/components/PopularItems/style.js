import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },

    items: {
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "space-around",
        elevation: 5,
        width: 163,
        height: 200,
        marginBottom: 5,
        paddingTop: 20,
        paddingLeft: 24,
        paddingRight: 25,
        paddingBottom: 25,
        borderRadius: 15
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: "#7C7C7C",
        marginTop: 25
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    },
    price: {
        color: "#F37121",
        fontSize: 16,
        fontWeight: "bold",

    }
})

export default styles