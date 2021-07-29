import React, { useEffect } from 'react';
import { container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/core';

import BarberLogo from'../../assets/barber.svg';

export default () => {

    const navigation = useNavigation();

    useEffect(()=> {
        const checkToken = await asyncStorage.getItem('token');
        if(token !== null){

        } else {
            navigation.navigate('SignIn');
        }
        checkToken();
    }, []);


    return(
        <container>
            <BarberLogo width = "100%" heigth="160"/>
            <LoadingIcon size="large" color="#FFFFFF"/>
        </container>
    );
}