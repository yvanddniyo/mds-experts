export interface NavLinkProps {
  href?: string;
  label: string;
  description?: string;
  activeLink?: string;
  isActive?: boolean;
  onClick?: () => void;
  scroll?: boolean;
}
