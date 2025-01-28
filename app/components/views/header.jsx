import React, { useState } from "react";
import { Box, Button, IconButton, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import IconifyIcon from "../icon";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export const Pages = [
    { name: "Home", link: "" },
    { name: "Our services", link: "services" },
    { name: "Our stories", link: "stories" },
    // { name: "Testimonials", link: "testimonials" },
    { name: "Pricing plan", link: "pricing" },
];

export const IconImage = ({ image, className, onClick }) => (
    <Image
        src={`/images/${image}.png`}
        alt="image"
        width={700}
        onClick={onClick}
        height={700}
        className={className}
    />
);

function Header({ sidebar, setSidebar }) {
    
    const router = useRouter();
    const pathname = usePathname();
    const getPath = pathname.split("/");

    const isOffline = true;

    // let holla = "dsdsdfa".
    const theme = useTheme();
    const LinkStyled = styled(Link)(({ theme }) => ({
        fontSize: "0.869rem",
        fontWeight: 500,
        textDecoration: "none",
        // color: "black",
    }));

    return (
        <Box className="!px-2  md:!px-8 py-4 h-16 !bg-pink-100 flex items-center !justify-between header-zindex">
            <Box className="flex items-center mr-1 md:mr-0 !flex-shrink-0">
                <Box className="md:hidden !flex-shrink-0">
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        className="!w-12 !h-12 !text-black !text-[40px]"
                        onClick={() => setSidebar((prev) => !prev)}
                    >
                        {sidebar ? (
                            <IconifyIcon icon="tabler:x" />
                        ) : (
                            <IconifyIcon icon="tabler:menu" />
                        )}
                    </IconButton>
                </Box>
                <Box className="flex items-center">
                    <Image
                        src={"/images/logo.png"}
                        onClick={() => router.push("/")}
                        alt="logo"
                        width={400}
                        height={400}
                        className="!w-8 ml-1 md:ml-1 !flex-shrink-0 cursor-pointer"
                    />

                    <Image
                        src={"/images/wordmark.png"}
                        onClick={() => router.push("/")}
                        alt="logo"
                        width={400}
                        height={400}
                        className="!w-24 md:!w-32 ml-1 md:ml-1 !flex-shrink-0 cursor-pointer"
                    />
                </Box>
            </Box>
            <Box className="items-center hidden md:flex !flex-shrink-0">
                <Box className="items-center md:flex !flex-shrink-0 mr-4">
                    {Pages?.map((page, i) => (
                        <LinkStyled
                            key={i}
                            href={`/${page.link}`}
                            className={`px-1 !mx-2 lg:!mx-4 !font-bold leading-10 ${
                                getPath[1] === page.link
                                    ? "text-amber-800"
                                    : "text-black"
                            } hover:text-amber-800 flex items-center`}
                        >
                            {page.icon && (
                                <IconifyIcon
                                    icon={`tabler:${page.icon}`}
                                    className="mr-3"
                                />
                            )}
                            {page.name}
                        </LinkStyled>
                    ))}
                </Box>
            </Box>
            <Button
                onClick={() => router.push("/#")}
                variant="outlined"
                // startIcon={<IconifyIcon icon="tabler:login" />}
                className=" !text-[12px] !text-black !h-9 w-34 !shadow-none !font-bold !transition-all !duration-300  border-gray-400 bg-gradient-to-r hover:!text-white hover:!from-amber-800 hover:!to-amber-400 "
            >
                Get in touch
            </Button>
        </Box>
    );
}

export default Header;
