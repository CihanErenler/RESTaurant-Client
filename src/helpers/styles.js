import colors from "./colors";

const customStyles = {
  shadow_1: {
    shadowColor: "#999",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 0.5,
  },

  shadow_2: {
    shadowColor: colors.bg_dark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 0.5,
  },

  shadow_btn: {
    shadowColor: "#999",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
  },
};

export default customStyles;
