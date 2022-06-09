import { Flex, Text, Button, Box, Heading } from '@chakra-ui/react'
import { GetDarkLightMode } from '../../helpers/getDarkLightMode';
import { BlogArticle } from './BlogArticle';

const BlogAndTimeline = () => {
  const activeColor = GetDarkLightMode()
  return (
    <Flex flexDir="column" w="100%" h="auto">
      <Flex flexDir="row" display={["block", "flex"]} mt={[14, 20]} alignItems="start">
        <Flex flexDir="column" w={['100%', '50%']} pr={[2, 12]}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize={['30px', '36px']} fontWeight={700} fontFamily="Inter">BLOG</Text>
            <Button
              border="2px solid #9DB1FB"
              borderRadius="50px"
              bg="white"
              variant="solid"
              colorScheme="white"
              color="black"
              cursor="default"
            >
              View All
            </Button>
          </Flex>

          <BlogArticle
            title="Title One"
            link="#"
            description="Qui incididunt sint voluptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.dsd"
          />
          <BlogArticle
            title="Title Two"
            link="#"
            description="Qui incididunt sint voluptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.dsd"
          />
          <BlogArticle
            title="Title Three"
            link="#"
            description="Qui incididunt sint voluptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.uptate velit laboris esse.sint voluptate velit laboris esse.dsd"
          />
        </Flex>

        {/* timeline */}
        <Flex flexDir="column" pl={[0, 12]} mt={[8, 0]}>
          <Button
            bg={activeColor === 'dark' ? 'white' : '#587BF8'}
            border={`2px solid ${activeColor === 'dark' ? '#587BF8' : '#E72063'}`}
            borderRadius="5px"
            color={activeColor === 'dark' ? 'black' : 'white'}
            px={8}
            cursor="default"
            _hover={{
              bg: `2px solid ${activeColor === 'dark' ? '#587BF8' : '#E72063'}`
            }}
          >
            Timeline
          </Button>
          <Flex pt={6} flexDir="column">
            <TimelineJob title="Certified GCP Solutions Architect" time="May 2022" active={true} role="Google Cloud" work={false} />
            <TimelineJob title="SovTech Ltd" time="Feb 2021" active={true} role="JavaScript Engineer" work={true} />
            <TimelineJob title="Incentro" time="Aug 2020" active={false} role="Software Engineer" work={true} />
            <TimelineJob title="KenSwitch Ltd" time="Jan 2020" active={false} role="Software Developer" work={true} />
            <TimelineJob title="Andela" time="Dec 2018" active={false} role="Software Engineer" work={true} />
            <TimelineJob title="ICT Authority" time="April 2018" active={false} role="Junior Applications Developer" work={true} />
            <TimelineJob title="Kisii University" time="2013 - 2017" active={false} role="Bsc. Computer Science" work={false} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default BlogAndTimeline

export const TimelineJob = ({ title, time, active, role, work }) => (
  <Flex my={4}>
    {work ? (
      <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.86439 3.9883L27.8937 17.4268L2.56561 30.2933L2.86439 3.9883Z" stroke="#E72063" strokeWidth="4"/>
      </svg>
    ) : (
      <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.86439 3.9883L27.8937 17.4268L2.56561 30.2933L2.86439 3.9883Z" stroke="#587BF8" strokeWidth="4"/>
      </svg>
    )}
    <Flex pl={2}>
      <Box>
        <Heading as="h4" size="md">{title}</Heading>
        <Flex>
          {time}{active ? <Box color="#909090">(Current)</Box> : null}
        </Flex>
      </Box>
      <Text pl={1}>{role}</Text>
    </Flex>
  </Flex>
)
