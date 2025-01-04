import { StyleSheet,View } from "react-native";
import { Divider,Button, Text, TextInput} from 'react-native-paper';

export default function ContactUs(){
    return(
        <>
            <View style={styles.header}>
                <Text variant='headlineLarge'> Contact us </Text>
                <Divider />
            </View>
            <View style={styles.body}>
                <View>
                  <TextInput label="Name" mode="outlined" />
                </View>
                <View>
                 <TextInput label="Email" mode="outlined" keyboardType="email-address" />
                </View> 
                <View>
                 <TextInput label="Phone Number" mode="outlined" keyboardType="phone-pad" />
                </View> 
                <View>
                 <TextInput label="Message" mode="outlined" multiline numberOfLines={5} />
                </View> 
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
        alignItems:"center",
        padding:10,
        marginBottom:10
    },
    body:{
        flex:5,
        width:"100%"
    },
    footer:{
        flex:2,
        width:"100%"
    },
    input:{
        padding:8,
        marginBottom:7
    }
})