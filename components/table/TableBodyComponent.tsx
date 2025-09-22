'use client'

import { SAMPLE } from '@/data/tasks'
import { formatRange } from '@/misc/helpers'
import { Task } from '@/models/types'
import { Avatar, AvatarGroup, HStack, Table, Text } from '@chakra-ui/react'
import Image from 'next/image'

import MediumFlag from '@/assets/svg/mediumFlag.svg'
import ImportantFlag from '@/assets/svg/importantFlag.svg'
import UrgentFlag from '@/assets/svg/urgentFlag.svg'
import TableMenu from './TableMenu'

export default function TableBodyComponent({
  tasksProp,
  updateTaskStatus,
}: {
  tasksProp?: Task[]
  updateTaskStatus: (id: string) => void
}) {
  const paginated = tasksProp ?? SAMPLE
  return (
    <Table.Body>
      {paginated.map((t) => (
        <Table.Row key={t.id}>
          <Table.Cell
            padding={6}
            fontSize="sm"
          >
            {t.name}
          </Table.Cell>

          <Table.Cell padding={6}>
            <Text
              fontSize="sm"
              color="gray.600"
            >
              {formatRange(t.startDate, t.endDate)}
            </Text>
          </Table.Cell>

          <Table.Cell padding={6}>
            <AvatarGroup
              size="sm"
              gap={0}
            >
              {t.assignees.map((a, i) => {
                if (i + 1 > 2) {
                  return (
                    <Avatar.Root
                      variant="solid"
                      key={a.id}
                      size={'2xs'}
                      bg={'#F6ECFF'}
                      color={'blackAlpha.700'}
                    >
                      <Avatar.Fallback>
                        +{t.assignees.length - 2}
                      </Avatar.Fallback>
                    </Avatar.Root>
                  )
                } else {
                  return (
                    <Avatar.Root
                      key={a.id}
                      size={'2xs'}
                    >
                      <Avatar.Fallback name={a.name} />
                      <Avatar.Image src={a.src} />
                    </Avatar.Root>
                  )
                }
              })}
            </AvatarGroup>
          </Table.Cell>

          <Table.Cell padding={6}>
            {' '}
            <HStack
              alignItems="center"
              gap={3}
            >
              <Image
                src={
                  t.priority === 'Medium'
                    ? MediumFlag
                    : t.priority === 'Important'
                    ? ImportantFlag
                    : t.priority === 'Urgent'
                    ? UrgentFlag
                    : undefined
                }
                width={20}
                height={20}
                alt={'Priority'}
              />
              <Text
                fontSize="sm"
                color="gray.700"
              >
                {t.priority}
              </Text>
            </HStack>
          </Table.Cell>

          <Table.Cell
            textAlign="right"
            padding={6}
          >
            <TableMenu
              updateTaskStatus={updateTaskStatus}
              task={t}
            />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  )
}
