import { Box, Typography } from "@mui/material";
import IconifyIcon from "../components/icon";
import Image from "next/image";

export const CounterTag = ({ icon, stat, tag }) => {
    return (
        <Box className="flex items-center justify-center">
            <IconifyIcon icon={`tabler:${icon}`} className="mr-2 text-2xl" />
            <Box>
                <Typography className="text-md">{stat}</Typography>
                <Typography className="text-md">{tag}</Typography>
            </Box>
        </Box>
    );
};

export const UserRating = ({ image, name, from }) => {
    return (
        <Box className="flex items-center">
            <Image
                src={image}
                alt="image"
                width={500}
                height={500}
                className="w-8 h-8 rounded-md mr-2"
            />
            <Box>
                <Typography className="!text-[12px] font-bold leading-4">
                    {name}
                </Typography>
                <Typography className="!text-[11px] leading-3">
                    {from}
                </Typography>
            </Box>
        </Box>
    );
};

export const guaranteed = [
    "Innovative Working Activies",
    "100% Guarantee Issued for Clients",
    "Dedicated Team Member",
    "Safe & Secure Environment",
];

export const growSteps = [
    {
        title: "Defining Your Dream Assistant",
        note: "Tell us about your dream assistant - what skills, traits, and abilities do you envision?",
    },
    {
        title: "Meet and approve your Assistant",
        note: "Tell us about your dream assistant - what skills, traits, and abilities do you envision?",
    },
    {
        title: "Launch and track with precision",
        note: "Tell us about your dream assistant - what skills, traits, and abilities do you envision?",
    },
];

export const services = [
    {
        title: "Administrative Support",
        note: "Tell us about your dream assistant - what skills, traits, and abilities do you envision?",
        icon: "lifebuoy",
    },
    {
        title: "Team Management and Recruitment",
        note: "Tell us about your dream assistant - what skills, traits, and abilities do you envision?",
        icon: "brand-teams",
    },
    {
        title: "Customer Service and Support",
        note: "Tell us about your dream assistant - what skills, traits, and abilities do you envision?",
        icon: "headset",
    },
    {
        title: "Travel Arrangement",
        note: "Tell us about your dream assistant - what skills, traits, and abilities do you envision?",
        icon: "route",
    },
    {
        title: "Project Management",
        note: "Tell us about your dream assistant - what skills, traits, and abilities do you envision?",
        icon: "user-screen",
    },
    {
        title: "Research Analysis",
        note: "Tell us about your dream assistant - what skills, traits, and abilities do you envision?",
        icon: "presentation-analytics",
    },
    {
        title: "Communication Management",
        note: "Tell us about your dream assistant - what skills, traits, and abilities do you envision?",
        icon: "messages",
    },
    {
        title: "Transcribing",
        note: "Tell us about your dream assistant - what skills, traits, and abilities do you envision?",
        icon: "receipt",
    },
    {
        title: "CV Writing",
        note: "Tell us about your dream assistant - what skills, traits, and abilities do you envision?",
        icon: "file-cv",
    },
    {
        title: "LinkedIn Optimization",
        note: "Tell us about your dream assistant - what skills, traits, and abilities do you envision?",
        icon: "brand-linkedin",
    },
    // {
    //     title: "Career Support",
    //     note: "Tell us about your dream assistant - what skills, traits, and abilities do you envision?",
    //     icon: "backpack",
    // },
];
