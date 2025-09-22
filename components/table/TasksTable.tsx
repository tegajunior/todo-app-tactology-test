'use client'
import { getPageRange } from '@/misc/helpers'
import { Task } from '@/models/types'
import { Table, Box, Spinner, Flex } from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'

import { colors } from '@/misc/colors'
import TableHeaderComponent from './TableHeaderComponent'
import TableBodyComponent from './TableBodyComponent'
import PaginationComponent from '../PaginationComponent'
import EmptyStateComponent from '../ui/EmptyState'

export default function TaskTable({
  tasksProp,
  updateTaskStatus,
}: {
  tasksProp: Task[]
  updateTaskStatus: (id: string) => void
}) {
  const tasks = tasksProp
  const [page, setPage] = useState<number>(1)
  const [perPage, setPerPage] = useState<number>(5)
  const [loading, setLoading] = useState(false)

  const total = tasks.length
  const totalPages = Math.max(1, Math.ceil(total / perPage))

  const paginated = useMemo(() => {
    const start = (page - 1) * perPage
    return tasks.slice(start, start + perPage)
  }, [tasks, page, perPage])

  useEffect(() => {
    if (page > totalPages) setPage(totalPages)
  }, [totalPages, page])

  const pageNumbers = getPageRange(page, totalPages)

  const handleUpdateStatus = async (id: string) => {
    setLoading(true)
    try {
      await updateTaskStatus(id)
    } finally {
      setTimeout(() => setLoading(false), 600)
    }
  }

  return (
    <Box
      paddingY={6}
      paddingX={6}
      overflow={'hidden'}
      borderRadius={'2xl'}
    >
      {loading && (
        <Flex
          position="absolute"
          inset={0}
          bg="rgba(255, 255, 255, 0.5)"
          justify="center"
          align="center"
          zIndex={5}
          backdropFilter="blur(2px)"
        >
          <Spinner
            size="lg"
            color="teal.500"
            borderWidth="4px"
          />
        </Flex>
      )}
      {tasks.length === 0 ? (
        <EmptyStateComponent />
      ) : (
        <Box
          border={`2px solid ${colors.greyBg}`}
          paddingBottom={6}
          borderRadius={'md'}
        >
          <Table.Root>
            <TableHeaderComponent />
            <TableBodyComponent
              tasksProp={paginated}
              updateTaskStatus={handleUpdateStatus}
            />
          </Table.Root>
          <PaginationComponent
            page={page}
            pageNumbers={pageNumbers}
            perPage={perPage}
            totalPages={totalPages}
            total={total}
            setPage={setPage}
            setPerPage={setPerPage}
          />
        </Box>
      )}
    </Box>
  )
}
