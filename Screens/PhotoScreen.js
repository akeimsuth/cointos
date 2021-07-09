import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Share } from 'react-native';

const PhotoScreen = () => {
    const onSharePress = (amount = "0.00") => {
        let shareOptions = {
          title: 'Title',
          message: `Amount: ${amount}\n Address: jfdjhsh787878hhHJHJHh`, // Note that according to the documentation at least one of "message" or "url" fields is required
          url: 'www.example.com',
          subject: 'Subject'
        };
        Share.share(shareOptions);
    }

    return (
        <p>Test</p>
    )
}

export default PhotoScreen
