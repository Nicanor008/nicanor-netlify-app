import { Flex, Box, Text, Image, Link, HStack, Tag, TagLabel } from '@chakra-ui/react'

const PortfolioProject = ({ link, title, role, tools, pl, pr, description, image, imageAlt }) => (
  <Flex
    flexDir="column"
    border="1px solid #D1D9F4"
    borderRadius="4px"
    mb={8}
    maxWidth="90%"
  >
    <Image src={image} alt={imageAlt} />
    <Box px={4}>
      <Flex justifyContent="space-between" py={3}>
        <Link href={link} target="_blank" color="#fff">{title}</Link>
        <Flex>
          <Box color="lightblue">Role:&nbsp;</Box>
          <Box>{role}</Box>
        </Flex>
      </Flex>
      <HStack pb={3}>
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
      <Text fontSize="16px" textAlign="justify" mb={2}>
        {description}
      </Text>
    </Box>
  </Flex>
)

export default PortfolioProject
