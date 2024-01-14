import { Flex, Text, Link } from '@chakra-ui/react';

const SocialImageLink = ({ to, image, text }) => (
  <Link href={to} pr={4} target="_blank">
    <Flex>
      {image}
      <Text pl={0.5}>{text}</Text>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </Flex>
  </Link>
);

export default SocialImageLink;
