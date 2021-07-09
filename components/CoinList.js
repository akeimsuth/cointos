import React from 'react'
import styled from 'styled-components'
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';

const CoinList = ({coinList}) => {
    return (
        <FlatList
        data={coinList}
        renderItem={({item}, index) => 
            <View style={styles.ListContainer}>
                <Image style={{borderRadius:10, width: 40, height: 40}} source={{uri: item.coinImage }}/>
                <View style={styles.textColumn}>
                    <Text style={styles.text}>{item.coinName}</Text>
                    <Text style={styles.text}>{item.coinPrice}</Text>
                </View>
                <View style={styles.textColumn}>
                    <Text style={styles.text}>JMD</Text>
                    <Text style={styles.text}>{item.localPrice}</Text>
                </View>
            </View>
        }
        keyExtractor={item =>item.id}
        />
    )
}

export default CoinList

const styles = StyleSheet.create({
    ListContainer:{
       
        display: 'flex',
        flexDirection: 'row',
        width: 350,
        backgroundColor: "#283747",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20
        
    },
    textColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    text: {
        color: "#AEB6BF",
        paddingLeft: 20,
        fontSize: 13
        
    }
  
  });