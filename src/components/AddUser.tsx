import { useState } from "react";
// import { User } from "../types";

const initState = {
  userName: "",
  userMessage: "",
};

export const AddUser = () => {
  const [newUser, setNewUser] = useState<{
    userName: string;
    userMessage: string;
  }>(initState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({
      ...initState,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("here");
    console.log(e.target);
  };

  console.log(newUser);

  return (
    <div className="addUserBtn bg-white">
      <form className="flex flex-row gap-2 p-8" onSubmit={handleSubmit}>
        <input
          name="userName"
          type="text"
          placeholder="name"
          value={newUser.userName}
          onChange={handleChange}
          className="border-2 border-rose-300 p-2"
        />
        <input
          name="userMessage"
          type="text"
          placeholder="message"
          value={newUser.userMessage}
          onChange={handleChange}
          className="border-2 border-rose-300 p-2"
        />
        <button className="bg-red-300 p-5" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};
