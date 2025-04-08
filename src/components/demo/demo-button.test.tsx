import DemoButton from "@/components/demo/demo-button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

describe("Testing Demo Button Design System", () => {
  it("should render label prop correctly", () => {
    render(<DemoButton label="click me" onClick={() => {}} />);

    // query
    const buttonElement = screen.getByTestId("demo-button");

    // assertion
    expect(buttonElement).toHaveTextContent("click me");
  });

  it("should execute onClick one time when clicked", async () => {
    const mockClick = vi.fn();
    render(<DemoButton label="" onClick={mockClick} />);
    const user = userEvent.setup();

    const buttonElement = screen.getByTestId("demo-button");

    await user.click(buttonElement);
    expect(mockClick).toBeCalled();
  });

  it("should apply correct class (secondary)", () => {
    render(<DemoButton label="" onClick={() => {}} variant="secondary" />);

    const buttonElement = screen.getByTestId("demo-button");

    expect(buttonElement).toHaveClass(
      "bg-gray-200 text-gray-800 hover:bg-gray-300"
    );
  });

  it("should not execute onClick if button is disabled", async () => {
    const mockClick = vi.fn();
    render(<DemoButton label="" onClick={mockClick} disabled />);
    const user = userEvent.setup();

    const buttonElement = screen.getByTestId("demo-button");

    await user.click(buttonElement);
    expect(mockClick).not.toBeCalled();
  });
});
