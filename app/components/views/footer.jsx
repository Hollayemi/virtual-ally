import { Box, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import IconifyIcon from "../icon";

const Footer = () => {
    const pages = {
        1: {
            blog: { name: "Home", link: "/" },
            about: { name: "About Us", link: "about" },
            how: { name: "How it Works", link: "how-it-works" },
        },
        2: {
            terms: { name: "Terms", link: "terms?tab=1" },
            policy: { name: "Privacy", link: "terms?tab=0" },
            seller: { name: "Teams", link: "teams" },
        },
        3: {
            terms: { name: "Services", link: "services" },
            seller: { name: "Support", link: "support" },
            report: { name: "Report an Issue", link: "report" },
        },
        4: {
            support: { name: "Customer Support", link: "support" },
            careers: { name: "Careers", link: "careers" },
            legal: { name: "Legal", link: "Legal" },
        },
        5: {
            location: { name: "Ikeja, Lagos" },
            careers: { name: "08139118255" },
            legal: { name: "support@virtually.com" },
        },
    };

    const SetLinks = ({ pages }) => {
        const LinkStyled = styled(Link)(({ theme }) => ({
            fontSize: "0.875rem",
            textDecoration: "none",
            color: theme.palette.primary.main,
        }));
        const keys = Object.keys(pages);
        return Object.values(pages).map((page, i) =>
            page.link ? (
                <LinkStyled
                    key={i}
                    href={`#${page.link}`}
                    sx={{ display: "block" }}
                    color="white"
                    className="px-0 my-4 w-fit !text-[14px] border-b-2 border-black hover:border-amber-600 !text-gray-200"
                >
                    {page.name}
                </LinkStyled>
            ) : (
                <Typography
                    key={i}
                    className="px-0 my-4 w-fit !text-[14px] border-b-2 border-black hover:border-amber-600 !text-gray-200"
                >
                    {page.name}
                </Typography>
            )
        );
    };

    return (
        <Box>
            <Box className="bg-black">
                <Box className="px-8 sm:px-20 md:px-32 lg:px-36 py-10">
                    <Box className="!mb-12 flex flex-col md:flex-row justify-between items-center">
                        <Box className="flex items-center">
                            <Image
                                src={"/images/logo.png"}
                                onClick={() => router.push("/")}
                                alt="logo"
                                width={400}
                                height={400}
                                className="!w-16 ml-1 md:ml-1 !flex-shrink-0 cursor-pointer"
                            />

                            <Image
                                src={"/images/wordmark.png"}
                                onClick={() => router.push("/")}
                                alt="logo"
                                width={400}
                                height={400}
                                className="!w-44 ml-1 md:ml-1 !flex-shrink-0 cursor-pointer"
                            />
                        </Box>
                        <Box>
                            <Typography
                                variant="body2"
                                className="!text-white text-12 !font-bold !mt-5 "
                            >
                                Stay informed with our newsletter
                            </Typography>
                            <Box className="relative">
                                <input
                                    placeholder="Email Address"
                                    className=" pl-2 pr-7 !h-9 w-60 outline-none focus:outline-amber-600 rounded-xl mt-3 !bg-transparent !border !border-gray-800 !text-white"
                                />
                                <IconifyIcon
                                    icon="tabler:arrow-narrow-right"
                                    className="!text-amber-600 absolute top-4 right-2 mt-1"
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={6} sm={4} md={2}>
                                    <SetLinks pages={pages[1]} />
                                </Grid>
                                <Grid item xs={6} sm={4} md={2}>
                                    <SetLinks pages={pages[2]} />
                                </Grid>
                                <Grid item xs={6} sm={4} md={2.5}>
                                    <SetLinks pages={pages[3]} />
                                </Grid>
                                <Grid item xs={6} sm={4} md={2.5}>
                                    <SetLinks pages={pages[4]} />
                                </Grid>
                                <Grid item xs={6} sm={4} md={3}>
                                    <SetLinks pages={pages[5]} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Box className="bg-white h-10 mt-4 w-full flex items-center px-10 !rounded-xl">
                        <Typography className="!text-xs !font-bold">
                            {new Date().getFullYear()} Virtual Ally. All rights
                            reserved
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
