export interface NavLinkProps {
  href?: string
  label: string
  description?: string
  isActive?: boolean
  onClick?: () => void
  scroll?: boolean
}