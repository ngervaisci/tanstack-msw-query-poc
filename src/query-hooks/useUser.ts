import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { User } from "./useCreateUser";

const fetchUser = (userId: string) =>
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.data);

// Define a custom hook that will fetch a user.
const useUser = (userId: string) => {
  // Use the useQuery hook to fetch the user.
  const {
    isLoading,
    isSuccess,
    data: user,
    isError,
  } = useQuery<User>(["users", userId], () => fetchUser(userId));

  // Return the results.
  return {
    isLoading,
    isSuccess,
    isError,
    user,
  };
};

export default useUser;
