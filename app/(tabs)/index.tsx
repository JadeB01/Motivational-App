import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';


export default function HomeScreen() {
  const motivations = [
    {
      quote: "Believe you can and you're halfway there.",
      image: require('../../assets/images/sunset1.jpg'),
    },
    {
      quote: "Success is the sum of small efforts repeated day in and day out.",
      image: require('../../assets/images/sunset2.jpg'),
    },
    {
      quote: "Progress, not perfection.",
      image: require('../../assets/images/sunset3.jpg'),
    },
    {
      quote: "Dream big and dare to fail.",
      image: require('../../assets/images/sunset4.jpg'),
    },
    {
      quote: "The future depends on what you do today.",
      image: require('@/assets/images/sunset5.jpg'),
    },
  ];

  const [currentMotivation, setCurrentMotivation] =
    useState(motivations[0]);

  function getRandomQuote() {
    const randomIndex =
      Math.floor(Math.random() * motivations.length);

    setCurrentMotivation(motivations[randomIndex]);
  }

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
      }}>
        Daily Motivation
      </Text>

      <Image
        source={currentMotivation.image}
        style={styles.image}
      />

      <Text style={{
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
      }}>
        {currentMotivation.quote}
      </Text>

      <Button
        title="New Quote"
        onPress={getRandomQuote}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  quote: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },

  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});