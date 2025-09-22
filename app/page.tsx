'use client'
import SecondLayer from '@/components/SecondLayer'
import TabButtons from '@/components/TabButtons'
import TaskBoard from '@/components/task-board/TaskBoard'
import TaskTable from '@/components/table/TasksTable'
import ThirdLayer from '@/components/ThirdLayer'
import { SAMPLE } from '@/data/tasks'
import { colors } from '@/misc/colors'
import { Task } from '@/models/types'
import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const [taskView, setTasksView] = useState<'table' | 'card'>('table')

  //Get tasks from localStorage or from constant data
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : SAMPLE
  })

  //Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const filteredTasks = activeTab
    ? tasks.filter((task) => task.status === activeTab)
    : tasks

  const updateTaskStatus = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: 'completed' } : task
      )
    )
  }

  return (
    <Box
      bg={colors.greyBg}
      paddingX={4}
      paddingY={6}
    >
      <Box
        bg={'white'}
        borderRadius={'10px'}
        width={'100%'}
      >
        <SecondLayer />
        <ThirdLayer
          view={taskView}
          changeView={setTasksView}
        />
        {taskView === 'table' ? (
          <Box>
            <TabButtons
              onChange={setActiveTab}
              tasks={tasks}
            />
            <TaskTable
              tasksProp={filteredTasks}
              updateTaskStatus={updateTaskStatus}
            />
          </Box>
        ) : (
          <TaskBoard taskProps={tasks} />
        )}
      </Box>
    </Box>
  )
}
