import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const CreateArmyStack = () => {
  return (
    <Stack>
      <Stack.Screen name="formFactionSelect" />
      <Stack.Screen name="formArmyDetails" />
    </Stack>
  );
};

export default CreateArmyStack;

const styles = StyleSheet.create({});
