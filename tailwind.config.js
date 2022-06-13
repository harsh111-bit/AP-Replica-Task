module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    maxWidth: {
      '140': '140px',
      '896': '896px',

    },
    extend: {
      aspectRatio: {
        '16/9': '16 / 9',
      },
      width: {
        '33': '33%',
        '30': '30%',
      },
    },
    screens: {
      'tab': '768px',
      'laptop': '1024px',
      'desk': '1280px',
    },
  },
  variants: {},
  plugins: [],
}
