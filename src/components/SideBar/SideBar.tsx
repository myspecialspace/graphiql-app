import { FC, useState } from 'react';
import { BookIcon } from '../common/icons/BookIcon';
//import { fetchSchema } from '../Aside/fetchSchema';
import { Aside } from '../Aside/Aside';
import { schemaQuery } from '../Aside/schemaQuery';


export const SideBar: FC = () => {
  const [color, setColor] = useState('#9ca3af');
  const [isSchemaOpen, setIsSchemaOpen] = useState(false);
  const [result, setResult] = useState();
  console.log(result);

  const fetchSchema = () => {

    fetch('https://countries.trevorblades.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: schemaQuery,
      variables: {
        now: new Date().toISOString(),
      },
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      setIsSchemaOpen(true);
      console.log(result);
      setResult(result);
      return result;
    });
}

  const handleClick = () => {
    color === '#9ca3af' ? setColor('#1f2937') : setColor('#9ca3af');
    isSchemaOpen === false ? fetchSchema() : setIsSchemaOpen(false);
    
  }
  
  return (
    <div className='flex'>
      <div className='w-12 py-4'>
        <button onClick={() => handleClick()}>
          <BookIcon color={color}/>
        </button>
      </div>
      <Aside isSchemaOpen={isSchemaOpen}/>
    </div>
  );
};