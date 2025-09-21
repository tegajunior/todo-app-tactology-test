'use client'
import { colors } from '@/misc/colors'
import {
  Box,
  Flex,
  Text,
  Avatar,
  InputGroup,
  Input,
  Icon,
  Image,
  Collapsible,
  Button,
} from '@chakra-ui/react'
import {
  ArrowDown2,
  CloseCircle,
  Link1,
  Notification,
  SearchNormal1,
} from 'iconsax-reactjs'
import { useRef, useState } from 'react'
import yellowImg from '@/assets/images/yellowimg.png'
import coloredSetting from '@/assets/images/coloredSettings.png'
import threeCX from '@/assets/images/3CX.png'
import redE from '@/assets/images/redE.png'

const images2nd = [
  { source: yellowImg, width: '30px', height: '26px' },
  { source: coloredSetting, width: '25px', height: '25px' },
  { source: threeCX, width: '30px', height: '12px' },
  { source: redE, width: '25px', height: '25px' },
]

export default function TopBar() {
  const [searchValue, setSearchValue] = useState('M91')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const startElement = (
    <Icon
      as={SearchNormal1}
      size="sm"
      ml={1.5}
    />
  )

  const endElement = searchValue ? (
    <Icon
      as={CloseCircle}
      size="sm"
      mr={1.5}
      cursor={'pointer'}
      onClick={() => {
        setSearchValue('')
        inputRef.current?.focus()
      }}
    />
  ) : undefined
  return (
    <Flex
      px={4}
      py={6}
      bg="white"
      shadow="sm"
      borderBottom={'1px solid #CDD6E9'}
    >
      <Flex
        as="header"
        w="100%"
        align="center"
        gap={4}
        wrap="wrap"
      >
        <InputGroup
          startElement={startElement}
          endElement={endElement}
          width={'180px'}
          height={'46px'}
          bg={colors.greyBg}
          border={'1px solid #CDD6E9'}
          borderRadius={'8px'}
        >
          <Input
            ref={inputRef}
            value={searchValue}
            border={'none'}
            padding={1}
            onChange={(e) => {
              setSearchValue(e.currentTarget.value)
            }}
          />
        </InputGroup>
        <Box
          width={'180px'}
          height={'46px'}
        >
          <Flex
            alignItems={'center'}
            gap={3}
          >
            {images2nd.map((img, index) => (
              <Button
                key={index}
                p={1}
                borderRadius={'10px'}
                border={'1px solid #EEF1F9'}
                bg={'inherit'}
                cursor={'pointer'}
              >
                <Image
                  src={img.source.src}
                  width={img.width}
                  height={img.height}
                  alt={`Image ${index + 1}`}
                />
              </Button>
            ))}
          </Flex>
        </Box>
        <Box
          width={'368px'}
          height={'46px'}
          borderRadius={'10px'}
          padding={1}
          border={'1px solid #EEF1F9'}
          ml={4}
        >
          <Flex
            alignItems={'center'}
            gap={3}
            fontSize={'small'}
          >
            <Flex
              width={'120px'}
              height={'38px'}
              bg={'#41245F'}
              borderRadius={'10px'}
              alignItems={'center'}
              justifyContent={'center'}
              cursor={'pointer'}
            >
              <Text color={'white'}>Melding maken</Text>
            </Flex>
            <Flex
              width={'46px'}
              height={'38px'}
              bg={'#75C5C1'}
              borderRadius={'10px'}
              alignItems={'center'}
              justifyContent={'center'}
              cursor={'pointer'}
            >
              <Text color={'white'}>VIM</Text>
            </Flex>
            <Flex
              width={'46px'}
              height={'38px'}
              bg={'#75C5C1'}
              borderRadius={'10px'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Text color={'white'}>LMS</Text>
            </Flex>
            <Flex
              width={'46px'}
              height={'38px'}
              bg={'#75C5C1'}
              borderRadius={'10px'}
              alignItems={'center'}
              justifyContent={'center'}
              cursor={'pointer'}
            >
              <Text color={'white'}>BHV</Text>
            </Flex>
            <Flex
              width={'75px'}
              height={'38px'}
              bg={'#75C5C1'}
              borderRadius={'10px'}
              alignItems={'center'}
              justifyContent={'center'}
              cursor={'pointer'}
            >
              <Text color={'white'}>Datalek</Text>
            </Flex>
          </Flex>
        </Box>
        <Flex
          width={'40px'}
          height={'46px'}
          bg={colors.greyBg}
          borderRadius={'10px'}
          border={'1px solid #EEF1F9'}
          alignItems={'center'}
          justifyContent={'center'}
          cursor={'pointer'}
        >
          <Icon as={Link1} />
        </Flex>
      </Flex>
      <Flex
        alignContent={'center'}
        gap={3}
      >
        <Flex
          width={'40px'}
          height={'46px'}
          bg={colors.greyBg}
          borderRadius={'100%'}
          border={'1px solid #EEF1F9'}
          alignItems={'center'}
          justifyContent={'center'}
          cursor={'pointer'}
        >
          <Icon as={Notification} />
        </Flex>
        <Flex
          width={'100px'}
          height={'46px'}
          alignItems={'center'}
          gap={1}
        >
          <Avatar.Root size={'sm'}>
            <Avatar.Fallback name="Segun Adebayo" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
          </Avatar.Root>
          <Collapsible.Root unmountOnExit>
            <Collapsible.Trigger>
              <Flex
                width={'100%'}
                alignItems={'center'}
                gap={1}
                cursor={'pointer'}
              >
                <Text fontSize={'xs'}>Hi Paul</Text>
                <Icon
                  as={ArrowDown2}
                  size={'xs'}
                  fontWeight={'extrabold'}
                />
              </Flex>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Box padding="2">
                <Text fontSize={'xs'}>No options</Text>
              </Box>
            </Collapsible.Content>
          </Collapsible.Root>
        </Flex>
      </Flex>
    </Flex>
  )
}
