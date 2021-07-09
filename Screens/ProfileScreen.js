import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import WalletAddresses from '../components/WalletAddresses';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
        {/* <Text style={{color:"white"}}>Profile</Text> */}
        <ProfileCard/>
        <WalletAddresses/>
      </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 100,
      backgroundColor: '#150833',
      alignItems: 'center',
      
    },
  });