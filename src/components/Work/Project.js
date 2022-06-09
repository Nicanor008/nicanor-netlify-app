import { Flex, Box, Text, Image, Link, HStack, Tag, TagLabel } from '@chakra-ui/react'
import Futr from '../../assets/images/futr.svg'

const Project = ({ link, title, role, tools, pl, pr }) => (
  <Flex
    flexDir="column"
    w={["100%", "50%"]}
    ml={[0, pl]}
    mr={[0, pr]}
    pt={[6, 0]}
    border="1px solid #D1D9F4"
    borderRadius="4px"
  >
    <Image src={Futr} alt="futr.ai" />
    <Box px={4}>
      <Flex justifyContent="space-between" py={3}>
        <Link href={link} target="_blank" color="#587BF8">{title}</Link>
        <Flex>
          <Box color="#888383">Role:&nbsp;</Box>
          <Box>{role}</Box>
        </Flex>
      </Flex>
      {/* <Flex py={2}> */}
      <HStack spacing={4} pb={3}>
        {tools.map((name) => (
          <Tag
            key={name}
            borderRadius='full'
            variant='solid'
            bg='#587BF8'
          >
            <TagLabel>{name}</TagLabel>
          </Tag>
        ))}
      </HStack>
      {/* </Flex> */}
      <Text fontSize="16px" textAlign="justify" mb={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt rhoncus venenatis convallis pretium.
        Porttitor nec cursus id sem. Mattis at suscipit sed volutpat ac id justo, senectus porttitor. Est, non 
        pellentesque donec viverra. Habitant sit sed ut sed sed viverra. Ac aliquam vitae ultricies est cursus.
      </Text>
    </Box>
  </Flex>
)

export default Project
