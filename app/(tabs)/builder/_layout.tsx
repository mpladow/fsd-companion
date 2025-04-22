import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useFactionDataStore } from '@/app/state/useFactionData';

const BuilderLayout = () => {
  const fetchData = useFactionDataStore((state) => state.setFactionsFromApi);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default BuilderLayout;

const styles = StyleSheet.create({});
