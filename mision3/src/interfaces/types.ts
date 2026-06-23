interface Pokemon {
  imageUrl: string;
  name: string;
  types: string[];
}

interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}
export type { Pokemon, ButtonProps };