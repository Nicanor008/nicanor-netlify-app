import {
  useMediaQuery,
  Flex,
  Heading,
  Text,
  Image,
  Box,
} from '@chakra-ui/react';
import SkillsCompany from '../../assets/images/skills-company.svg';

const OverTheYears = () => {
  const [isTabletOrDesktop] = useMediaQuery('(min-width: 48em)');

  return (
    <Flex color="white" minH="100vh" pb={5} alignItems="center">
      <Flex flexDir="column" minW={['100%', '50%']} mr={2}>
        <Heading as="h3">Across my career,</Heading>
        <Text textAlign="justify">
          I've delved into a diverse range of projects, crafting engaging and
          accessible experiences for companies and businesses worldwide. From
          dynamic eCommerce platforms to intricate enterprise solutions, each
          project has been an opportunity to combine technical expertise with a
          laser focus on user needs.
          <br />
          <br />
          Currently, I wear the badge of Senior Software Engineer at Sovtech,
          where I dedicate my skills to building thoughtful and inclusive
          digital experiences for our clients. I take pride in adhering to web
          standards and best practices, ensuring everything I create is not only
          aesthetically pleasing but also functional and accessible for all.
          <br />
          <br />
          Prior to Sovtech, I honed my craft at Incentro, where I played a key
          role in developing and enhancing their suite of products and services.
          This experience further broadened my skillset and deepened my
          understanding of building effective software solutions in a
          collaborative environment.
          <br />
          <br />
          My journey in the world of code began even earlier at KenSwitch, where
          I tackled the challenge of developing an insurance customs product for
          all Kenyan insurance companies. This immersive project solidified my
          love for problem-solving and laid the foundation for my career.
          <br />
          <br />
          Andela proved another pivotal chapter, offering me the chance to
          collaborate with diverse teams across Africa and the United States.
          Working on projects for a variety of clients across the globe further
          fueled my passion for building impactful software solutions that
          transcend borders.
          <br />
          <br />
          This diverse tapestry of experiences has fueled my technical expertise
          and shaped my approach to software development. I'm a firm believer in
          the power of technology to empower and connect, and I strive to design
          and build solutions that not only function flawlessly but also leave a
          positive impact on the world.
        </Text>
      </Flex>
      {isTabletOrDesktop ? (
        <Image src={SkillsCompany} alt="skills company" />
      ) : (
        <Box />
      )}
    </Flex>
  );
};

export default OverTheYears;
