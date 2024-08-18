import UserDisplay from "./components/UserDisplay";
import { User } from "./types";

function App() {
  const users: User[] = [
    {
      name: "Viktor Myasnikov",
      messages: [
        {
          body: "First message text",
        },
        {
          body: "Second message text",
        },
      ],
    },
    {
      name: "Maxim Gingold",
      messages: [
        {
          body: "Text for dogs",
        },
      ],
    },
  ];

  return (
    <div className="bg-zinc-800 h-screen w-screen flex items-center justify-center">
      <div className="user_name_container">
        {users.map((user, index) => (
          <UserDisplay user={user} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
