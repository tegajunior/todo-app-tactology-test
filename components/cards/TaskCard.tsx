import { formatRange } from '@/misc/helpers'
import { Task } from '@/models/types'
import Image from 'next/image'
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  Flex,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react'
import { ProfileCircle } from 'iconsax-reactjs'
import { SlCalender } from 'react-icons/sl'

import MediumImage from '@/assets/svg/mediumFlag.svg'
import ImportantImage from '@/assets/svg/importantFlag.svg'
import UrgentImage from '@/assets/svg/urgentFlag.svg'

export default function TaskCard({ taskProps }: { taskProps: Task }) {
  return (
    <Box>
      <Card.Root size="sm">
        <Card.Header padding={2}>
          <Heading size="xs">{taskProps.name}</Heading>
        </Card.Header>
        <Card.Body
          color="gray.500"
          fontSize={'xs'}
        >
          <Flex
            alignItems={'center'}
            gap={5}
            padding={2}
          >
            <Icon as={SlCalender} />
            <Text>{formatRange(taskProps.startDate, taskProps.endDate)}</Text>
          </Flex>
          <Flex
            alignItems={'center'}
            gap={5}
            padding={2}
          >
            <Icon
              as={ProfileCircle}
              size={'sm'}
            />
            <AvatarGroup
              size="2xs"
              gap={0}
            >
              {taskProps.assignees.map((a, i) => {
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
                        +{taskProps.assignees.length - 2}
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
          </Flex>
          <Flex
            alignItems={'center'}
            gap={5}
            padding={2}
          >
            <Image
              src={
                taskProps.priority === 'Important'
                  ? ImportantImage
                  : taskProps.priority === 'Medium'
                  ? MediumImage
                  : taskProps.priority === 'Urgent'
                  ? UrgentImage
                  : undefined
              }
              alt={taskProps.priority}
              width={15}
              height={20}
            />
            <Text>{[taskProps.priority]}</Text>
          </Flex>
        </Card.Body>
      </Card.Root>
    </Box>
  )
}
