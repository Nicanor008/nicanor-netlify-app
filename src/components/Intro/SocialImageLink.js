import { Image, Link } from '@chakra-ui/react';
import { GetDarkLightMode } from '../../helpers/getDarkLightMode';

const SocialImageLink = ({ to, imageLight, imageDark, altText }) => {
  const activeColor = GetDarkLightMode()

  return (
    <Link to={to} _hover={{ py: "2px" }} pr={4}>
      <Image
        src={activeColor === 'dark' ? imageLight : imageDark}
        alt={altText}
        _hover={{
          bg: "#A3B5F8",
          borderRadius: '4px',
        }}
      />
    </Link>
  )
}

export default SocialImageLink
