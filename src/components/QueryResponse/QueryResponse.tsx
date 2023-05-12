interface QueryResponseProps {
  response: string;
}

const QueryResponse = ({ response }: QueryResponseProps) => {
  return (
    <textarea
      name=""
      id=""
      cols={100}
      rows={10}
      defaultValue={response}
      readOnly
    />
  );
};

export default QueryResponse;
