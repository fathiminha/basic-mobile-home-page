import { StyleSheet, View } from 'react-native';
import { Divider, PaperProvider, Text} from 'react-native-paper';

export default function Home(){
    return(
        <view>
            <Text variant='headlineLarge'> Welcome all </Text>
            <Divider />
            <Text variant='bodyMedium' style={styles.body}> The beauty of nature often lies in its simplicity and interconnectedness. 
                From the gentle rustle of leaves in the wind to the rhythmic ebb and flow of ocean waves, 
                every element contributes to a harmonious symphony. This balance is a reminder of how life thrives in cycles, 
                with every organism playing a crucial role in maintaining equilibrium. 
                Observing such natural wonders not only instills awe but also encourages a deeper appreciation for the fragile 
                ecosystems that sustain us.
                In the ever-evolving landscape of technology, innovation remains the driving force behind progress. The quest for smarter, 
                faster, and more efficient solutions has transformed industries and redefined human potential. 
                From artificial intelligence to renewable energy, groundbreaking advancements are shaping a future where sustainability 
                and convenience coexist. However, this rapid growth also underscores the importance of ethical considerations, 
                ensuring that technology serves humanity without compromising its values. </Text>
        </view>
    )
}

const styles = StyleSheet.create({
    body:{
      padding:9,
      textAlign:'justify',
    }
  
  });
  