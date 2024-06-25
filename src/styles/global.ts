import { StyleSheet } from 'react-native';

import { COLORS, TYPOGRAPHY } from '~theme';

export const globalStyles = StyleSheet.create({
  // Typography
  headingH1: {
    fontFamily: TYPOGRAPHY.font.bold,
    fontSize: TYPOGRAPHY.size.h1,
  },
  headingH2: {
    fontFamily: TYPOGRAPHY.font.bold,
    fontSize: TYPOGRAPHY.size.h2,
  },
  headingH3: {
    fontFamily: TYPOGRAPHY.font.bold,
    fontSize: TYPOGRAPHY.size.h3,
  },
  headingH4: {
    fontFamily: TYPOGRAPHY.font.bold,
    fontSize: TYPOGRAPHY.size.h4,
  },
  headingH5: {
    fontFamily: TYPOGRAPHY.font.bold,
    fontSize: TYPOGRAPHY.size.h5,
  },
  headingH6: {
    fontFamily: TYPOGRAPHY.font.bold,
    fontSize: TYPOGRAPHY.size.h6,
  },
  paragraph: {
    fontFamily: TYPOGRAPHY.font.regular,
    fontSize: TYPOGRAPHY.size.p,
  },
  paragraphBold: {
    fontFamily: TYPOGRAPHY.font.bold,
    fontSize: TYPOGRAPHY.size.p,
  },
  paragraphSmall: {
    fontFamily: TYPOGRAPHY.font.light,
    fontSize: TYPOGRAPHY.size.small,
  },
  paragraphSmallBold: {
    fontFamily: TYPOGRAPHY.font.bold,
    fontSize: TYPOGRAPHY.size.small,
  },
  paragraphLarge: {
    fontFamily: TYPOGRAPHY.font.regular,
    fontSize: TYPOGRAPHY.size.large,
  },
  paragraphLargeBold: {
    fontFamily: TYPOGRAPHY.font.bold,
    fontSize: TYPOGRAPHY.size.large,
  },
  // Text Colors
  colorWhite: {
    color: COLORS.white,
  },
  colorBlack: {
    color: COLORS.black,
  },
  // Shadows
  cardShadow: {
    shadowColor: COLORS.blue.accent,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
