import { Task } from '@/models/types'
import {
  Badge,
  Box,
  Flex,
  Icon,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Task as IconTask } from 'iconsax-reactjs'
import { AiOutlinePlus } from 'react-icons/ai'
import TaskCard from '../cards/TaskCard'

export default function TodoTaskBoard({ tasks }: { tasks: Task[] }) {
  return (
    <Box
      borderRadius="xl"
      minW="300px"
      bg={'gray.100'}
      p={1}
    >
      <Flex
        align="center"
        justifyContent={'space-between'}
        bg={'#F9F3FF'}
        padding={1}
      >
        <Flex
          alignItems={'center'}
          gap={3}
        >
          <Flex
            alignItems={'center'}
            bg={'white'}
            paddingX={2}
            paddingY={1}
            gap={2}
            borderRadius={'sm'}
          >
            <Icon
              as={IconTask}
              aria-label="Column icon"
              rounded={'full'}
              color={'#CFB7E8'}
              size="sm"
              _hover={{ bg: 'transparent' }}
            />

            <Text fontSize="sm">Todo</Text>
          </Flex>
          <Badge
            bg={'white'}
            padding={2}
            borderRadius="md"
            fontSize="sm"
          >
            ({tasks.length})
          </Badge>
        </Flex>

        <IconButton
          aria-label="Add Task"
          size="xs"
          bg={'white'}
          p={1}
          variant="ghost"
          ml="auto"
          borderRadius="md"
        >
          <AiOutlinePlus />
        </IconButton>
      </Flex>
      <VStack
        gap={2}
        align="stretch"
      >
        {tasks?.map((task) => (
          <TaskCard
            key={task.id}
            taskProps={task}
          />
        ))}

        <Flex
          alignItems={'center'}
          bg={'white'}
          width={'full'}
          gap={5}
          cursor={'pointer'}
          p={3}
          borderRadius={'md'}
        >
          <Icon as={AiOutlinePlus} />
          <Text>Add Task</Text>
        </Flex>
      </VStack>
    </Box>
  )
}
