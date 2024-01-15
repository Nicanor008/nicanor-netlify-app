import {
  ChakraProvider,
  Box,
  VStack,
  theme,
  Flex,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { BlogArticle } from '../../components/BlogAndTimeline/BlogArticle';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const blogData = [
  {
    title: 'Giving and Receiving Feedback',
    link: 'https://nicanor.hashnode.dev/giving-and-receiving-feedback',
    tags: ['Soft Skills', 'Partnership', 'Communication'],
    description: `Your Feedback matters · Definition Feedback is the transmission of evaluative or corrective information about an action, event, or process to the...`,
  },
  {
    title: 'Upload multiple images using FormData Web API',
    tags: ['HTML', 'CSS', 'JavaScript', 'Form API'],
    link: 'https://nicanor.hashnode.dev/upload-multiple-images-using-formdata-web-api',
    description: `I always knew I could only a single image in javascript using FormData web API. But turns out, I was wrong, kind of, you can upload multiple images...`,
  },
  {
    title: 'Upload single or multiple files in react dropzone',
    tags: ['React.JS', 'React Dropzone', 'Form API'],
    link: 'https://nicanor.hashnode.dev/upload-single-or-multiple-files-in-react-dropzone',
    description: `Uploading files can be both tricky and easy. Let's say a user wants to upload images to the API REST endpoint. We'll use axios to make our http calls...`,
  },
  {
    title: 'Securing NodeJS Apps: Best Practices',
    link: 'https://nicanor.hashnode.dev/securing-nodejs-apps-best-practices',
    tags: ['Node JS', 'Security', 'Express JS', 'REST API'],
    description: `The following are Some of the essential(required) that I believe should be followed to secure NodeJS apps Ensure you use up to date dependencies and...`,
  },
  {
    title: 'Documenting NodeJS API using Swagger UI',
    link: 'https://nicanor.hashnode.dev/documenting-nodejs-api-using-swagger-ui',
    tags: ['Node JS', 'Open Source', 'Swagger', 'API'],
    description: `Swagger UI is an open-source resource that allows anyone to test/run API endpoints. This is of benefit to the development team, project managers, and...`,
  },
  {
    title: 'Design a Smartphone in HTML and CSS',
    link: 'https://nicanor.hashnode.dev/design-a-smartphone-in-html-and-css-d7125fc796cf',
    tags: ['HTML', 'CSS', 'UI/UX'],
    description: `HTML and CSS can really do wonders if utilized properly. Actually the power of all this lies in the CSS, styling of HTML elements. Let’s jump right...`,
  },
  {
    title: 'DevOps For Frontend Developers',
    link: 'https://nicanor.hashnode.dev/devops-for-frontend-developers-b7c281f396a7',
    tags: ['Frontend', 'DevOps', 'Tools'],
    description: `DevOps is on both the Frontend and backend software development. We all know that it’s common on the backend. And in fact, it’s always part of the job...`,
  },
  {
    title: 'Postgres installation in Mac',
    link: 'https://nicanor.hashnode.dev/devops-for-frontend-developers-b7c281f396a7',
    tags: ['Postgres', 'OS', 'Mac'],
    description: `First, we need HomeBrew. HomeBrew is a free and open-source package manager that simplifies installation of software in Apple MacOS. To install...`,
  },
];

const Blog = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="md" bg="#233554" color="#fff" minH="100vh">
        <NavBar />
        <VStack spacing={8} pb={[2, 5]} minH="90vh">
          <Flex
            flexDir="column"
            justifyContent="center"
            px={[3, 0]}
            w={['98%', '60%']}
          >
            <Flex flexDir="column" mb={5} mt={2}>
              <Text fontWeight={600} fontSize="20px">
                I Sometimes write on:
              </Text>
              <Flex gap={4} alignItems="center" flexWrap="wrap">
                <Link
                  href="https://medium.com/@nicanorkorir008"
                  _target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="https://img.shields.io/badge/medium-DB7093?logo=medium&logoColor=fff&style=for-the-badge"
                    alt="Medium"
                    w="140px"
                    borderRadius={3}
                  />
                </Link>
                <Link
                  href="https://nicanor.hashnode.dev/"
                  _target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="https://img.shields.io/badge/hashnode-06B6D4?logo=hashnode&logoColor=fff&style=for-the-badge"
                    alt="Hashnode"
                    w="160px"
                    borderRadius={3}
                  />
                </Link>
                <Link
                  href="https://mentorship101.gitbook.io/mentorship-101/"
                  _target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="https://img.shields.io/badge/gitbook-4285F4?logo=gitbook&logoColor=fff&style=for-the-badge"
                    alt="git book"
                    w="140px"
                    borderRadius={3}
                  />
                </Link>
              </Flex>
            </Flex>
            {blogData.map(blog => (
              <BlogArticle
                key={blog.title}
                title={blog.title}
                link={blog.link}
                description={blog.description}
                tags={blog.tags}
              />
            ))}
          </Flex>
        </VStack>
      </Box>
      <Footer />
    </ChakraProvider>
  );
};

export default Blog;
