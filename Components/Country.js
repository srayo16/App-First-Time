import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Country({ country }) {
    return (
        <View style={styles.container}>
            <Text style={styles.forFont}> Country Name: {country.name.common}</Text>
            <Image
                source={{
                    uri: country.flags.png,
                }}
                style={{ width: 200, height: 200 }}
            ></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    forFont: {
        marginBottom: 10,
        fontSize: 20
    }
});

