import { FC, useState, lazy, Suspense, useEffect } from 'react';
import { BookIcon } from '../common/icons/BookIcon';
import { schemaQuery } from '../Aside/schemaQuery';
import { IntrospectionSchema } from 'graphql';
import classNames from 'classnames';
import Loader from '../Loader/Loader';
import { api } from '@/api';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { mainSlice } from '@/store/slices/main';

const Aside = lazy(() => import('../Aside/Aside'));

export const SideBar: FC = () => {
  const [schema, setSchema] = useState<IntrospectionSchema>();
  const { url, isDocsOpen } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (url) {
      dispatch(mainSlice.actions.setIsDocsOpen(false));
      setSchema(undefined);
    }
  }, [url, dispatch]);

  const fetchSchema = () => {
    api(url, {
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
        dispatch(mainSlice.actions.setIsDocsOpen(true));
        setSchema(result.data.__schema);
      });
  };

  const handleClick = () => {
    if (!isDocsOpen) {
      fetchSchema();
    } else {
      dispatch(mainSlice.actions.setIsDocsOpen(false));
    }
  };

  return (
    <div
      className={classNames('flex flex-col sm:flex-row overflow-hidden', {
        'sm:w-1/3': isDocsOpen,
      })}
    >
      <div className="w-12 pt-4 shrink-0">
        <button onClick={() => handleClick()}>
          <BookIcon color={isDocsOpen ? '#1f2937' : '#9ca3af'} />
        </button>
      </div>

      {isDocsOpen && (
        <Suspense fallback={<Loader />}>
          <Aside schema={schema!} />
        </Suspense>
      )}
    </div>
  );
};
