import { FC, useState, lazy, Suspense } from 'react';
import { BookIcon } from '../common/icons/BookIcon';
import { schemaQuery } from '../Aside/schemaQuery';
import { IntrospectionSchema } from 'graphql';
import classNames from 'classnames';
import Loader from '../Loader/Loader';
import { api } from '@/api';

const Aside = lazy(() => import('../Aside/Aside'));

export const SideBar: FC = () => {
  const [color, setColor] = useState('#9ca3af');
  const [isSchemaOpen, setIsSchemaOpen] = useState(false);
  const [schema, setSchema] = useState<IntrospectionSchema>(); // кладем схему

  const fetchSchema = () => {
    api('https://countries.trevorblades.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        query: schemaQuery,
        variables: {
          now: new Date().toISOString(),
        },
      }),
    })
      .then((res) => res.data)
      .then((result) => {
        setIsSchemaOpen(true);
        setSchema(result.data.__schema); // положили дату
      });
  };

  const handleClick = () => {
    color === '#9ca3af' ? setColor('#1f2937') : setColor('#9ca3af');
    isSchemaOpen === false ? fetchSchema() : setIsSchemaOpen(false);
  };

  return (
    <div className={classNames('flex', { 'w-1/3': isSchemaOpen })}>
      <div className="w-12 py-4 shrink-0">
        <button onClick={() => handleClick()}>
          <BookIcon color={color} />
        </button>
      </div>

      {isSchemaOpen && (
        <Suspense fallback={<Loader />}>
          <Aside schema={schema!} />
        </Suspense>
      )}
    </div>
  );
};
