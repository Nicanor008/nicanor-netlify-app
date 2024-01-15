import {
  Text,
  Box,
  Heading,
  HStack,
  Tag,
  TagLabel,
  Link,
} from '@chakra-ui/react';

export const BlogArticle = ({ title, link, description, tags }) => (
  <Link href={link} _hover={{ textDecoration: 'none' }} target="_blank">
    <Box
      border="1px solid #364d75"
      px={4}
      pt={4}
      borderRadius="4px"
      my={5}
      bg="#324971"
    >
      <Heading as="h4" size="md" fontSize="18px">
        {title}
      </Heading>
      <Text py={2} fontSize="14px">
        {description}
      </Text>
      <HStack spacing={4} pb={3}>
        {tags.map(name => (
          <Tag key={name} borderRadius="full" variant="solid" bg="#587BF8">
            <TagLabel>{name}</TagLabel>
          </Tag>
        ))}
      </HStack>
    </Box>
  </Link>
);
