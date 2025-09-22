import { HStack } from '@chakra-ui/react'
import TodoTaskBoard from './TodoTaskBoard'
import InProgressTaskBoard from './InProgressTaskBoard'
import CompletedTaskBoard from './CompletedTaskBoard'
import { Task } from '@/models/types'

const TaskBoard = ({ taskProps }: { taskProps: Task[] }) => {
  const todoTasks = taskProps?.filter((t) => t.status === 'todo')
  const inProgressTasks = taskProps?.filter((t) => t.status === 'ongoing')
  const completedTasks = taskProps?.filter((t) => t.status === 'completed')
  return (
    <HStack
      align="flex-start"
      p={4}
      gap={6}
    >
      <TodoTaskBoard tasks={todoTasks} />
      <InProgressTaskBoard tasks={inProgressTasks} />
      <CompletedTaskBoard tasks={completedTasks} />
    </HStack>
  )
}

export default TaskBoard
