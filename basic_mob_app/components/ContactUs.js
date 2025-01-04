import { useState } from "react";
import { StyleSheet,View } from "react-native";
import { Divider,Button, Text, TextInput} from 'react-native-paper';

export default function ContactUs(){
    const [name, setName] = useState(0);
    return(
        <>
            <View style={styles.header}>
                <Text variant='headlineLarge'> Contact us </Text>
                <Divider />
            </View>
            <View style={styles.body}>
                <Text variant='bodyMedium' style={styles.body}>   
                We'd love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out. Our team is here to help and ensure you have the best experience possible.
                 Let's connect!
                </Text>
                <View style={styles.input}>
                  <TextInput label="Name" mode="outlined" value={name} onChangeText={setName} />
                </View>
                <View style={styles.input}>
                 <TextInput label="Email" mode="outlined" keyboardType="email-address" />
                </View> 
                <View style={styles.input}>
                 <TextInput label="Phone Number" mode="outlined" keyboardType="phone-pad" />
                </View> 
                <View style={styles.input}>
                 <TextInput label="Message" mode="outlined" multiline numberOfLines={5} />
                </View>
                <View>
                 <Button mode="contained"> Contact us</Button>
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