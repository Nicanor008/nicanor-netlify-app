import {
  useMediaQuery,
  Flex,
  Button,
  Heading,
  Text,
  Link,
  Divider,
} from '@chakra-ui/react';

const GuideToWork = () => {
  const [isTabletOrDesktop] = useMediaQuery('(min-width: 48em)');

  return (
    <Flex bg="white" color="black" minH="80vh" py={5} alignItems="center">
      <Flex
        mx={['2rem', '6rem']}
        flexDir={['column', 'row']}
        w="100%"
        h="auto"
        alignSelf="center"
        justifyContent="space-around"
      >
        <Flex>
          <Flex flexDir="column" w="250px">
            <Heading as="h2" color="#4a69d8">
              I design & build stuff
            </Heading>
            <Text fontSize="16" fontWeight={400} my={5}>
              Web & Mobile, experimentals & Open source
            </Text>
            <Link href="/my-work">
              <Button w="full" border="1px solid" borderColor="#4a69d8">
                SEE MY WORK
              </Button>
            </Link>
          </Flex>
        </Flex>
        {!isTabletOrDesktop && <Divider borderColor="#1A202C" my={6} />}
        <Flex flexDir="column">
          <Flex flexDir="column" w="250px">
            <Heading as="h2" color="#4a69d8">
              Sometimes, I Write
            </Heading>
            <Text fontSize="16" fontWeight={400} my={5}>
              Technical articles and some poems
            </Text>
            <Link href="/blog">
              <Button w="full" border="1px solid" borderColor="#4a69d8">
                READ MY ARTICLES
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GuideToWork;
