/**
 * Config
 * -------------------------------------------------------------------------------------
 * ! IMPORTANT: Make sure you clear the browser local storage in order to see the config changes in the template.
 * ! To clear local storage, you may refer https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/.
 */
const themeConfig = {
  // ** Layout Configs
  templateName: "Virtual Ally" /* App Name */,
  vertical1: "/images/logo/horizontal/1.png",
  main: "/images/logo/icon/main.png",
  mainWhite: "/images/logo/icon/main.jpg",
  blackLogo: "/images/logo/horizontal/black.png",
  main1_sm: "/images/logo/icon/main1-sm.jpg",
  logo_hor_bw: "/images/logo/horizontal/hor-logo-4.png",
  profile: "/images/avatar/2.png",
  layout: "vertical" /* vertical | horizontal */,
  mode: "light" /* light | dark | semi-dark /*! Note: semi-dark value will only work for Vertical Layout */,
  direction: "ltr" /* ltr | rtl */,
  skin: "bordered" /* default | bordered */,
  contentWidth: "full" /* full | boxed */,
  footer: "hidden" /* fixed | static | hidden */,
  // ** Routing Configs
  routingLoader: true /* true | false */,
  // ** Navigation (Menu) Configs
  navHidden: false /* true | false */,
  menuTextTruncate: false /* true | false */,
  navSubItemIcon: "tabler:circle" /* Icon */,
  verticalNavToggleType:
    "collapse" /* accordion | collapse /*! Note: This is for Vertical navigation menu only */,
  navCollapsed: true /* true | false /*! Note: This is for Vertical navigation menu only */,
  navigationSize: 250 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */,
  collapsedNavigationSize: 82 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */,
  afterVerticalNavMenuContentPosition: "fixed" /* fixed | static */,
  beforeVerticalNavMenuContentPosition: "fixed" /* fixed | static */,
  horizontalMenuToggle:
    "hover" /* click | hover /*! Note: This is for Horizontal navigation menu only */,
  horizontalMenuAnimation: true /* true | false */,
  // ** AppBar Configs
  appBar:
    "static" /* fixed | static | hidden /*! Note: hidden value will only work for Vertical Layout */,
  appBarBlur: true /* true | false */,
  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: false /* true | false */,
  disableCustomizer: true /* true | false */,
  toastPosition:
    "top-right" /* top-left | top-center | top-right | bottom-left | bottom-center | bottom-right */,
};

export default themeConfig
