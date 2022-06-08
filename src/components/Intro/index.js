import { useMediaQuery, VStack, Flex, Image, Text, Box } from '@chakra-ui/react';
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
import { GetDarkLightMode } from '../../helpers/getDarkLightMode';

const Intro = () => {
  const [isTabletOrDesktop] = useMediaQuery('(min-width: 48em)')
  const activeColor = GetDarkLightMode()

  return (
    <Flex justifyContent="space-around" w="100%" alignItems="center">
      <VStack>
        <Flex flexDir="row" alignSelf="center" width="100%" fontSize="16px">
          {activeColor === 'dark' ? (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3986 5.9809C11.7806 5.9809 11.1764 6.15684 10.6625 6.48649C10.1486 6.81613 9.74803 7.28467 9.51151 7.83285C9.27499 8.38102 9.2131 8.98422 9.33368 9.56617C9.45426 10.1481 9.75189 10.6827 10.1889 11.1022C10.626 11.5218 11.1828 11.8075 11.789 11.9233C12.3952 12.039 13.0235 11.9796 13.5945 11.7525C14.1655 11.5255 14.6536 11.141 14.997 10.6476C15.3404 10.1543 15.5236 9.57424 15.5236 8.9809C15.5227 8.18552 15.1931 7.42299 14.6073 6.86058C14.0215 6.29816 13.2271 5.9818 12.3986 5.9809V5.9809ZM12.3986 10.4809C12.0896 10.4809 11.7875 10.3929 11.5306 10.2281C11.2736 10.0633 11.0733 9.82901 10.9551 9.55492C10.8368 9.28083 10.8059 8.97923 10.8662 8.68826C10.9264 8.39729 11.0753 8.13001 11.2938 7.92024C11.5123 7.71046 11.7907 7.5676 12.0938 7.50972C12.3969 7.45184 12.7111 7.48155 12.9966 7.59508C13.2821 7.70861 13.5261 7.90087 13.6978 8.14754C13.8695 8.39421 13.9611 8.68422 13.9611 8.9809C13.9607 9.37858 13.7959 9.75984 13.503 10.041C13.21 10.3223 12.8129 10.4804 12.3986 10.4809V10.4809Z" fill="white"/>
              <path d="M18.4036 3.21164C16.9189 1.78666 14.9369 0.940164 12.8403 0.835526C10.7437 0.730889 8.681 1.37553 7.05035 2.64503C5.41971 3.91453 4.3367 5.71889 4.01036 7.70988C3.68402 9.70086 4.13747 11.7373 5.2832 13.4262L11.1869 22.1268C11.3182 22.3204 11.4979 22.4795 11.7095 22.5896C11.9211 22.6997 12.158 22.7574 12.3987 22.7574C12.6393 22.7574 12.8762 22.6997 13.0878 22.5896C13.2994 22.4795 13.4791 22.3204 13.6104 22.1268L19.5143 13.4262C20.5774 11.8595 21.0472 9.98962 20.845 8.12993C20.6428 6.27023 19.7808 4.53379 18.4036 3.21164V3.21164ZM18.2051 12.6075L12.3987 21.1645L6.59219 12.6075C4.81484 9.98813 5.19604 6.48281 7.49858 4.27228C8.14207 3.65452 8.906 3.16448 9.74676 2.83015C10.5875 2.49582 11.4886 2.32374 12.3987 2.32374C13.3087 2.32374 14.2098 2.49582 15.0506 2.83015C15.8914 3.16448 16.6553 3.65452 17.2988 4.27228C19.6013 6.48281 19.9825 9.98813 18.2051 12.6075Z" fill="white"/>
            </svg>
          ) : (
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
              ></path>
            </svg>
          )} &nbsp;
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
