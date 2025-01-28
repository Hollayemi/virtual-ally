// ** MUI Imports
import MuiChip from '@mui/material/Chip'

// ** Third Party Imports
import clsx from 'clsx'

// ** Hooks Imports
import useBgColor from '@/app/hooks/useBgColor'

const Chip = props => {
  // ** Props
  const { sx, skin, color, rounded, className } = props;

  // ** Hook
  const bgColors = useBgColor()

  const colors = {
    primary: { ...bgColors.deepblue },
    secondary: { ...bgColors.yellow },
    success: { ...bgColors.successLight },
    active: { ...bgColors.successLight },
    error: { ...bgColors.errorLight },
    warning: { ...bgColors.warningLight },
    info: { ...bgColors.infoLight },
    hidden: { ...bgColors.infoLight }
  }
  const propsToPass = { ...props }
  propsToPass.rounded = undefined
  return (
    <MuiChip
      {...propsToPass}
      variant="filled"
      className={
        (clsx({
          "MuiChip-rounded": rounded,
          "MuiChip-light": skin === "light",
        }),
        className)
      }
      sx={skin === "light" && color ? Object.assign(colors[color], sx) : sx}
    />
  );
}

export default Chip
