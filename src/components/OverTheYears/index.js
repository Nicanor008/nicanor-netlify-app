import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import SkillsCompany from "../../assets/images/skills-company.svg"

const OverTheYears = () => (
    <Flex bg="#587BF8" color="black" minH="100vh" pb={5} alignItems="center">
        <Flex flexDir='column' mx={["2rem", "6rem"]}>
            <Heading as="h3">Over the years,</Heading>
            <Text>
            I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.

working at Sovtech, thesn sdfdsf....
            </Text>
        </Flex>
        <Image src={SkillsCompany} alt="skills company" />
    </Flex>
)

export default OverTheYears
