import { Icon } from 'iconsax-reactjs'
export type LinkItem = {
  label: string
  href?: string
  icon?: typeof Icon
  value?: string
  children?: { label: string; href: string }[]
}
