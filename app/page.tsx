'use client'
import { colors } from '@/misc/colors'
import { Box, Button, Flex, Icon, Switch, Text } from '@chakra-ui/react'
import {
  AddCircle,
  ArrowCircleLeft2,
  Calendar,
  ExportCurve,
  Sort,
} from 'iconsax-reactjs'

export default function Home() {
  return (
    <Box
      bg={colors.greyBg}
      paddingX={4}
      paddingY={6}
    >
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        bg={'white'}
        borderRadius={'10px'}
        width={'100%'}
        p={4}
      >
        <Flex
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={8}
        >
          <Flex
            border={'1px solid #CDD6E9'}
            rounded={'full'}
            p={2}
            justifyContent={'center'}
            alignItems={'center'}
            cursor={'pointer'}
          >
            <Icon as={ArrowCircleLeft2} />
          </Flex>
          <Text
            fontWeight={'bold'}
            fontSize={'medium'}
          >
            Afdeling Kwaliteit
          </Text>
        </Flex>

        <Flex
          alignItems={'center'}
          gap={5}
        >
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            width={'46px'}
            height={'46px'}
            borderRadius={'10px'}
            bg={colors.greyBg}
          >
            <Switch.Root
              size={'sm'}
              ml={'2'}
            >
              <Switch.HiddenInput />
              <Switch.Control />
              <Switch.Label />
            </Switch.Root>
          </Flex>
          <Button
            color={'black'}
            width={'46px'}
            height={'46px'}
            borderRadius={'10px'}
            bg={colors.greyBg}
          >
            <Icon
              as={Sort}
              size={'md'}
            />
          </Button>
          <Button
            color={'black'}
            width={'46px'}
            height={'46px'}
            borderRadius={'10px'}
            bg={colors.greyBg}
          >
            <Icon
              as={Calendar}
              size={'md'}
            />
          </Button>
          <Button
            bg={'#41245F'}
            variant="solid"
            rounded={'lg'}
            size={'lg'}
            p={4}
          >
            <Icon as={ExportCurve} /> Export xlsx
          </Button>
          <Button
            bg={'#75C5C1'}
            size={'lg'}
            p={4}
            variant="solid"
            rounded={'lg'}
          >
            <Icon as={AddCircle} /> Add Task
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
