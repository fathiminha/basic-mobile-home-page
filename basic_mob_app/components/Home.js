import { StyleSheet } from 'react-native';
import { Divider,Button, Text} from 'react-native-paper';

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
                ensuring that technology serves humanity without compromising its values. 
                Traveling opens the door to new experiences, cultures, and perspectives, 
                offering a unique chance to step outside the familiar and embrace the unknown. 
                Whether it's exploring bustling city streets, hiking through serene mountain trails, 
                or immersing oneself in local traditions, each journey leaves an indelible mark on the soul. 
                Beyond the sights and sounds, travel fosters personal growth, teaching resilience, adaptability, 
                and a deeper understanding of the world and its diversity.
            </Text>
            <Button icon='camera' mode='contained' onPress={()=> console.log('Pressed')}>
                Press me
            </Button>
        </view>
    )
}

const styles = StyleSheet.create({
    body:{
      padding:9,
      textAlign:'justify',
    }
  
  });
  