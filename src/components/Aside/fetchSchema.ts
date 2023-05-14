import { schemaQuery } from './schemaQuery';


export const fetchSchema = () => {

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
      console.log(result);
      return result;
    });
}