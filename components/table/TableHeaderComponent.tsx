'use client'

import { colors } from '@/misc/colors'
import { Table } from '@chakra-ui/react'

export default function TableHeaderComponent() {
  return (
    <Table.Header>
      <Table.Row
        bg={colors.greyBg}
        borderLeft={`3px solid ${colors.greyBg}`}
      >
        <Table.ColumnHeader
          padding={6}
          fontWeight={'bolder'}
          align="left"
          borderLeft={'1px solid'}
          borderColor={'gray.300'}
        >
          Name
        </Table.ColumnHeader>
        <Table.ColumnHeader
          padding={6}
          fontWeight={'bolder'}
          align="left"
          borderLeft={'1px solid'}
          borderColor={'gray.300'}
        >
          Date
        </Table.ColumnHeader>
        <Table.ColumnHeader
          padding={6}
          fontWeight={'bolder'}
          borderLeft={'1px solid'}
          borderColor={'gray.300'}
        >
          Assignee
        </Table.ColumnHeader>
        <Table.ColumnHeader
          padding={6}
          fontWeight={'bolder'}
          borderLeft={'1px solid'}
          borderColor={'gray.300'}
        >
          Priority
        </Table.ColumnHeader>
        <Table.ColumnHeader
          padding={6}
          textAlign={'right'}
        ></Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
  )
}
