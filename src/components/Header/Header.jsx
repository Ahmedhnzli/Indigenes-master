import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from './Logo'
import { MobileNav } from './MobileNav'
import { NavLink } from './NavLink'
import {ColorModeSwitcher} from '../../ColorModeSwitcher'

export const Header = () => {
  return (
    <Box>
      <Box as="header" bg={mode('white', 'blackAlpha.700')} >
        <Box
          backdropBlur={13}
          maxW="7xl"  
          mx="auto"
          py="4"
          px={{
            base: '6 ',
            md: '8',
          }}
        >
          <Flex as="nav" justify="space-between">
            <HStack spacing="8">
              <Box as="a" href="/" rel="home">
                <VisuallyHidden>Indigenes</VisuallyHidden>
                <Logo h="8"  />
              </Box>
            </HStack>
            <Flex align="center">
              <HStack
                spacing="8"
                display={{
                  base: 'none',
                  md: 'flex',
                }}
              > 
              <a href="http://"><NavLink.Desktop > About </NavLink.Desktop></a>
              <a href="http://"><NavLink.Desktop > Features </NavLink.Desktop></a>
              <a href="http://"><NavLink.Desktop > Pricing </NavLink.Desktop></a>
              <a href="http://"><NavLink.Desktop > Contact </NavLink.Desktop></a>
              </HStack>
              </Flex>
              <Flex alignItems="center" justify="flex-end">
              <HStack
                spacing="5"
                display={{
                  base: "none",
                  md: "flex",
                }}>

                  <NavLink.Desktop> Sign in </NavLink.Desktop>
                <Button colorScheme="yellow" rounded="5" >
                  Sign up
                </Button>
                <ColorModeSwitcher/>
                </HStack>
                <Box ml="5">
                <MobileNav />
              </Box>
              </Flex>
            </Flex>
        </Box>
      </Box>
    </Box>
  )
}
