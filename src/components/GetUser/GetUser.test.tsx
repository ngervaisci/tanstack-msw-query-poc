import { rest } from "msw";
import { test } from "vitest";
import { server } from "../../tests/setupTests";
import { renderWithClient } from "../../tests/utils";
import GetUser from "./GetUser";

describe("GetUser", () => {
  test("if the user is fetched the name is shown", async () => {
    const result = renderWithClient(<GetUser />);
    expect(await result.findByText(/Roger Rabbit/i)).toBeInTheDocument();
  });

  test("if the user fetch fails, show the error message", async () => {
    //Test exclusive override of the server defaults from setupTests.ts
    server.use(
      rest.get("*", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    const result = renderWithClient(<GetUser />);
    expect(
      await result.findByText(/There was an error in fetching the user/i)
    ).toBeInTheDocument();
  });
});
