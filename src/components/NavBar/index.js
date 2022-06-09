import { Text, Flex, Image } from '@chakra-ui/react';
import Logo from '../../assets/images/logo.svg'
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const NavBar = () => (
  <Flex justify="space-between" h="80px">
    <Image src={Logo} alt="logo" h="20" />
    <Flex alignItems="center">
      <Text px={2}>About Me</Text>
      <Text px={2}>Portfolio</Text>
      <Text px={2}>Blog</Text>
      <ColorModeSwitcher />
    </Flex>
  </Flex>
)

export default NavBar
