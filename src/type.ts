export interface NavLinkProps {
  href?: string;
  label: string;
  description?: string;
  activeLink?: string;
  isActive?: boolean;
  onClick?: () => void;
  scroll?: boolean;
}
export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
}
