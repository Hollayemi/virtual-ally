/* eslint-disable react/display-name */
// ** React Imports
import { forwardRef } from 'react'

// ** MUI Imports
import MuiAvatar from '@mui/material/Avatar'
import { lighten, useTheme } from '@mui/material/styles'

// ** Hooks Imports
import useBgColor from '@/app/hooks/useBgColor'

const CustomAvatar = forwardRef((props, ref) => {
  // ** Props
  const { sx, src, skin, color } = props

  // ** Hook
  const theme = useTheme()
  const bgColors = useBgColor()

  const getAvatarStyles = (skin, skinColor) => {
    let avatarStyles
    if (skin === 'light') {
      avatarStyles = { ...bgColors[`${skinColor}Light`] }
    } else if (skin === 'light-static') {
      avatarStyles = {
        color: bgColors[`${skinColor}Light`]?.color,
        backgroundColor: lighten(theme.palette[skinColor]?.main, 0.88)
      }
    } else {
      avatarStyles = { ...bgColors[`${skinColor}Filled`] }
    }

    return avatarStyles
  }

  const colors = {
    primary: getAvatarStyles(skin, 'primary'),
    secondary: getAvatarStyles(skin, 'secondary'),
    success: getAvatarStyles(skin, 'success'),
    error: getAvatarStyles(skin, 'error'),
    warning: getAvatarStyles(skin, 'warning'),
    info: getAvatarStyles(skin, 'info'),
    pink: getAvatarStyles(skin, 'pink')
  }

  return <MuiAvatar ref={ref} {...props} name='kjlk' sx={!src && skin && color ? Object.assign(colors[color], sx) : sx} />
})
CustomAvatar.defaultProps = {
  skin: "filled",
  color: "primary",
};

export default CustomAvatar;
