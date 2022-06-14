import { Flex, Box, Text, Image, Link, HStack, Tag, TagLabel } from '@chakra-ui/react'

const PortfolioProject = ({ link, title, role, tools, pl, pr, description, image, imageAlt }) => (
  <Flex
    flexDir="column"
    ml={[0, pl]}
    mr={[0, pr]}
    pt={[6, 0]}
    mt={[10, 3]}
    border="1px solid #D1D9F4"
    borderRadius="4px"
    mb={8}
  >
    <Image src={image} alt={imageAlt} />
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
        {description}
      </Text>
    </Box>
  </Flex>
)

export default PortfolioProject
