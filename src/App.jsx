import { gql, useQuery } from "@apollo/client";

const GET_TODOS_WITH_USER = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
        email
        website
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_TODOS_WITH_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {data.getTodos.slice(1,6).map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
            <h3>User Details:</h3>
            <p>Name: {todo.user.name}</p>
            <p>Email: {todo.user.email}</p>
            <p>Website: {todo.user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
