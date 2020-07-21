import {DefaultTheme} from "@nehalist/gatsby-theme-nehalem/src/styles/default-theme";
var backgroundUrl = require('../../../../content/assets/images/actros.png');


const Theme: DefaultTheme = {
  layout: {
    backgroundColor: `#fff`,
    primaryColor: `#393636`,
    linkColor: `#a4cbb8`,
  },
  breakpoints: {
    xs: `425px`,
    sm: `576px`,
    md: `768px`,
    lg: `992px`,
    xl: `1300px`,
  },
  fonts: {
    base: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, ` +
      `Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  components: {
    container: {
      width: `1260px`,
    },
    header: {
      height: `370px`,
      //background: `linear-gradient(-45deg, #761e6d, #e61a0c) repeat scroll 0 0 transparent`,
      background: `#ffffff url(${ backgroundUrl }) 50% 30%/52% no-repeat`,
    },
  },
};

export default Theme;
