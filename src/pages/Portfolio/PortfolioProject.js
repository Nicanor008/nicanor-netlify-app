import {
  Flex,
  Box,
  Text,
  Image,
  Link,
  HStack,
  Tag,
  TagLabel,
} from '@chakra-ui/react';

const PortfolioProject = ({
  link,
  title,
  tools,
  description,
  image,
  imageAlt,
}) => (
  <Flex
    flexDir="column"
    border="0.2px solid #4c6591"
    borderRadius="8px"
    mb={8}
    w={['95%', '24%']}
    m={[2, 6]}
    bg="#4c6591"
  >
    <Image
      src={image}
      alt={imageAlt}
      borderTopStartRadius="8px"
      borderTopEndRadius="8px"
    />
    <Box px={4} bg="#4c6591" h="100%">
      <Flex justifyContent="space-between" py={3}>
        <Link href={link} target="_blank" color="#fff" fontWeight={500}>
          {title}
        </Link>
      </Flex>
      <HStack pb={3}>
        {tools.map(name => (
          <Tag key={name} borderRadius="full" variant="solid" bg="#587BF8">
            <TagLabel>{name}</TagLabel>
          </Tag>
        ))}
      </HStack>
      <Text fontSize="14px" mb={2}>
        {description}
      </Text>
    </Box>
  </Flex>
);

export default PortfolioProject;
