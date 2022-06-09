import { Flex, Text, Button } from '@chakra-ui/react'
import { GetDarkLightMode } from '../../helpers/getDarkLightMode';
import { BlogArticle } from './BlogArticle';

const BlogAndTimeline = () => {
  const activeColor = GetDarkLightMode()
  return (
    <Flex flexDir="column" w="100%" h="auto">
      <Flex flexDir="row" display={["block", "flex"]} mt={[14, 20]} alignItems="start">
        <Flex flexDir="column" w={['100%', '50%']} pr={[2, 12]}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize={['30px', '36px']} fontWeight={700} fontFamily="Inter">BLOG</Text>
            <Button
              border="2px solid #9DB1FB"
              borderRadius="50px"
              bg="white"
              variant="solid"
              colorScheme="white"
              color="black"
              cursor="default"
            >
              View All
            </Button>
          </Flex>

          <BlogArticle
            title="Title One"
            link="#"
            description="Qui incididunt sint voluptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.dsd"
          />
          <BlogArticle
            title="Title Two"
            link="#"
            description="Qui incididunt sint voluptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.dsd"
          />
          <BlogArticle
            title="Title Three"
            link="#"
            description="Qui incididunt sint voluptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.dsd"
          />
          <BlogArticle
            title="Title Four"
            link="#"
            description="Qui incididunt sint voluptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.dsd"
          />
        </Flex>

        {/* timeline */}
        <Flex flexDir="column">
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
            Timeline
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default BlogAndTimeline

