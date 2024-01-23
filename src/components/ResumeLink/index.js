import { Link } from '@chakra-ui/react';
import Resume from '../../assets/docs/resume.pdf';

export default function ResumeLink({ ...rest }) {
  return (
    <Link
      href={Resume}
      target="_blank"
      width="100%"
      border="2px solid #9DB1FB"
      borderRadius="50px"
      bg="#587BF8"
      variant="solid"
      colorScheme="white"
      color="white"
      textAlign="center"
      py={1.5}
      _hover={{
        textDecoration: 'none',
      }}
      {...rest}
    >
      View Resume
    </Link>
  );
}
