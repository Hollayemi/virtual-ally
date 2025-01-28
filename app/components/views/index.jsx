"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Header, { Pages } from "./header";
import Footer from "./footer";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HomeWrapper = ({ children, className = "" }) => {
    const pathname = usePathname();
    const getPath = pathname.split("/");
    const [sidebar, setSidebar] = useState(false);
    const LinkStyled = styled(Link)(({ theme }) => ({
        fontSize: "0.869rem",
        fontWeight: 500,
        textDecoration: "none",
        // color: "black",
    }));
    return (
        <Box className="relative">
            <Box className="sticky z-50 top-0 w-full">
                <Header sidebar={sidebar} setSidebar={setSidebar} />
                <Box
                    className={`${
                        sidebar ? "h-52" : "h-0"
                    } transition-all bg-white duration-300 relative overflow-hidden shadow`}
                >
                    <Box className="p-5">
                        {Pages?.map((page, i) => (
                            <LinkStyled
                                key={i}
                                href={`/${page.link}`}
                                className={`px-1 !mx-2 lg:!mx-4 !font-bold leading-10 ${
                                    getPath[1] === page.link
                                        ? "text-amber-800"
                                        : "text-black"
                                } hover:text-amber-800 flex items-center !font-bold bg-gradient-to-r from-amber-500 via-amber-800 to-amber-500 bg-clip-text text-transparent`}
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
            </Box>
            <Box className={`mb-16 ${className}`}>{children}</Box>
            <Footer />
        </Box>
    );
};

export default HomeWrapper;
