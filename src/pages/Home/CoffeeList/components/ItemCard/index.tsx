import { ItemCardContainer } from './styles';

interface ItemCardProps {
  children: React.ReactNode;
}

export function ItemCard({ children }: ItemCardProps) {
  return <ItemCardContainer>{children}</ItemCardContainer>;
}
