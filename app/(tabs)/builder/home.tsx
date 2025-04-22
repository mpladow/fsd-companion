import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { useFactionDataStore } from '@/app/state/useFactionData';
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';
import Animated from 'react-native-reanimated';
import { useRouter } from 'expo-router';

const home = () => {
  const factionData = useFactionDataStore((state) => state.allFactionDetails);
  const router = useRouter();
  const handleOnAddArmyPress = () => {
    router.navigate('/(tabs)/builder/create/formFactionSelect');
  };
  return (
    <View style={{ paddingHorizontal: 12 }}>
      {factionData.length == 0 ? (
        <View>
          <ThemedText type="subtitle">Create an army</ThemedText>
          <Pressable onPress={handleOnAddArmyPress}>
            <ThemedText>Add Army</ThemedText>
          </Pressable>
        </View>
      ) : (
        <View>
          <Pressable onPress={handleOnAddArmyPress}>
            <ThemedText>Add Army</ThemedText>
          </Pressable>
          <Animated.FlatList
            data={factionData}
            renderItem={({ item, index }) => (
              <Pressable style={{ padding: 12, borderColor: 'white', borderWidth: 1 }}>
                <ThemedText>{item.name}</ThemedText>
              </Pressable>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
