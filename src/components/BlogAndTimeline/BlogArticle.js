import { Text, Box, Heading, HStack, Tag, TagLabel, Link } from '@chakra-ui/react'

export const BlogArticle = ({ title, link, description }) => (
  <Link href={link} _hover={{ textDecoration: 'none' }}>
    <Box border="1px solid #D1D9F4" px={4} pt={4} borderRadius="4px" my={2}>
      <Heading as="h4" size="md">{title}</Heading>
      <Text py={2}>{description}</Text>
      <HStack spacing={4} pb={3}>
        {['Web', 'Soft Skills', 'React JS'].map((name) => (
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
    </Box>
  </Link>
)
