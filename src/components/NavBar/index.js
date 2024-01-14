import { Text, Flex, Image, Link } from '@chakra-ui/react';
import Logo from '../../assets/images/logo.svg';

const NavLink = ({ link, text }) => (
  <Link href={link} _hover={{ textDecoration: 'none' }}>
    <Text px={2}>{text}</Text>
  </Link>
);

const NavBar = () => (
  <Flex justify="space-between" w="100%" h="80px" px={['2rem', '6rem']}>
    <Link href="/">
      <Image src={Logo} alt="logo" h="20" />
    </Link>
    <Flex alignItems="center">
      <NavLink link="/my-work" text="My work" />
      <NavLink link="/blog" text="Blog" />
    </Flex>
  </Flex>
);

export default NavBar;
