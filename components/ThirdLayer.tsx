'use client'

import { colors } from '@/misc/colors'
import { Button, Flex, Icon } from '@chakra-ui/react'
import {
  CloseCircle,
  RowHorizontal,
  RowVertical,
  SearchNormal1,
} from 'iconsax-reactjs'
import SearchInput from './ui/SearchInput'
import { useRef, useState } from 'react'

export default function ThirdLayer({
  changeView,
  view,
}: {
  view: string
  changeView: (v: 'table' | 'card') => void
}) {
  const [searchValue, setSearchValue] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const startElement = (
    <Icon
      as={SearchNormal1}
      size="md"
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
      bg={'#E9F5F7'}
      padding={4}
      my={4}
      mx={4}
      borderRadius={'md'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <SearchInput
        startElement={startElement}
        endElement={endElement}
        bg="white"
        width="280px"
        height="46px"
        value={searchValue}
        onChange={(e) => setSearchValue(e.currentTarget.value)}
        placeholder="Search Todo ..."
      />

      <Flex
        alignItems={'center'}
        gap={2}
        bg={'white'}
        borderRadius={'md'}
        p={2}
      >
        <Button
          bg={view === 'table' ? colors.greyBg : '#75C5C1'}
          color={view === 'card' ? 'white' : 'blackAlpha.500'}
          onClick={() => changeView('card')}
        >
          <Icon as={RowHorizontal} />
        </Button>

        <Button
          bg={view === 'table' ? '#75C5C1' : colors.greyBg}
          color={view === 'table' ? 'white' : 'blackAlpha.500'}
          onClick={() => changeView('table')}
        >
          <Icon as={RowVertical} />
        </Button>
      </Flex>
    </Flex>
  )
}
