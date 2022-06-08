import { Flex, Box, Text, Image } from '@chakra-ui/react'
import Skills from '../../assets/images/skills.svg'

const About = () => {
  return (
    <Flex flexDir="row" w="100%" mt="30rem" h="auto" alignSelf="center" display={["block", "flex"]}>
      <Flex flexDir="column" width="100%">
        <Flex flexDir="column">
          <Box fontSize={["70px", "90px"]} marginBlockStart={0} marginBlockEnd={0} fontWeight="800" fontFamily="inter">ABOUT</Box>
          <Box
            fontSize={["59px", "69px"]}
            marginBlockStart={0}
            marginBlockEnd={0}
            fontWeight="800"
            mt={["-45px !important", "-58px !important"]}
            opacity="0.6"
          >
            NICANOR
          </Box>
        </Flex>

        <Flex flexDir="row" justifyContent="space-between">
          <Flex flexDir="row" alignItems="center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.75 2.1285C0.75 1.7629 0.895235 1.41227 1.15375 1.15376C1.41227 0.895236 1.7629 0.750002 2.1285 0.750002H15.87C16.0512 0.749706 16.2306 0.785149 16.3981 0.854302C16.5656 0.923455 16.7178 1.02496 16.8459 1.153C16.9741 1.28105 17.0758 1.43312 17.1451 1.60051C17.2145 1.7679 17.2501 1.94732 17.25 2.1285V15.87C17.2502 16.0512 17.2147 16.2307 17.1454 16.3982C17.0762 16.5656 16.9746 16.7178 16.8465 16.846C16.7184 16.9742 16.5663 17.0758 16.3989 17.1451C16.2314 17.2145 16.052 17.2501 15.8707 17.25H2.1285C1.94741 17.25 1.76809 17.2143 1.6008 17.145C1.4335 17.0757 1.2815 16.9741 1.15349 16.846C1.02547 16.7179 0.923949 16.5658 0.854717 16.3985C0.785485 16.2312 0.749902 16.0518 0.75 15.8708V2.1285ZM7.281 7.041H9.51525V8.163C9.83775 7.518 10.6627 6.9375 11.9025 6.9375C14.2792 6.9375 14.8425 8.22225 14.8425 10.5795V14.946H12.4373V11.1165C12.4373 9.774 12.1147 9.0165 11.2957 9.0165C10.1595 9.0165 9.687 9.83325 9.687 11.1165V14.946H7.281V7.041ZM3.156 14.8433H5.562V6.9375H3.156V14.8425V14.8433ZM5.90625 4.359C5.91079 4.56501 5.87413 4.76984 5.79843 4.96149C5.72273 5.15313 5.60951 5.32773 5.46542 5.47503C5.32133 5.62232 5.14927 5.73936 4.95934 5.81926C4.76941 5.89916 4.56543 5.94031 4.35938 5.94031C4.15332 5.94031 3.94934 5.89916 3.75941 5.81926C3.56948 5.73936 3.39742 5.62232 3.25333 5.47503C3.10924 5.32773 2.99602 5.15313 2.92032 4.96149C2.84462 4.76984 2.80796 4.56501 2.8125 4.359C2.8214 3.95464 2.98829 3.56985 3.27741 3.28702C3.56654 3.00419 3.95492 2.84582 4.35938 2.84582C4.76383 2.84582 5.15221 3.00419 5.44134 3.28702C5.73046 3.56985 5.89735 3.95464 5.90625 4.359V4.359Z" fill="black"/>
            </svg>
            <Text pl={1}>Software Engineer</Text>
          </Flex>

          <Flex flexDir="row" alignItems="center">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.9768 0.726779C11.029 0.674395 11.0911 0.632835 11.1594 0.604477C11.2278 0.57612 11.301 0.561523 11.375 0.561523C11.449 0.561523 11.5223 0.57612 11.5906 0.604477C11.6589 0.632835 11.721 0.674395 11.7733 0.726779L16.2733 5.22678C16.3257 5.27903 16.3672 5.3411 16.3956 5.40944C16.4239 5.47778 16.4385 5.55104 16.4385 5.62503C16.4385 5.69902 16.4239 5.77228 16.3956 5.84062C16.3672 5.90895 16.3257 5.97103 16.2733 6.02328L14.1335 8.16303L13.2009 11.8902C13.13 12.174 12.9865 12.4344 12.7845 12.6461C12.5826 12.8577 12.3291 13.0132 12.0489 13.0973L0.410767 16.5893L3.90277 4.95003C3.98694 4.6702 4.14233 4.41702 4.35373 4.21528C4.56514 4.01354 4.8253 3.87015 5.10877 3.79915L8.83589 2.86765L10.9768 0.726779ZM8.95177 3.99828L5.38214 4.8904C5.28739 4.91405 5.20042 4.96197 5.1298 5.02943C5.05918 5.09689 5.00735 5.18158 4.97939 5.27515L2.08814 14.9108L11.726 12.0195C11.819 11.9913 11.9032 11.9395 11.9702 11.8691C12.0372 11.7987 12.0849 11.7122 12.1085 11.6179L13.0018 8.04715L8.95177 3.99715V3.99828Z" fill="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M2.18598 14.8815L7.99998 10.125C8.22249 10.125 8.43999 10.059 8.625 9.9354C8.81001 9.81179 8.9542 9.63609 9.03935 9.43052C9.1245 9.22495 9.14677 8.99875 9.10337 8.78052C9.05996 8.5623 8.95281 8.36184 8.79548 8.20451C8.63814 8.04717 8.43769 7.94003 8.21946 7.89662C8.00123 7.85321 7.77503 7.87549 7.56946 7.96064C7.3639 8.04578 7.1882 8.18998 7.06458 8.37498C6.94096 8.55999 6.87498 8.7775 6.87498 9L2.11848 14.814L2.08923 14.9108L2.18598 14.8815V14.8815Z" fill="black"/>
            </svg>
            <Text pl={1}>Pencil Drawing</Text>
          </Flex>

          <Flex flexDir="row" alignItems="center">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"></path>
            </svg>
            <Text pl={1}>Biking</Text>
          </Flex>
        </Flex>

        <Text pt={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla nisl eget quisque in sit venenatis ultricies.
          Fermentum, placerat ultrices purus consectetur. Pharetra, felis volutpat metus consectetur nisl nullam ornare.
          Et euismod commodo lectus luctus eu id elementum a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          nulla nisl eget quisque in sit venenatis ultricies. Fermentum, placerat ultrices purus consectetur. Pharetra, felis 
          volutpat metus consectetur nisl nullam ornare. Et euismod commodo lectus luctus eu id elementum a.eget quisque in sit 
          venenatis ultricies. Fermentum, placerat ultrices purus consectetur. Pharetra, felis volutpat metus consectetur nisl 
          nullam ornare. Et euismod commodo lectus luctus eu id elementum a.
        </Text>
      </Flex>
      <Image src={Skills} alt="skills" />
    </Flex>
  )
}

export default About
