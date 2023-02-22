import useCreateUser, { User } from "../../query-hooks/useCreateUser";
const SetUser = () => {
  const { isError, isLoading, isSuccess, data, addUser } = useCreateUser();

  return (
    <>
      <button onClick={() => addUser({ name: "Jackie JazzRabbit", age: 50 })}>
        Add User
      </button>
      {isError && <p>Could not create User</p>}
      {isSuccess && <p>{data?.name}</p>}
      {isLoading && <p>Creating User...</p>}
    </>
  );
};

export default SetUser;
