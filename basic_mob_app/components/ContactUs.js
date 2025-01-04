import { StyleSheet } from "react-native"
import { View } from "react-native-web"
import { Divider,Button, Text} from 'react-native-paper';


export default function ContactUs(){
    return(
        <>
            <View style={styles.header}>
                <Text variant='headlineLarge'> Contact us </Text>
                <Divider />
            </View>
            <View style={styles.body}>
                
            </View>
            <View style={styles.footer}>
                <Text> 2024 </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        flex:3,
        width:"100%",
        alignItems:"center"
    },
    body:{
        flex:5,
        width:"100%",
        alignItems:"center"
    },
    footer:{
        flex:2,
        width:"100%",
        alignItems:"center"
    }
})