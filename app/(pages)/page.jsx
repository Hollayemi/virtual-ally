import { Box, Button, Typography } from "@mui/material";
import HomeWrapper from "../components/views";
import Image from "next/image";
import {
    CounterTag,
    growSteps,
    guaranteed,
    services,
    UserRating,
} from "./component";
import IconifyIcon from "../components/icon";

const Home = () => {
    return (
        <HomeWrapper>
            <Box className="!bg-pink-100 px-3">
                <Box className="md:h-[600px] lg:h-[80vh] lg:min-h-[80vh] flex flex-col-reverse md:flex-row justify-center py-6">
                    <Box className="w-full md:w-3/5">
                        <Typography className="!text-2xl md:!text-4xl !w-11/12 md:!leading-[50px] !mt-6 md:!mt-4">
                            Virtual Assistant Services at Your Fingertips!
                        </Typography>
                        <Typography className="!text-md md:!w-11/12 !leading-6 !mt-4">
                            Our virtual assistants are highly skilled
                            professionals who can handle all your administrativ,
                            technical and creative needs
                        </Typography>
                        <Button
                            variant="contained"
                            className="!bg-black !text-white !h-10 !w-44 !shadow-none !outline-none !rounded-md !mt-8"
                        >
                            Request a consult
                        </Button>
                        <Box className="!px-3 md:!px-0">
                            <Box className="bg-white rounded-md md:max-w-[500px] mt-16">
                                <Box className="flex justify-between border-b p-4">
                                    <CounterTag
                                        icon="users-group"
                                        stat="64,590"
                                        tag="Happy Customers"
                                    />
                                    <CounterTag
                                        icon="star-filled"
                                        stat="4.8/5"
                                        tag="Average Services"
                                    />
                                </Box>
                                <Box className="p-4">
                                    <Typography className="!text-sm !mb-3">
                                        Our virtual assistants are highly
                                        skilled professionals who can handle all
                                        your administrativ, technical and
                                        creative needs
                                    </Typography>
                                    <UserRating
                                        image="/images/logo.png"
                                        name="Victory"
                                        from="Edo State, Nigeria."
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="w-full md:w-2/5 md:!max-w-[400px] h-full rounded-xl overflow-hidden">
                        <Image
                            src="/images/callcenter.jpg"
                            alt="image"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                    </Box>
                </Box>
            </Box>
            <Box className="px-3 md:px-5">
                <Box className="flex flex-col md:flex-row justify-center py-6">
                    <Box className="w-full md:w-1/2 p-2">
                        <Typography className="!text-2xl md:!text-4xl !w-11/12 !leading-8 md:!leading-[50px] !mt-4">
                            Reliable, <br /> Resourceful, and <br /> Ready to
                            Assist
                        </Typography>
                        <Typography className="!text-[14px] md:!w-8/12 !leading-6 !mt-4">
                            Our virtual assistants are highly skilled
                            professionals who can handle all your administrativ,
                            technical and creative needs
                        </Typography>

                        <Box className="flex justify-between p-4 w-8/12 mt-4 md:mt-12">
                            <CounterTag stat="6K+" tag="Satisfy Clients" />
                            <CounterTag stat="64" tag="VA experts" />
                        </Box>
                    </Box>
                    <Box className="w-full md:w-1/2 !max-w-[400px] h-full rounded-xl overflow-hidden mt-6">
                        {guaranteed.map((each, i) => (
                            <Box
                                key={i}
                                className="w-fit border py-4 px-6 rounded-full mb-4"
                            >
                                {each}
                            </Box>
                        ))}
                    </Box>
                </Box>
                <hr />
                <Box className="flex flex-col md:flex-row justify-evenly items-center py-6">
                    <Box className="w-full md:w-3/5 p-2">
                        <Typography className="!text-2xl md:!text-4xl md:!w-8/12 md:!leading-[50px] !mt-4">
                            How We Can Make Your Business Grow
                        </Typography>
                        <Typography className="!text-md md:!w-8/12 !leading-6 !mt-4">
                            Our virtual assistants are highly skilled
                            professionals who can handle all your administrativ,
                            technical and creative needs
                        </Typography>
                    </Box>
                    <Box className="mt-3 md:mt-0 md:w-2/5 max-w-[400px] ">
                        <Box className="p-4 bg-gray-200 rounded">
                            <Typography className="!text-sm !mb-3">
                                Our virtual assistants are highly skilled
                                professionals who can handle all your
                                administrativ, technical and creative needs
                            </Typography>
                            <UserRating
                                image="/images/logo.png"
                                name="Victory"
                                from="Edo State, Nigeria."
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className="md:px-3 flex flex-col md:flex-row justify-center">
                    {growSteps.map((each, i) => (
                        <Box key={i} className="w-full md:w-1/3  px-5 mb-3">
                            <Box className="rounded-md  p-5 bg-green-50">
                                <Typography className="!font-bold">
                                    Step {i + 1}
                                </Typography>
                                <Typography className="!mt-8 !text-[16px] !font-bold">
                                    {each.title}
                                </Typography>
                                <Typography className="!text-[14px]">
                                    {each.note}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                <Box className="rounded-xl bg-gray-200 py-5 px-3 mt-16">
                    <Box className="text-center">
                        <Typography className="!text-2xl md:!text-4xl md:!leading-[50px] !mt-4">
                            Uncover Our Virtual Assistant Services
                        </Typography>
                        <Typography className="!text-[13px] !mb-3">
                            Supechange your productivity with our virtuall
                            assistant services, providing the boost you need for
                            professional success
                        </Typography>
                    </Box>

                    <Box className="flex flex-col md:flex-row justify-evenly px:2 md:px-6 my-12">
                        <Box className="w-full md:w-2/5 md:!max-w-[400px] md:h-[550px] rounded-xl relative overflow-hidden">
                            <Image
                                src="/images/callcenter2.jpg"
                                alt="image"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                            <Box className="w-full h-full z-20 bg-black opacity-30 absolute top-0"></Box>
                            <Box className="absolute h-full w-full flex flex-col justify-center items-center top-0 z-50">
                                <Typography className="!text-[15px] !font-bold  !text-center !text-white ">
                                    Virtual Ally Professional <br /> Services
                                </Typography>
                                <Button
                                    variant="contained"
                                    className="!bg-black !text-white h-9 !w-44 !shadow-none !outline-none !rounded-md !mt-8"
                                >
                                    Request a consult
                                </Button>
                            </Box>
                        </Box>
                        <Box className=" mt-4 w-full md:w-3/5 md:flex flex-wrap justify-center">
                            {services.map((each, i) => (
                                <Box
                                    key={i}
                                    className="px-4 w-full md:w-80 py-2 bg-white rounded-xl mb-2 md:m-1.5 flex items-center relative"
                                >
                                    <IconifyIcon
                                        icon={`tabler:${each.icon}`}
                                        className="mr-4 text-3xl shrink-0"
                                    />
                                    <Box>
                                        <Typography className="!text-[14px] !mb-1 !font-bold">
                                            {each.title}
                                        </Typography>
                                        <Typography className="!text-[12px] !w-10/12">
                                            {each.note}
                                        </Typography>
                                    </Box>
                                    <IconifyIcon
                                        icon={`tabler:arrow-narrow-right`}
                                        className="mr-4 text-2xl absolute right-1"
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </HomeWrapper>
    );
};

export default Home;
