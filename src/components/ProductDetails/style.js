import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxImage: {
        backgroundColor: "#791ba8",
        height: 0.40 * height,
        borderBottomLeftRadius: 75
    },
    boxdetails: {
        flex: 1

    }
})

export default styles