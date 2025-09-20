'use client'
import Image from 'next/image'
import { Box, Text, Icon, Flex, Switch } from '@chakra-ui/react'
import {
  ArrowLeft,
  Category,
  Stickynote,
  Folder2,
  People,
  Note,
  Task,
  ArrowDown2,
  Call,
  TaskSquare,
  NotificationBing,
  MenuBoard,
  MessageEdit,
  Edit,
} from 'iconsax-reactjs'
import { Image as ChakraImage } from '@chakra-ui/react'

import logo from '@/assets/images/logo.png'
import englandFlag from '@/assets/images/englandFlag.jpg'

const links = [
  { label: 'Home', icon: Category },
  { label: 'MKVanBinnen', icon: Stickynote },
  { label: 'Document Management', icon: Folder2 },
  { label: 'Patient Information', icon: People },
  { label: 'Agenda', icon: Note },
  { label: 'My Department', icon: Task },
  { label: 'News', icon: null },
  { label: 'Members', icon: null },
  { label: 'Todo', icon: null },
  { label: 'Form Task', icon: null },
  { label: 'Agenda', icon: null },
  { label: 'Follow up system', icon: null },
  { label: 'Settings', icon: null, iconRight: ArrowDown2 },
  { label: 'Phone numbers', icon: Call },
  { label: 'My todo Protocols', icon: TaskSquare },
  { label: 'My Notifications', icon: NotificationBing },
  { label: 'Knowledge Base', icon: MenuBoard },
  { label: 'Super Admin', icon: MessageEdit },
  { label: 'Admin', icon: Edit, iconRight: ArrowDown2 },
  { label: 'Agenda', icon: null },
  { label: 'News', icon: null },
  { label: 'Poll', icon: null },
  { label: 'Department Rules', icon: null },
  { label: 'Follow up system', icon: null },
]

export default function Sidebar() {
  return (
    <Box
      as="aside"
      w={{ base: 'full', md: 60 }}
      bg="white"
      shadow="md"
      h="100vh"
      paddingX={4}
      paddingY={6}
      position={{ base: 'relative', md: 'fixed' }}
      overflow={'auto'}
    >
      <Flex
        direction="row"
        align="center"
        mb={2}
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
      {links.map((item) => (
        <Flex
          key={item.label}
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
              size="sm"
              width={'20%'}
            />
          ) : (
            <Text width={'20%'}>&nbsp;</Text>
          )}
          <Flex
            textAlign={'left'}
            width={'80%'}
            alignItems={'center'}
          >
            <Text fontSize={'xs'}>{item.label}</Text>
            {item.iconRight && (
              <Icon
                as={item.iconRight}
                size="sm"
                marginLeft={item.label === 'Admin' ? 'auto' : 3}
              />
            )}
          </Flex>
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
          direction="row"
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
            spaceX={2}
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
          direction="row"
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
