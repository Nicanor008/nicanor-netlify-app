import { Flex, Link, Text } from '@chakra-ui/react';
import { GetDarkLightMode } from '../../helpers/getDarkLightMode';

const Footer = () => {
  const activeColor = GetDarkLightMode();

  return (
    <Flex
      justifyContent="center"
      bg={activeColor === 'dark' ? '#587BF8' : '#C5D1FF'}
      w="100%"
    >
      <Flex alignItems="center" flexDir="column" w="100%">
        <Text py={2}>Designed and developed with ❤️ by Nicanor Korir</Text>
        <Link
          href="https://github.com/Nicanor008/nicanor-netlify-app"
          target="_blank"
          color="white"
          fontWeight={600}
          w="100%"
          textAlign="center"
          bg={'#4a69d8'}
        >
          Github Code
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
