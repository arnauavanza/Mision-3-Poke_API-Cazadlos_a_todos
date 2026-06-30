export interface Pokemon {
  imageUrl: string;
  name: string;
  types: string[];
}

export interface Trainer {
  name: string;
  email: string;
  pokemon?: Pokemon;
  pokemon_assigned: boolean
}

export interface ButtonProps {
  label: string;
  classColor?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}