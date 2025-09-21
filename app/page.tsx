'use client'
import { colors } from '@/misc/colors'
import { Box, Button, Flex, Icon, Switch, Text } from '@chakra-ui/react'
import {
  AddCircle,
  ArrowCircleLeft2,
  Calendar,
  Export,
  ExportCircle,
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
          border={'1px solid red'}
        >
          <Flex
            border={'1px solid #CDD6E9'}
            rounded={'full'}
            p={2}
            justifyContent={'center'}
            alignItems={'center'}
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
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            width={'46px'}
            height={'46px'}
            borderRadius={'10px'}
            bg={colors.greyBg}
          >
            <Icon
              as={Sort}
              size={'md'}
            />
          </Flex>
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            width={'46px'}
            height={'46px'}
            borderRadius={'10px'}
            bg={colors.greyBg}
          >
            <Icon
              as={Calendar}
              size={'md'}
            />
          </Flex>
          <Button
            colorPalette="#41245F"
            variant="solid"
            size={'lg'}
            p={4}
          >
            <Icon as={ExportCurve} /> Export xlsx
          </Button>
          <Button
            colorPalette="teal"
            variant="solid"
          >
            Call us <Icon as={AddCircle} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
