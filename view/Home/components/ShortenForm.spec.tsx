import ShortenForm from "./ShortenForm";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { ShortenlinkViewModel } from "viewmodel";

const viewModel = new ShortenlinkViewModel();
viewModel.generateShortlink = jest.fn(() => Promise.resolve());

describe("ShortenForm", () => {
  it("should render correctly", () => {
    render(<ShortenForm viewModel={viewModel} />);

    expect(screen.getByPlaceholderText("Shorten a link here...")).toBeTruthy();
  });

  it("should show error if field is empty", async () => {
    render(<ShortenForm viewModel={viewModel} />);

    expect(screen.getByText("Shorten it!")).toBeTruthy();
    fireEvent.click(await screen.findByText("Shorten it!"));
    expect(screen.getByText("Please add a link")).toBeTruthy();
  });

  it("should not show error if field is filled", async () => {
    render(<ShortenForm viewModel={viewModel} />);

    fireEvent.change(screen.getByPlaceholderText("Shorten a link here..."), {
      target: { value: "url" },
    });

    fireEvent.click(await screen.findByText("Shorten it!"));
    expect(screen.queryByText("Please add a link")).toBeNull();
  });
});
