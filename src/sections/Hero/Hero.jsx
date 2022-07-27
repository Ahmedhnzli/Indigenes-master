import {
  Box,
  Button,
  Circle,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue as mode,
  LightMode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaPlay } from 'react-icons/fa'
import "../Map/style.css"
import vid from "../../assets/video/Ferrari.mp4"

export const Hero = () => {
  return (
    <Box>
      <video
            overflow="hidden"
            autoPlay
            loop
          >
            <source src={vid} type="video/mp4" ></source>
          </video>
      <Box as="section" bg={mode('gray.49', 'blackAlpha.700')} color="white" py="10rem">
        <Box
          maxW={{
            base: 'xl',
            md: '5xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
        >
          <Box textAlign="center" >
            <Heading
              as="h1"
              size="3xl"
              fontWeight="bold"
              maxW="48rem"
              mx="auto"
              lineHeight="1.2"
              letterSpacing="tight"
            >
              Earn <span>Benefits</span> from investing in projects in <span>Tunisia</span>
            </Heading>
            <Text fontSize="xl" mt="4" maxW="xl" mx="auto" opacity={0.5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
            </Text>
          </Box>

          <Stack
            justify="center"
            direction={{
              base: 'column',
              md: 'row',
            }}
            mt="10"
            mb="20"
            spacing="4"
          >
            <LightMode>
              <Button
                as="a"
                href="#"
                size="lg"
                color="blackAlpha.900"
                colorScheme="yellow"
                px="8"
                fontWeight="bold"
                fontSize="md"
              >
                Get started free
              </Button>
            </LightMode>
          </Stack>
          </Box>
        </Box>
      </Box>

  )
}
