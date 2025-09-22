import { useEffect, useState } from 'react'
import { Task } from '@/models/types'

export default function useTasks(initialTasks: Task[]) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem('tasks')
    return stored ? JSON.parse(stored) : initialTasks
  })
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return { tasks, setTasks }
}
