import {DefaultTheme} from "./default-theme";

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
      background: `#000000 url(${__dirname}/content/assets/images/intellrobotslab_icon.png) 100% 100% no-repeat;`
    },
  },
};

export default Theme;
