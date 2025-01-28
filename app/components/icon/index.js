"use client";
import { hexToRGBA } from '@/app/utils/hex-to-rgba';
import { rgbaToHex } from '@/app/utils/rgba-to-hex';
// ** Icon Imports
import { Icon } from '@iconify/react'
import { Box, Typography } from '@mui/material';

const IconifyIcon = ({ icon, ...rest }) => {
  return <Icon icon={icon} fontSize='1.375rem' {...rest} />
}

export default IconifyIcon


export const IconTag = ({ icon = '', count = 0, color = '#000', className }) => {
  let bgColor = rgbaToHex(hexToRGBA(color, 0.1))
  let IconColor = rgbaToHex(hexToRGBA(color, 0.9))
  return (
    <Box
      bgcolor={bgColor}
      color={IconColor}
      className={`w-16 h-6 m-1 rounded  flex items-center justify-center ${className}`}
    >
      <IconifyIcon
        icon={`tabler:${icon}`}
        className={`text-[14px]`}
      />
      <Typography variant="body2" className="!text-[12px] mt-1 ml-3">
        {count}
      </Typography>
    </Box>
  )
}