import { Flex, Box, Text, Button, Image } from '@chakra-ui/react'
import Skills from '../../assets/images/skills.svg'
import { GetDarkLightMode } from '../../helpers/getDarkLightMode';

const About = () => {
  const activeColor = GetDarkLightMode()

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
      </Flex>
      <Flex flexDir={["column-reverse", "row"]}>
        <Flex flexDir="column" width="100%" pr={[2, 12]} w={["100%", "50%"]}>
          <Flex flexDir="row" justifyContent="space-between">
            <Flex flexDir="row" alignItems="center">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
              </svg>
              <Text pl={1} fontWeight="bold">Techie</Text>
            </Flex>

            <Flex flexDir="row" alignItems="center">
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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

          <Text pt={4} textAlign="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla nisl eget quisque in sit venenatis ultricies.
            Fermentum, placerat ultrices purus consectetur. Pharetra, felis volutpat metus consectetur nisl nullam ornare.
            Et euismod commodo lectus luctus eu id elementum a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            nulla nisl eget quisque in sit venenatis ultricies. Fermentum, placerat ultrices purus consectetur. Pharetra, felis 
            volutpat metus consectetur nisl nullam ornare. Et euismod commodo lectus luctus eu id elementum a.eget quisque in sit 
            venenatis ultricies. Fermentum, placerat ultrices purus consectetur. Pharetra, felis volutpat metus consectetur nisl 
            nullam ornare. Et euismod commodo lectus luctus eu id elementum a.
          </Text>
        </Flex>
        <Flex flexDir="column" w={["100%", "50%"]} pl={[0, 10]}>
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
          <Image src={Skills} alt="skills" w="85%" alignSelf="center" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default About
