import React, { useState, useEffect } from 'react';
import { Text, View, Button, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

// Text: Mostrar Texto 
// View: Contenedor 
// Button: Es Un Button 
// ScrollView: Podemos Dar Scroll
// TouchableOpacity: Es Un Button PERO LA VENTAJA ES QUE PODEMOS EDITARLO PARA NUESTRO GUSTO 
// StyleSheet: DAR ESTILO A MI PAGINA WEB 

// useState: ES EL ESTADO DE UNA APLICACION 
// useEffect: SOLO EJECUTA UNA SOLA VES, SIRVE PARA EFECTOS YA TAMBIEN CONSUMIR UNA API, Y AY DEPENDECIA QUE SE TRATA ESCUCHAR Y HACER EL TRABAJO DE NUEVO 

// Audio: ES UN PAQUETE QUE TE  DA FUNCIONES PARA QUE CREES TU APLICACIONES DE MUSICAS 
export const styles = StyleSheet.create({
    input: {
        height: 50,
        color: "#fff",
        width: "80%",
        marginBottom: 25,
        backgroundColor: "#1e3040",
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#1e3040"
    },
    btnText: {
        fontSize: 18
    },
    errorInput: {
        borderColor: '#940c0c'
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    contadorText: {
        textAlign: 'center',
        fontSize: 40,
        top: -15
    },
    BotonMas: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    BotonMasText: {
         color: 'white',
         fontSize: 25,
         fontWeight: 'bold',
         alignSelf: 'center'
    },
    BotonMasLocation: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    BotonMasLocationMenos: {
        position: 'absolute',
        bottom: 25,
        left: 25
    },
    contenedores: {
        position: 'relative',
        bottom: 25,
        left: 25,
        top: 123
    },
    Button: {
        width: 160,
        height: 60,
        bottom: -5,
        paddingHorizontal: 20,
        left: 25,
        marginHorizontal: 189,
    },
    Buttoness: {
        width: 160,
        height: 60,
        bottom: -5,
        paddingHorizontal: 20,
        left: 25,
        marginHorizontal: 189,
    },
    Buttones: {
        width: 160,
        height: 60,
        bottom: -5,
        paddingHorizontal: 20,
        left: 25,
        marginHorizontal: 189,
    },
    Butones: {
        width: 160,
        height: 60,
        bottom: -5,
        paddingHorizontal: 20,
        left: 25,
        marginHorizontal: 189,
    },
    Botones: {
        width: 160,
        height: 60,
        bottom: -5,
        paddingHorizontal: 20,
        left: 25,
        marginHorizontal: 189,
    },
    Bottones: {
        width: 160,
        height: 60,
        bottom: -5,
        paddingHorizontal: 20,
        left: 25,
        marginHorizontal: 189,
    },
    Botton: {
        width: 160,
        height: 60,
        bottom: -5,
        paddingHorizontal: 20,
        left: 25,
        marginHorizontal: 189,
    },
    Bootones: {
        width: 160,
        height: 60,
        bottom: -5,
        paddingHorizontal: 20,
        left: 25,
        marginHorizontal: 189,
    },
    Boottones: {
        width: 160,
        height: 60,
        bottom: -5,
        paddingHorizontal: 20,
        left: 25,
        marginHorizontal: 189,
    },
    Boottoness:{
         width: 160,
        height: 60,
        bottom: -5,
        paddingHorizontal: 20,
        left: 25,
        marginHorizontal: 189,
    },
    Textos: {
        fontSize: 24,

    },
  


})

const Musicas = () => {


    const [sound, setSound] = useState();


    async function AmoresdeMercado() {
        const { sound } = await Audio.Sound.createAsync(
            require('../Audio/AmoresdeMercado.mp3')
        )
        setSound(sound);
        await sound.playAsync();
    }

    async function CómoMirarte() {
        const { sound } = await Audio.Sound.createAsync(
            require('../Audio/CómoMirarte.mp3')
        )
        setSound(sound);
        await sound.playAsync();
    }



    async function AmoresdeMercado4() {
        const { sound } = await Audio.Sound.createAsync(
            require('../Audio/AmoresdeMercado4.mp3')
        )
        setSound(sound);
        await sound.playAsync();
    }



    async function TeEncontré() {
        const { sound } = await Audio.Sound.createAsync(
            require('../Audio/TeEncontré.mp3')
        )
        setSound(sound);
        await sound.playAsync();
    }

    async function UnAño() {
        const { sound } = await Audio.Sound.createAsync(
            require('../Audio/UnAño.mp3')
        )
        setSound(sound);
        await sound.playAsync();
    }



    async function Traicionera() {
        const { sound } = await Audio.Sound.createAsync(
            require('../Audio/Traicionera.mp3')
        )
        setSound(sound);
        await sound.playAsync();
    }

    async function AlexanderBlas() {
        const { sound } = await Audio.Sound.createAsync(
            require('../Audio/AlexanderBlas.mp3')
        )
        setSound(sound);
        await sound.playAsync();
    }

    async function DevuélvemeELCorazón() {
        const { sound } = await Audio.Sound.createAsync(
            require('../Audio/DevuélvemeELCorazón.mp3')
        )
        setSound(sound);
        await sound.playAsync();
    }


    async function Mayores() {
        const { sound } = await Audio.Sound.createAsync(
            require('../Audio/Mayores.mp3')
        )
        setSound(sound);
        await sound.playAsync();
    }


    
async function Cristina() {
  const { sound } = await Audio.Sound.createAsync(
    require('../Audio/Cristina.mp3')
  )
  setSound(sound);
  await sound.playAsync();
}
    async function SinPijama() {
        const { sound } = await Audio.Sound.createAsync(
            require('../Audio/SinPijama.mp3')
        )
        setSound(sound);
        await sound.playAsync();
    }
    async function YaMeEntere() {
        const { sound } = await Audio.Sound.createAsync(
            require('../Audio/YaMeEntere.mp3')
        )
        setSound(sound);
        await sound.playAsync()
    }



    useEffect(() => {
        return sound
            ? () => {

                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);


    return (
        <ScrollView>
            <Text></Text>
            <Text style={styles.Textos}>Escucha Las Mejores canciones </Text>

            <Text></Text>


            <View style={styles.Butones}>

                <TouchableOpacity>
                    <Button title='Play' onPress={AlexanderBlas} color="red" />
                </TouchableOpacity>

            </View>

            <View style={styles.Botones}>
                <TouchableOpacity>
                    <Button title='Play' onPress={DevuélvemeELCorazón} color="yellow" />
                </TouchableOpacity>


            </View>

            <View style={styles.Bottones}>

                <TouchableOpacity>
                    <Button title='Play' onPress={SinPijama} color="blue" />
                </TouchableOpacity>
            </View>

            <View style={styles.Botton}>

                <TouchableOpacity> 
                    <Button title='Play' onPress={YaMeEntere} color="green" />
                </TouchableOpacity>

            </View>








            <View style={styles.Boottoness}>
                <TouchableOpacity>
                    <Button title='Play' onPress={Mayores} color="black" />
                </TouchableOpacity>
            </View>



            <View style={styles.Boottoness}>
                <TouchableOpacity>
                    <Button title='Play' onPress={UnAño} color="orange" />
                </TouchableOpacity>
            </View>


            <View style={styles.Boottoness}>
                <TouchableOpacity>
                    <Button title='Play' onPress={AmoresdeMercado4} color="green" />
                </TouchableOpacity>
            </View>


            <View style={styles.Boottoness}>
                <TouchableOpacity>
                    <Button title='Play' onPress={TeEncontré} color="gray" />
                </TouchableOpacity>
            </View>


            <View style={styles.Boottoness}>
                <TouchableOpacity>
                    <Button title='Play' onPress={Traicionera} color="purple" />
                </TouchableOpacity>
            </View>












            <View style={styles.Boottoness}>
                <TouchableOpacity>
                    <Button title='Play' onPress={AmoresdeMercado} color="green"/>
                </TouchableOpacity>
            </View>




            <View style={styles.Boottoness}>
                <TouchableOpacity>
                    <Button title='Play' onPress={CómoMirarte} color="silver" />
                </TouchableOpacity>
            </View>



            <View style={styles.Boottoness}>
                <TouchableOpacity>
                    <Button title='Play' onPress={Cristina} color="silver" />
                </TouchableOpacity>
            </View>

            












        




        </ScrollView>
    )
}

export default Musicas
