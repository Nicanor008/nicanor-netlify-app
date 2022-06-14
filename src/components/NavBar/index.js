import { Text, Flex, Image, Link } from '@chakra-ui/react';
import Logo from '../../assets/images/logo.svg'
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const NavLink = ({ link, text }) => (
  <Link href={link} _hover={{ textDecoration: 'none' }}>
    <Text px={2}>{text}</Text>
  </Link>
)

const NavBar = () => (
  <Flex justify="space-between" h="80px">
    <Link href="/">
      <Image src={Logo} alt="logo" h="20" />
    </Link>
    <Flex alignItems="center">
      {/* <Text px={2}>About Me</Text> */}
      <NavLink
        link="/portfolio"
        text="Portfolio"
      />
      <NavLink
        link="/blog"
        text="Blog"
      />
      <ColorModeSwitcher />
    </Flex>
  </Flex>
)

export default NavBar
