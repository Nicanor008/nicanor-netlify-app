import { Text, Flex, Image, Link } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import ResumeLink from '../ResumeLink';

const NavLink = ({ link, text, target }) => (
  <Link href={link} _hover={{ textDecoration: 'none' }} mx={2} target={target ?? '_self'}>
    <Text px={2}>{text}</Text>
  </Link>
);

const NavBar = () => {
  const location = useLocation();

  return (
    <Flex justify="space-between" w="100%" h="80px" px={['2rem', '6rem']}>
      <Link href="/">
          <Image src={Logo} alt="logo" h="20" />
        </Link>
        <Flex alignItems="center" w="max-content">
          <NavLink link="/my-work" text="My work" />
          <NavLink link="https://commercial.nicanor.me/" text="Projects showcase" target="_blank" />
          <NavLink link="/blog" text={location.pathname === '/' ? 'Blog' : 'My articles'} />
          {location.pathname !== '/' && <ResumeLink px={3} />}
        </Flex>
      </Flex>
    )
  }

export default NavBar;
