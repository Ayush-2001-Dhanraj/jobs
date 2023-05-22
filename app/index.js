import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";

import {
  Nearbyjobs,
  ScreenHeaderBtn,
  Popularjobs,
  Welcome,
} from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => {
            return <ScreenHeaderBtn iconUrl={icons.menu} dimentions="60%" />;
          },
          headerRight: () => {
            return (
              <ScreenHeaderBtn iconUrl={images.profile} dimentions="100%" />
            );
          },
          headerTitle: "",
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ padding: SIZES.medium }}
      >
        <View style={{ flex: 1 }}>
          <Welcome />
        </View>
        <Popularjobs />
        <Nearbyjobs />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
