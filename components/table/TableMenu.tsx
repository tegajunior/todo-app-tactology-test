import { Task } from '@/models/types'
import { IconButton, Menu, Portal } from '@chakra-ui/react'
import { FiMoreHorizontal } from 'react-icons/fi'

export default function TableMenu({
  task,
  updateTaskStatus,
}: {
  task: Task
  updateTaskStatus: (id: string) => void
}) {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <IconButton
          variant="ghost"
          size="sm"
          bg={'gray.50'}
          padding={1}
        >
          <FiMoreHorizontal />
        </IconButton>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item
              value="new-txt-a"
              padding={3}
              disabled={task.status !== 'todo'}
              onClick={() => updateTaskStatus(task.id)}
            >
              {task.status === 'todo'
                ? 'move to completed'
                : task.status === 'completed'
                ? 'completed'
                : 'in progress'}
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
