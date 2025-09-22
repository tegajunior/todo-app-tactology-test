import { Icon } from 'iconsax-reactjs'
import { ReactNode } from 'react'
export type LinkItem = {
  label: string
  href?: string
  icon?: typeof Icon
  value?: string
  children?: { label: string; href: string }[]
}
export type SearchInputTypes = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  startElement?: ReactNode
  endElement?: ReactNode
  bg: string
  width?: string
  height?: string
}

export type Status = 'todo' | 'ongoing' | 'completed' | null
export interface TabProps {
  counts?: { todo: number; ongoing: number; completed: number }
  onChange: (status: Status) => void
  tasks: Task[]
}

export type Todo = {
  label: string
  key: string
  icon: typeof Icon
  count: number
  iconColor: string
  badgeColor: string
}

export type Assignee = {
  id: string
  name: string
  src?: string
}

export type Task = {
  id: string
  name: string
  startDate: string
  endDate: string
  assignees: Assignee[]
  priority: 'Medium' | 'Important' | 'Urgent'
  status: Status
}
export type Pagination = {
  page: number
  perPage: number
  total: number
  setPage: (p: number | any) => void
  setPerPage: (n: number) => void
  pageNumbers: (number | '...')[]
  totalPages: number
}
