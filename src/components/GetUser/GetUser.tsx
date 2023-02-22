import useUser from "../../query-hooks/useUser";

const GetUser = () => {
  const { isLoading, isSuccess, isError, user } = useUser("3");
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <p>There was an error in fetching the user</p>}
      {isSuccess && <p>{user?.name}</p>}
    </>
  );
};

export default GetUser;
