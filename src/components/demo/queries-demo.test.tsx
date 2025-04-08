import QueriesDemo from "@/components/demo/queries-demo";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

describe("Testing Queries Demo component", () => {
  beforeEach(() => {
    render(<QueriesDemo />);
  });

  it("should render a button", () => {
    //  query

    const buttonElement = screen.queryByRole("button");

    // assert

    expect(buttonElement).toBeInTheDocument();
  });

  it("should render a heading with title 'Hello'", () => {
    //  query

    const headingElement = screen.getByRole("heading", {
      name: /Hello/i,
    });

    // assert

    expect(headingElement).toBeInTheDocument();
  });

  it('should find a label in the component with text "Username"', () => {
    // query
    const labelElement = screen.queryByLabelText(/UserName/i);
    // assert
    expect(labelElement).toBeInTheDocument();
  });

  it("should render 'please enter your username' in the placeholder", () => {
    // query
    const placeholderElement = screen.queryByPlaceholderText(
      /please enter your username/i
    );
    // assert
    expect(placeholderElement).toBeInTheDocument();
  });

  it('should include testid ==> "comp-footer"', () => {
    const footer = screen.queryByTestId("comp-footer");

    expect(footer).toBeInTheDocument();
  });
});
