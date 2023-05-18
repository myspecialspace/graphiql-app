import { FC } from 'react';
import { IntrospectionField } from 'graphql';
import { FieldType } from '../FieldType/FieldType';

// отдельный  компонент с филдами принимает 1 филд
export const DocItemField: FC<{ field: IntrospectionField }> = ({ field }) => {
  return (
    <div className="flex whitespace-nowrap">
      <span className="cursor-pointer text-sky-600 hover:underline">
        {field.name}
      </span>
      <span className="flex">
        (
        <span>
          {field.args.map((arg) => (
            <span className="text-rose-500" key={arg.name}>
              {arg.name}
            </span>
          ))}
          <span>: </span>
          {field.args.map((arg) => (
            <span key={arg.name}>{<FieldType type={arg.type} />} </span>
          ))}
          {field.args.map((arg) => (
            <span key={arg.name}>{arg.defaultValue == null ? '' : ' = '}</span>
          ))}

          {field.args.map((arg) => (
            <span className="text-green-500" key={arg.name}>
              {arg.defaultValue == null ? '' : arg.defaultValue}
            </span>
          ))}
        </span>
        )
      </span>
      <span>
        : <FieldType type={field.type} />
      </span>
    </div>
  );
};
