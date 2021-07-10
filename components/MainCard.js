import React, {useState} from 'react'
import styled from 'styled-components'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

const CardContainer = styled.View`
    display: flex;
    padding: 16px;
    width: 100%;
    height: 150px;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    
    color: white;
`;

const Loader = styled.TouchableOpacity`
    position: absolute;
    bottom: -20px;
    right: 30px;
    border-radius: 200px;
    width: 50px;
    height: 50px;
    background-color: #fff;
    justify-content: center;
    align-content: center;
`;
const convertToTwoDecimals = (value) => {
    let money = parseFloat(value).toFixed(2);
    return money
}
const MainCard = () => {
    const [btc, setBtc] = useState();
    var options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        headers: {
          'x-rapidapi-key': '0367e3ee2emsh580b20d7fb15013p151c40jsn70320c457a72',
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        //console.log(response.data.data.coins[0].price);
        setBtc(response.data.data.coins[0].price);
    }).catch(function (error) {
        console.error(error);
    });
    return (
        <CardContainer>
            <Image style={{position: 'absolute', width: 400, height: 150, borderRadius: 20}} source={{uri: "https://static.vecteezy.com/system/resources/previews/000/539/900/non_2x/abstract-gradient-background-vector.jpg"}} />
            <View style={styles.header}>
                <Text style={styles.smallText}>$</Text>
                <Text style={styles.mainText}>{convertToTwoDecimals(btc)}</Text>
                <View style={{opacity:0.8, justifyContent:"flex-end"}}>
                    <Text style={styles.smallText}></Text>
                </View>
            </View>
            <View style={{paddingTop:10}}>
                <Text style={styles.tinyText}>$170.25 (22.1%)</Text>
            </View>
            
                <Loader>
                    <View style={{position:"relative", right: -15}}>
                        <AntDesign name={"sync"} size={22} color={"#808B96"} />
                    </View>
                </Loader>
            
        </CardContainer>
    )
}

export default MainCard
const styles = StyleSheet.create({
    header:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    mainText: {
      color: "#fff",
      fontSize: 30
    },
    smallText: {
        color: "#fff",
        fontSize: 18,
        alignSelf:'flex-end',
    },
    tinyText: {
        color: "#fff",
        fontSize: 12,

    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 200,
        width: 350,
      },
  });