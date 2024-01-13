import { useMediaQuery, VStack, Flex, Image, Text, Box, Link } from '@chakra-ui/react';
import Nicanor from '../../assets/images/nicanor.png'
import SocialImageLink from './SocialImageLink';
import Resume from '../../assets/docs/resume.pdf'

const Intro = () => {
  const [isTabletOrDesktop] = useMediaQuery('(min-width: 48em)')

  return (
    <Flex justifyContent="space-around" w="100%" minH={window.innerHeight - 100} alignItems="center">
      <VStack maxW={["100%", "50%"]}>
        <Flex flexDir="row" alignSelf="center" width="100%" fontSize="16px" mt={[20, 0]}>
          👋
          &nbsp;
          Hello, I'm
        </Flex>
        <Flex alignItems="left" w="100%">
          <Box fontSize={["35px", "50px"]} marginBlockStart={0} marginBlockEnd={0} fontWeight="800" fontFamily="inter">NICANOR</Box>
          <Box
            fontSize={["35px", "50px"]}
            marginBlockStart={0}
            marginBlockEnd={0}
            fontWeight="800"
            opacity="0.7"
            ml={[2, 6]}
          >
            KORIR
          </Box>
        </Flex>
        <Text pb={6} fontWeight={300}>
          With over 5 years of experience as a senior software engineer, I've built a career on tackling diverse problems across industries like commerce, 
          finance, tech, energy, etc. My passion lies in crafting scalable web applications that empower businesses and connect people. I'm a critical 
          thinker and a creative problem solver, adept at navigating complex technical landscapes and bringing innovative solutions to life. 
          <br /><br />
          But the code isn't the only story. Outside the digital realm, I'm a devoted father and a cycling enthusiast, constantly seeking new ways to challenge 
          myself and experience the world around me. This balance fosters a unique perspective, one that fuels my dedication to excellence both on and off the screen.
        </Text>

        {/* role/title */}
        <Flex flexDir="row" alignSelf="center" pb={4}>
          <Box alignSelf="center" pr={4}>
            <svg width="88" height="8" viewBox="0 0 88 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="88" height="8" rx="4" fill="#E72063"/>
            </svg>
          </Box>
          <Text>Software Engineer</Text>
          <Box alignSelf="center" pl={4}>
            <svg width="79" height="8" viewBox="0 0 79 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="79" height="8" rx="4" fill="#587BF8"/>
            </svg>
          </Box>
        </Flex>

        {/* socials */}
        <Flex flexDir="row" pb={4}>
          <SocialImageLink
            to="https://www.linkedin.com/in/nicanor-korir/"
            image={
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
              </svg>
            }
            text="LinkedIn"
          />
          <SocialImageLink
            to="https://github.com/Nicanor008"
            image={
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            }
            text="Github"
          />
          <SocialImageLink
            to="https://twitter.com/nic__anor"
            image={
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path>
              </svg>
            }
            text="Twitter"
          />
          <SocialImageLink
            to="mailto:nicanorkorir008@gmail.com"
            image={
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            }
            text="Mail"
          />
        </Flex>
        <Link
          href={Resume}
          target="_blank"
          width="100%"
          border="2px solid #9DB1FB"
          borderRadius="50px"
          bg="#587BF8"
          variant="solid"
          colorScheme="white"
          color="white"
          textAlign="center"
          py={1.5}
          _hover={{
            textDecoration: 'none'
          }}
        >
          View Resume
        </Link>
        <Flex pt={2} flexDir="row" alignSelf="center" width="100%" fontSize="16px" mt={[20, 0]}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="currentColor" strokeWidth="2" d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z" />
          </svg>
          &nbsp;
          Nairobi, Kenya
        </Flex>
      </VStack>
      {isTabletOrDesktop && (
        <Image
          src={Nicanor}
          alt="nicanor"
          borderWidth="0px 0.5px 0.5px 0px"
          borderStyle="solid"
          borderColor="#35EC08"
        />
      )}
    </Flex>
  )
}

export default Intro
