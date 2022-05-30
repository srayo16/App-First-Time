import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Country from './Country';

export default function Countries() {

    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setSearch(data);
                setCountries(data)
            });
    }, [])

    const onChangeNumber = text => {
        const filtering = countries.filter(country => country.name.common.toLowerCase().includes(text.toLowerCase()))
        setSearch(filtering);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Countries: {countries.length}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                placeholder="search name"
            />
            <ScrollView>
                {
                    search.map(country => <Country key={country.name.common} country={country}></Country>)
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        fontSize: 40,
        color: 'red',
        fontWeight: 'bold'

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        width: 250,
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
    },

})