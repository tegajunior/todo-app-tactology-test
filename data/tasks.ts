import { Task } from '@/models/types'

export const SAMPLE: Task[] = [
  {
    id: '1',
    name: 'MKV Intranet V2',
    startDate: '2024-06-04',
    endDate: '2024-06-16',
    assignees: [
      { id: 'a', name: 'Paul', src: 'https://i.pravatar.cc/40?img=8' },
      { id: 'b', name: 'Jane', src: 'https://i.pravatar.cc/40?img=12' },
      { id: 'c', name: 'Sam', src: 'https://i.pravatar.cc/40?img=32' },
    ],
    priority: 'Medium',
    status: 'todo',
  },
  {
    id: '2',
    name: 'Design System',
    startDate: '2024-06-23',
    endDate: '2024-06-24',
    assignees: [
      { id: 'a', name: 'Paul', src: 'https://i.pravatar.cc/40?img=8' },
      { id: 'd', name: 'Alex', src: 'https://i.pravatar.cc/40?img=7' },
    ],
    priority: 'Important',
    status: 'ongoing',
  },
  {
    id: '3',
    name: 'Medical Appointment',
    startDate: '2024-06-16',
    endDate: '2024-06-18',
    assignees: [
      { id: 'e', name: 'Eve', src: 'https://i.pravatar.cc/40?img=10' },
    ],
    priority: 'Urgent',
    status: 'completed',
  },
  ...Array.from({ length: 18 }, (_, i) => ({
    id: `${100 + i}`,
    name: ['MKV Intranet V2', 'Design System', 'Medical Appointment'][i % 3],
    startDate: '2024-06-16',
    endDate: '2024-06-18',
    assignees: [
      { id: `a${i}`, name: 'Pa', src: `https://i.pravatar.cc/40?img=${i + 1}` },
    ],
    priority: ['Medium', 'Important', 'Urgent'][i % 3] as Task['priority'],
    status: ['todo', 'ongoing', 'completed'][i % 3] as Task['status'],
  })),
]
