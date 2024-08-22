import UserDisplay from "./components/UserDisplay";
import { useQuery } from "urql";
import { GetUsersDocument } from "./graphql/generated";
import { AddUser } from "./components/AddUser";

function App() {
  const [results] = useQuery({
    query: GetUsersDocument,
  });

  return (
    <div className="bg-zinc-800 h-screen w-screen flex flex-col gap-4 items-center justify-center">
      <div className="add_user_container">
        <AddUser />
      </div>
      <div className="user_name_container">
        {results.data?.users.map((user, index) => (
          <UserDisplay user={user} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
