import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import * as Theme from '~theme';

const clouds = require('../../../assets/images/clouds.png');

type Location = {
  name: string;
  country: string;
  region: string;
};
type Current = {
  temp_c: number;
  wind_kph: number;
  humidity: number;
  condition: { text: string; icon: string };
  is_day: 1 | 0;
};
type WeatherCardProps = {
  data: {
    location: Location;
    current: Current;
  };
  isLoading: boolean;
  isError: boolean;
};
const WeatherCard = ({ data, isLoading, isError }: WeatherCardProps) => {
  const [isDay, setIsDay] = useState<boolean | null>(null);
  useEffect(() => {
    if (data) {
      setIsDay(data.current.is_day === 1);
    }
  }, [data]);
  // TODO: Take this fonts to an upper layer to make these accesyble to other components
  const [fontLoaded] = useFonts({
    'Sono-Bold': require('../../../assets/fonts/Sono-Bold.ttf'),
    'Sono-Regular': require('../../../assets/fonts/Sono-Regular.ttf'),
    'Sono-Ligth': require('../../../assets/fonts/Sono-Light.ttf'),
  });
  if (!fontLoaded) {
    return null;
  }
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <LinearGradient
        colors={isDay ? Theme.COLORS.gradient.day : Theme.COLORS.gradient.night}
        style={styles.gradient}>
        <View style={styles.header}>
          <View>
            <Text
              style={[
                styles.fontBold,
                styles.headingH1,
                isDay ? styles.textBlack : styles.textWhite,
              ]}>
              {!isLoading && !isError ? data?.location?.name : 'Loading...'}
            </Text>
            <Text
              style={[
                styles.fontLight,
                styles.textSmall,
                isDay ? styles.textBlack : styles.textWhite,
              ]}>
              {!isLoading && !isError ? data?.location?.region : 'Loading...'}
            </Text>
            <Text
              style={[
                styles.fontLight,
                styles.textSmall,
                isDay ? styles.textBlack : styles.textWhite,
              ]}>
              {!isLoading && !isError ? data?.location?.country : 'Loading...'}
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.fontBold,
                styles.textBig,
                isDay ? styles.textBlack : styles.textWhite,
              ]}>
              {!isLoading && !isError ? Math.trunc(data?.current?.temp_c) : 0}°
            </Text>
          </View>
        </View>
        <View style={styles.icon}>
          {!isLoading ? (
            <Image
              style={{ width: 64, height: 64 }}
              source={{ uri: `https:${data?.current?.condition?.icon}` }}
            />
          ) : (
            <ActivityIndicator />
          )}

          <Text
            style={[
              styles.fontBold,
              styles.textSmall,
              isDay ? styles.textBlack : styles.textWhite,
            ]}>
            {!isLoading && !isError ? data?.current?.condition?.text : `Can't find the city`}
          </Text>
        </View>
        <ImageBackground source={clouds} style={styles.footer}>
          <View style={styles.footerLeft}>
            <Text style={[styles.fontBold, styles.headingH3]}>
              {`${!isLoading && !isError ? data?.current?.wind_kph : 0} kph`}
            </Text>
            <Text style={[styles.fontLight, styles.textSmall]}>Wind</Text>
          </View>
          <View style={styles.footerRight}>
            <Text
              style={[
                styles.fontBold,
                styles.headingH3,
              ]}>{`${!isLoading && !isError ? data?.current?.humidity : 0}%`}</Text>
            <Text style={[styles.fontLight, styles.textSmall]}>Humidity</Text>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.COLORS.white,
    borderRadius: 16,
    flex: 1,
    width: '100%',
  },
  shadowProp: {
    shadowColor: Theme.COLORS.blue.accent,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderRadius: 16,
  },
  backgroundImageContainer: {
    flex: 1,
  },
  backgroundImage: {
    borderWidth: 1,
    flex: 1,
    resizeMode: 'contain',
    borderColor: 'red',
    height: 200,
  },
  fontBold: {
    fontFamily: 'Sono-Bold',
  },
  fontLight: {
    fontFamily: 'Sono-Ligth',
  },
  fontRegular: {
    fontFamily: 'Sono-Regular',
  },
  headingH1: {
    fontSize: 32,
  },
  headingH3: {
    fontSize: 19,
  },
  textSmall: {
    fontSize: 12,
  },
  textBig: {
    fontSize: 48,
  },
  textWhite: {
    color: Theme.COLORS.white,
  },
  textBlack: {
    color: Theme.COLORS.black,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    flexWrap: 'wrap',
    gap: 6,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    flex: 1,
  },
  iconImage: {
    width: 64,
    height: 64,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 64,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  footerLeft: {
    alignItems: 'flex-start',
  },
  footerRight: {
    alignItems: 'flex-end',
  },
});
