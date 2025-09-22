'use client'
import { useState } from 'react'
import { Button, HStack, Badge, Icon, Flex, Text } from '@chakra-ui/react'
import { TickCircle, Status as StatusButIcon, Task } from 'iconsax-reactjs'
import { Status, TabProps, Todo } from '@/models/types'
import { colors } from '@/misc/colors'

const TabButtons: React.FC<TabProps> = ({ onChange, tasks }) => {
  const [active, setActive] = useState<Status>(null)
  const handleClick = (status: Status): void => {
    const newStatus = active === status ? null : status
    setActive(newStatus)
    onChange(newStatus)
  }
  const tabs: Todo[] = [
    {
      key: 'todo',
      label: 'Todo',
      icon: Task,
      count: tasks!.filter((t) => t.status === 'todo').length,
      iconColor: '#CFB7E8',
      badgeColor: '#F9F3FF',
    },
    {
      key: 'ongoing',
      label: 'In progress',
      icon: StatusButIcon,
      count: tasks!.filter((t) => t.status === 'ongoing').length,
      iconColor: '#F6BE38',
      badgeColor: '#FBF4E4',
    },
    {
      key: 'completed',
      label: 'Completed',
      icon: TickCircle,
      count: tasks!.filter((t) => t.status === 'completed').length,
      iconColor: '#75C5C1',
      badgeColor: '#E9F5F7',
    },
  ]
  return (
    <HStack
      gap={4}
      bg={colors.greyBg}
      py={6}
      px={0}
    >
      {tabs.map((tab) => {
        const isActive = active === tab.key
        return (
          <Button
            key={tab.key}
            display={'flex'}
            justifyContent={'space-between'}
            bg={active === tab.key ? tab.iconColor : 'white'}
            onClick={() => handleClick(tab.key as Status)}
            width={'178px'}
            height={'40px'}
            px={2}
          >
            <Flex gap={2}>
              <Icon
                as={tab.icon}
                boxSize={5}
                color={isActive ? 'white' : tab.iconColor}
                // fill={active === tab.key ? 'white' : tab.iconColor}
                // stroke={active === tab.key ? tab.iconColor : 'white'}
              />
              <Text color={active === tab.key ? 'white' : 'blackAlpha.800'}>
                {tab.label}
              </Text>
            </Flex>
            <Badge
              bg={tab.badgeColor}
              p={2}
            >
              ({tab.count})
            </Badge>
          </Button>
        )
      })}
    </HStack>
  )
}

export default TabButtons
