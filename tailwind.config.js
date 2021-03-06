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
      '350': '350px',

    },
    extend: {
      aspectRatio: {
        '16/9': '16 / 9',
      },
      padding: {
        '5px': '5px',
        '10px': '10px',
      },
      height: {
        '55%': '55%',
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
