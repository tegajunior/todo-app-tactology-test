'use client'

import Image from 'next/image'
import { links } from './links'
import logo from '@/assets/images/logo.png'
import englandFlag from '@/assets/images/englandFlag.jpg'
import {
  Box,
  Collapsible,
  Flex,
  Icon,
  Text,
  Image as ChakraImage,
  Switch,
} from '@chakra-ui/react'
import { ArrowDown2, ArrowLeft } from 'iconsax-reactjs'

export default function SidebarContent() {
  return (
    <Box
      p={4}
      overflow="auto"
      h="100%"
    >
      <Flex
        align="center"
        mb={4}
        justifyContent="space-between"
      >
        <Image
          src={logo.src}
          alt="Logo"
          width={100}
          height={100}
        />
        <ArrowLeft />
      </Flex>
      {links.map((item, index) => (
        <Flex
          key={index}
          marginBottom={1}
          p={1}
          width={'100%'}
          alignItems={'center'}
          spaceX={2}
          borderRadius="md"
          _hover={{ bg: '#E9F5F7', cursor: 'pointer' }}
        >
          {item.icon ? (
            <Icon
              as={item.icon}
              boxSize={4}
              width={'20%'}
            />
          ) : (
            <Text width={'20%'}>&nbsp;</Text>
          )}
          <Box width={'80%'}>
            {item.children ? (
              <Collapsible.Root unmountOnExit>
                <Collapsible.Trigger>
                  <Flex
                    width={'100%'}
                    alignItems={'center'}
                  >
                    <Text fontSize={'xs'}>{item.label}</Text>
                    <Box marginLeft={item.label === 'Admin' ? 20 : 3}>
                      <Icon
                        as={ArrowDown2}
                        size="sm"
                      />
                    </Box>
                  </Flex>
                </Collapsible.Trigger>
                <Collapsible.Content>
                  <Box padding="2">
                    <Text fontSize={'xs'}>No options</Text>
                  </Box>
                </Collapsible.Content>
              </Collapsible.Root>
            ) : (
              <Text
                fontSize={'xs'}
                width={'100%'}
              >
                {item.label}
              </Text>
            )}
          </Box>
        </Flex>
      ))}

      <Box
        paddingY={3}
        paddingX={2}
        backgroundColor={'#F7F7F7'}
        border={'1px solid #CDD6E9'}
        borderRadius="md"
        width={'190px'}
        height={'90px'}
      >
        <Flex
          align="center"
          justify="space-between"
          backgroundColor={'#FFFFFF'}
          paddingX={2}
          paddingY={1}
          borderRadius={'sm'}
        >
          <Flex
            direction="row"
            alignItems={'center'}
            gap={2}
          >
            <ChakraImage
              src={englandFlag.src}
              width={3}
              height={3}
              border={'1px solid #CDD6E9'}
              alt="England Flag"
              borderRadius="full"
            />
            <Text
              fontSize="sm"
              color="gray.500"
            >
              English
            </Text>
          </Flex>

          <Icon
            as={ArrowDown2}
            size="sm"
          />
        </Flex>
        <Flex
          align="center"
          justify="space-between"
          backgroundColor={'#FFFFFF'}
          paddingX={2}
          paddingY={1}
          borderRadius={'sm'}
          marginTop={2}
        >
          <Text
            fontSize="sm"
            color="gray.500"
          >
            Dark mode
          </Text>

          <Switch.Root
            size={'sm'}
            marginLeft={'auto'}
            alignSelf={'end'}
          >
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label />
          </Switch.Root>
        </Flex>
      </Box>
    </Box>
  )
}
