import DemoForm from "@/components/demo/demo-form";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
describe("Testing Demo form components", () => {
  it("should execute 'handleLogin fn' with submission", async () => {
    //
    const loginFn = vi.fn();
    render(<DemoForm handleLogin={loginFn} />);
    const user = userEvent.setup();

    // query
    // const usernameInput = screen.getByLabelText(/username/i);
    // const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button");

    await user.click(submitButton);
    // assert
    expect(loginFn).toBeCalled();
  });

  it("should execute 'handleLogin fn' with submission, with empty username and password if user didn't enter anything", async () => {
    //
    const loginFn = vi.fn();
    render(<DemoForm handleLogin={loginFn} />);
    const user = userEvent.setup();

    // query
    // const usernameInput = screen.getByLabelText(/username/i);
    // const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button");

    await user.click(submitButton);
    // assert
    expect(loginFn).toBeCalledWith({
      username: "",
      password: "",
    });
  });

  it("should execute 'handleLogin fn' with submission, with entered username and password", async () => {
    //
    const loginFn = vi.fn();
    render(<DemoForm handleLogin={loginFn} />);
    const user = userEvent.setup();

    const username = "ahmed";
    const password = "pass!@#";
    // query
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button");

    await user.type(usernameInput, username);
    await user.type(passwordInput, password);

    await user.click(submitButton);
    // assert
    expect(loginFn).toBeCalledWith({
      username: username,
      password: password,
    });
  });
});
