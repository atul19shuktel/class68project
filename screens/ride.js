
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Ride extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text} >search for a ride</Text>
            </View>
        )
    }
    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#420420',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:24,
    }
})