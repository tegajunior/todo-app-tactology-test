'use client'
import Image from 'next/image'
import {
  Box,
  Text,
  Icon,
  Flex,
  Switch,
  Collapsible,
  Image as ChakraImage,
} from '@chakra-ui/react'
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

import logo from '@/assets/images/logo.png'
import englandFlag from '@/assets/images/englandFlag.jpg'
import { LinkItem } from '@/models/types'

const links: LinkItem[] = [
  { label: 'Home', icon: Category, href: '/' },
  { label: 'MKVanBinnen', icon: Stickynote, href: '/mk-van-binnen' },
  { label: 'Document Management', icon: Folder2, href: '/document-management' },
  { label: 'Patient Information', icon: People, href: '/patient-information' },
  { label: 'Agenda', icon: Note, href: '/agenda' },
  { label: 'My Department', icon: Task, href: '/department' },
  { label: 'News', icon: undefined, href: '/department/news' },
  { label: 'Members', icon: undefined, href: '/department/members' },
  { label: 'Todo', icon: undefined, href: '/department/todo' },
  { label: 'Form Task', icon: undefined, href: '/department/form-task' },
  { label: 'Agenda', icon: undefined, href: '/department/agenda' },
  {
    label: 'Follow up system',
    icon: undefined,
    href: '/department/follow-up-system',
  },
  { label: 'Group Settings', icon: undefined, children: [] },
  { label: 'Phone numbers', icon: Call },
  { label: 'My todo Protocols', icon: TaskSquare },
  { label: 'My Notifications', icon: NotificationBing },
  { label: 'Knowledge Base', icon: MenuBoard },
  { label: 'Super Admin', icon: MessageEdit },
  { label: 'Admin', icon: Edit, children: [] },
  { label: 'Agenda', icon: undefined },
  { label: 'News', icon: undefined },
  { label: 'Poll', icon: undefined },
  { label: 'Department Rules', icon: undefined },
  { label: 'Follow up system', icon: undefined },
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
      borderRight={'none'}
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
              size="sm"
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
