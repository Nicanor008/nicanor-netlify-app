import { Link, useMediaQuery, Flex, Box, Text, Button, Image } from '@chakra-ui/react'
import Skills from '../../assets/images/skills.svg'
import { GetDarkLightMode } from '../../helpers/getDarkLightMode';
import BiRightArrow from '../Icons/BiRightArrow';
import BiUpArrow from '../Icons/BiUpArrow';

const CompanyLink = ({ link, company }) => (
  <Link
    href={link}
    color="lime"
    fontWeight="500"
    target="_blank"
    _hover={{
      textDecoration: 'none'
    }}
  >
    {company}
  </Link>
)

const About = () => {
  const activeColor = GetDarkLightMode()
  const [isTabletOrDesktop] = useMediaQuery('(min-width: 48em)')

  return (
    <Flex flexDir="column" w="100%" mt="30rem" h="auto" alignSelf="center" display={["block", "flex"]}>
      <Flex flexDir="column">
        <Box fontSize={["70px", "90px"]} marginBlockStart={0} marginBlockEnd={0} fontWeight="800" fontFamily="inter">ABOUT</Box>
        <Box
          fontSize={["59px", "69px"]}
          marginBlockStart={0}
          marginBlockEnd={0}
          fontWeight="800"
          mt={["-45px !important", "-58px !important"]}
          opacity="0.6"
        >
          NICANOR
        </Box>
        <Flex flexDir="row" justifyContent="space-between" w={['100%', '18%']} pb={[6, 0]}>
          <Flex flexDir="row" alignItems="center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
            </svg>
            <Text pl={1} fontWeight="bold">Techie</Text>
          </Flex>

          <Flex flexDir="row" alignItems="center">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path>
              <circle cx="11" cy="11" r="2"></circle>
            </svg>
            <Text pl={1} fontWeight="bold">Art</Text>
          </Flex>

          <Flex flexDir="row" alignItems="center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"></path>
            </svg>
            <Text pl={1} fontWeight="bold">Biker</Text>
          </Flex>
        </Flex>
      </Flex>
        <Flex flexDir={["column-reverse", "row"]}>
          <Flex flexDir="column" width="100%" pr={[2, 12]} w={["100%", "50%"]}>
            <Text pt={4} textAlign="justify">
              I'm a software engineer who's trapped in the creative world of technology. I create beautiful web apps using modern technologies.
              My interest in software engineering started back in 2016 when decided to create a facebook clone web app - turns out there were more 
              technologies and things to be familiar with. Ever since, I've dived deep into learning and understanding about web technologies and 
              software engineering in general.
              <br /><br />
              Fast forward to today, I've had the privilege of working at <CompanyLink company="Andela" link="https://andela.com/" />, <CompanyLink company="KenSwitch" link="https://www.kenswitch.com/" />, 
               <CompanyLink company="Incentro" link="https://www.incentro.com/en" /> and <CompanyLink company="SovTech" link="https://www.sovtech.co.za/" />. My main focus now is building 
              accessible, performant and digital experiences at SovTech for a variety of clients.
              <br /><br />
              Away from coding, I'm a biker and a pencil artist. I turn visual imaginations into art drawings through pencil and paper.
              <br /><br />
              <Flex alignItems="center">
                {isTabletOrDesktop ? `The following` : 'Above'} are some of the technologies and tools I've been over time &nbsp;
                {isTabletOrDesktop ? <BiRightArrow /> : <BiUpArrow />}
              </Flex>
            </Text>
          </Flex>
          <Flex flexDir="column" w={["100%", "50%"]} pl={[0, 10]} alignSelf="center">
            {isTabletOrDesktop && (
              <Flex justifyContent="space-between">
                <Button
                  bg={activeColor === 'dark' ? 'white' : '#587BF8'}
                  border={`2px solid ${activeColor === 'dark' ? '#587BF8' : '#E72063'}`}
                  borderRadius="5px"
                  color={activeColor === 'dark' ? 'black' : 'white'}
                  px={8}
                  cursor="default"
                  _hover={{
                    bg: `2px solid ${activeColor === 'dark' ? '#587BF8' : '#E72063'}`
                  }}
                >
                  Skills
                </Button>
                <Text textDecoration="underline" fontWeight="bold">In a Nutshell</Text>
              </Flex>
            )}
            <Image src={Skills} alt="skills" w="55%" alignSelf="center" />
          </Flex>
      </Flex>
    </Flex>
  )
}

export default About
