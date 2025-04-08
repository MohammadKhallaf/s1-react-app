// group of tests ==> greetings component tests

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Greetings from "@/components/demo/greetings";

describe("Testing Greetings Component", () => {
  //  if user not logged in --> name is not sent --> Hello guest!

  it("should render 'Hello guest!' when name is not provided", () => {
    // render -->
    render(<Greetings />);
    //  query -> search
    const foundGreeting = screen.queryByText(/Hello guest!/i);
    // assert --> condition
    expect(foundGreeting).toBeInTheDocument();
  });

  it("should render 'Hello {name}!' when {name} is not provided", () => {
    // render -->
    render(<Greetings title="Marwan" />);
    //  query -> search
    const foundGreeting = screen.queryByText(/Hello Marwan!/i);
    // assert --> condition
    expect(foundGreeting).toBeInTheDocument();
  });
});
