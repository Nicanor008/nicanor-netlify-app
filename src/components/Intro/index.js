import { useMediaQuery, VStack, Flex, Image, Text, Box, Link } from '@chakra-ui/react';
import Nicanor from '../../assets/images/nicanor.svg'
import Github from '../../assets/images/github.svg'
import GithubLight from '../../assets/images/github-light.svg'
import LinkedIn from '../../assets/images/linkedin.svg'
import LinkedInLight from '../../assets/images/linkedin-light.svg'
import Twitter from '../../assets/images/twitter.svg'
import TwitterLight from '../../assets/images/twitter-light.svg'
import Email from '../../assets/images/email.svg'
import EmailLight from '../../assets/images/email-light.svg'
import SocialImageLink from './SocialImageLink';

const Intro = () => {
  const [isTabletOrDesktop] = useMediaQuery('(min-width: 48em)')

  return (
    <Flex justifyContent="space-around" w="100%" alignItems="center">
      <VStack>
        <Flex flexDir="row" alignSelf="center" width="100%" fontSize="16px">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="none"
              stroke="#000"
              strokeWidth="2"
              d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
            ></path>
          </svg> &nbsp;
          Nairobi, Kenya
        </Flex>
        <Box fontSize={["80px", "100px"]} marginBlockStart={0} marginBlockEnd={0} fontWeight="800" fontFamily="inter" mt="-30px !important">NICANOR</Box>
        <Box
          fontSize={["126px", "156px"]}
          marginBlockStart={0}
          marginBlockEnd={0}
          fontWeight="800"
          mt={["-70px !important", "-100px !important"]}
          opacity="0.6"
        >
          KORIR
        </Box>

        {/* role/title */}
        <Flex flexDir="row" alignSelf="center">
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
        <Flex flexDir="row">
          <SocialImageLink
            to="#"
            imageLight={GithubLight}
            imageDark={Github}
            altText="github"
          />
          <SocialImageLink
            to="#"
            imageLight={LinkedInLight}
            imageDark={LinkedIn}
            altText="LinkedIn"
          />
          <SocialImageLink
            to="#"
            imageLight={TwitterLight}
            imageDark={Twitter}
            altText="Twitter"
          />
          <SocialImageLink
            to="#"
            imageLight={EmailLight}
            imageDark={Email}
            altText="Email"
          />
        </Flex>
      </VStack>
      {isTabletOrDesktop && <Image src={Nicanor} alt="nicanor" />}
    </Flex>
  )
}

export default Intro
