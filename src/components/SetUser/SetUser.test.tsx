import { test } from "vitest";
import { renderWithClient } from "../../tests/utils";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/dom";
import SetUser from "./SetUser";
import { server } from "../../tests/setupTests";
import { rest } from "msw";

describe("SetUser", () => {
  test("if the user is created show the user name", async () => {
    const result = renderWithClient(<SetUser />);
    userEvent.click(screen.getByRole("button", { name: /Add User/i }));

    expect(await result.findByText(/Harry Potter/i)).toBeInTheDocument();
  });

  test("if the user creation fails, show the error message", async () => {
    //Test exclusive override of the server defaults from setupTests.ts
    server.use(
      rest.post("*", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    const result = renderWithClient(<SetUser />);
    userEvent.click(screen.getByRole("button", { name: /Add User/i }));

    expect(
      await result.findByText(/Could not create User/i)
    ).toBeInTheDocument();
  });
});
