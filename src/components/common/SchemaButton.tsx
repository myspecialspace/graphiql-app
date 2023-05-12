import { FC } from 'react';

interface LinkProps {
    text: string;
    onClick: () => void;
  }
  
  export const SchemaButton: FC<LinkProps> = ({ text, onClick }) => {
    return <button className='text-amber-500 font-semibold hover:underline' onClick={onClick}>{text}</button>
  };

