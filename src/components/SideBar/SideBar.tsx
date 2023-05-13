import { FC, useState } from 'react';
import { BookIcon } from '../common/icons/BookIcon';
import { fetchSchema } from '../Aside/fetchSchema';


export const SideBar: FC = () => {
  const [color, setColor] = useState('#9ca3af');
  const [isSchemaOpen, setIsSchemaOpen] = useState(false);

  const handleClick = () => {
    color === '#9ca3af' ? setColor('#1f2937') : setColor('#9ca3af');
    fetchSchema();
    if (isSchemaOpen === true) setIsSchemaOpen(false);
  }
  
  return (
    <div>
      <button onClick={() => handleClick()}>
        <BookIcon color={color}/>
      </button> 
    </div>
  );
};