import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginHorizontal: 32,
        marginTop: 50,
        justifyContent: "space-between",
        alignItems: "center",
    },
    menu: {
        width: 39,
        height: 36.46,
        borderColor: "#111",
        background: "#FFFFFF", 
        justifyContent: "center",
        alignItems: "center",
        elevation: 0.3,
        borderRadius: 0.3
        
    },
    
    image: {
        backgroundColor: "#fff",
    },
    avatar: {
        width: 42,
        height: 42,
        borderRadius: 35
    }

})

export default styles