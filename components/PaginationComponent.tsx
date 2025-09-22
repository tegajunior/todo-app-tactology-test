'use client'

import type { Pagination } from '@/models/types'
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  NativeSelect,
  Text,
} from '@chakra-ui/react'
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from 'react-icons/fi'

export default function PaginationComponent({
  page,
  perPage,
  setPage,
  pageNumbers,
  totalPages,
  setPerPage,
}: Pagination) {
  return (
    <Flex
      align="center"
      justifyContent={'space-between'}
      mt={3}
      gap={4}
      px={6}
      py={3}
    >
      {/* page controls */}
      <HStack
        gap={3}
        align="center"
        bg={'gray.100'}
        borderRadius={'3xl'}
        paddingX={2}
        paddingY={1}
      >
        <IconButton
          aria-label="first"
          size="sm"
          onClick={() => setPage(1)}
          disabled={page === 1}
          variant="ghost"
          fontWeight={'bolder'}
        >
          <FiChevronsLeft />
        </IconButton>
        <IconButton
          aria-label="prev"
          size="sm"
          onClick={() => setPage((p: number) => Math.max(1, p - 1))}
          disabled={page === 1}
          variant="ghost"
          fontWeight={'bolder'}
        >
          <FiChevronLeft />
        </IconButton>

        {pageNumbers.map((pn, idx) => {
          const isCurrentPage = Number(pn) === page
          return pn === '...' ? (
            <Box
              key={`dots-${idx}`}
              px={2}
            >
              <Button
                color="#75C5C1"
                fontWeight={'bolder'}
                bg={'white'}
                size={'sm'}
                rounded={'full'}
                border={'1px solid'}
                borderColor={'#75C5C1'}
              >
                …
              </Button>
            </Box>
          ) : (
            <Button
              key={pn}
              size="sm"
              onClick={() => setPage(Number(pn))}
              bg={isCurrentPage ? '#75C5C1' : 'white'}
              color={isCurrentPage ? 'white' : '#75C5C1'}
              rounded={'full'}
              border={'1px solid'}
              borderColor={'#75C5C1'}
              variant={'solid'}
              fontWeight={'bolder'}
            >
              {pn}
            </Button>
          )
        })}

        <IconButton
          aria-label="next"
          size="sm"
          onClick={() => setPage((p: number) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          variant="ghost"
          fontWeight={'bolder'}
        >
          <FiChevronRight />
        </IconButton>
        <IconButton
          aria-label="last"
          size="sm"
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages}
          variant="ghost"
          fontWeight={'bolder'}
        >
          <FiChevronsRight />
        </IconButton>
      </HStack>

      {/* rows per page */}
      <HStack gap={2}>
        <Text
          fontSize="sm"
          color="gray.600"
          fontWeight={'bolder'}
        >
          Rows Per page:
        </Text>
        <Flex
          textAlign={'center'}
          bg="gray.100"
          borderRadius="3xl"
          border={'1px solid'}
          borderColor={'#75C5C1'}
        >
          <NativeSelect.Root
            size="sm"
            width="90px"
            border={'none'}
          >
            <NativeSelect.Field
              value={perPage}
              onChange={(e) => {
                setPerPage(Number(e.target.value))
                setPage(1)
              }}
              border={'none'}
              textAlign={'center'}
              textAlignLast={'center'}
              _focusVisible={{ boxShadow: 'none', border: 'none' }}
              _focus={{ boxShadow: 'none', border: 'none' }}
              _hover={{ border: 'none' }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Flex>
      </HStack>
    </Flex>
  )
}
