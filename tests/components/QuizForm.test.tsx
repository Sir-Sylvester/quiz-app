import { render, fireEvent, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import QuizForm from "../../src/components/QuizForm";
import React from "react";

describe("QuizForm", () => {
  const mockOnAnswerSelected = vi.fn();
  const mockState = vi.fn();

  it("renders options correctly", () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    render(
      <QuizForm
        options={options}
        currentQuestion={1}
        onAnswerSelected={mockOnAnswerSelected}
        state={mockState}
        disabled={false}
        submitted={false}
        error={null}
      />
    );

    // Assert that all options are rendered
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("calls onAnswerSelected when an option is selected", () => {
    const options = ["Option 1", "Option 2"];
    render(
      <QuizForm
        options={options}
        currentQuestion={1}
        onAnswerSelected={mockOnAnswerSelected}
        state={mockState}
        disabled={false}
        submitted={false}
        error={null}
      />
    );

    // Simulate selecting the first option
    fireEvent.click(screen.getByText(options[0]));

    // Assert that onAnswerSelected was called with the correct option
    expect(mockOnAnswerSelected).toHaveBeenCalledWith(options[0]);
  });

  it("displays error message when error prop is not null", () => {
    const errorMessage = "An error occurred";
    render(
      <QuizForm
        options={[]}
        currentQuestion={1}
        onAnswerSelected={mockOnAnswerSelected}
        state={mockState}
        disabled={false}
        submitted={false}
        error={errorMessage}
      />
    );

    // Assert that the error message is displayed
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("disables options when disabled prop is true", () => {
    const options = ["Option 1", "Option 2"];
    render(
      <QuizForm
        options={options}
        currentQuestion={1}
        onAnswerSelected={mockOnAnswerSelected}
        state={mockState}
        disabled={true}
        submitted={false}
        error={null}
      />
    );

    // Assert that all options are rendered
    expect(screen.getAllByRole("radio")).toHaveLength(options.length);

    // Assert that all radio buttons are disabled
    screen.getAllByRole("radio").forEach((radio) => {
      expect(radio).toBeDisabled();
    });
  });
});
