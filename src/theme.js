import { color, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Checkbox: {},
  },

  colors: {
    shopPage: {
      price: "#d60644",
      gray:"rgb(51 51 51 / 65%)",
      button:"#d60644",
      iconHover:"#777"
    },
  },
});

export default theme;
