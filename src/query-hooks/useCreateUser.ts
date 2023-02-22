import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export type User = { name: string; age: number };

const createUser = (user: User) => {
  return axios
    .post(`https://jsonplaceholder.typicode.com/users`, user)
    .then((response) => response.data);
};

const useCreateUser = () => {
  // Get the query cache
  const queryClient = useQueryClient();

  // Create the mutation https://tanstack.com/query/v4/docs/react/guides/mutations
  const {
    isLoading,
    isError,
    isSuccess,
    mutate: addUser,
    data,
  } = useMutation<User, unknown, User>(createUser, {
    // Update the cache on success
    onSuccess: (data: User) => {
      // Get the id of the new user
      const id = "99999";
      // Set the data for the cache
      queryClient.setQueryData(["users", id], { ...data, id });
    },
    onError: (error) => {
      //ideally this would be a structured log :)
      console.error("Failed to create user:", error);
    },
  });

  return {
    isLoading,
    isError,
    isSuccess,
    addUser,
    data,
  };
};

export default useCreateUser;
