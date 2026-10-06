import { Stack } from 'expo-router';
import { useFonts } from '@expo-google-fonts/poppins';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins: require('@expo-google-fonts/poppins/400Regular/Poppins_400Regular.ttf'),
    PoppinsSemiBold: require('@expo-google-fonts/poppins/600SemiBold/Poppins_600SemiBold.ttf'),
    PoppinsBold: require('@expo-google-fonts/poppins/700Bold/Poppins_700Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
        backgroundColor: '#24113D',
        },
        headerTintColor: '#6c5083',
        headerTitleStyle: {
          fontFamily: 'PoppinsBold',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Atividade Prática',
        }}
      />
    </Stack>
  );
}