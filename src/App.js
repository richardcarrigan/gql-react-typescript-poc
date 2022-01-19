import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
  query Query {
    hello
  }
`;

function App() {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>My Apollo Client app</h2>
      <p>{data.hello}</p>
    </div>
  );
}

export default App;
