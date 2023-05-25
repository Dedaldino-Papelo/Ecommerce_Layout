import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    TotalSeparator: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 15
    },
    total: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    prodTitle: {
        fontWeight: 500,
        color: "#7C7C7C",
        fontSize: 22,  
    },
    textTotal: {
        fontSize: 18,
        color: "#7C7C7C",
        fontWeight: "500"
    },
    TotalPrice: {
        fontSize: 16,
        fontWeight: "500",
        color: "#7C7C7C"
    }
})

export default styles