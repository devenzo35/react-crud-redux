import { Button, Card, Title } from "@tremor/react";
import { FormEvent } from "react";
import { useUserActions } from "../hooks/UseUsersActions";

const AddUserForm = () => {
  const { addNewUser } = useUserActions();

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;
    console.log(name, email, github);
    addNewUser({ name, email, github });
    console.log(name, email, github);
  };
  return (
    <>
      <Card>
        <Title>Add user</Title>
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-3">
          <input
            className="bg-blue-900 text-white placeholder-white p-2 rounded-sm"
            type="text"
            name="name"
            color="white"
            placeholder="Insert user name"
          ></input>
          <input
            className="bg-blue-900 text-white placeholder-white p-2 rounded-sm"
            type="text"
            name="email"
            placeholder="Insert user email"
          ></input>
          <input
            className="bg-blue-900 text-white placeholder-white p-2 rounded-sm"
            type="text"
            name="github"
            placeholder="Insert user github"
          ></input>
          <Button color="blue">Submit</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUserForm;
