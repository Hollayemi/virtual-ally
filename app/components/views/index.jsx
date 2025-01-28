"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";

const HomeWrapper = ({ children, className = "" }) => {
    const [sidebar, setSidebar] = useState(false);
    return (
        <Box>
            <Header sidebar={sidebar} setSidebar={setSidebar} />
            <Box className={`mb-16 ${className}`}>{children}</Box>
            <Footer />
        </Box>
    );
};

export default HomeWrapper;
