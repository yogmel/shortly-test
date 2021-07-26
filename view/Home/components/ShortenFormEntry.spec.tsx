import ShortenFormEntry from "./ShortenFormEntry";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Shortlink } from "model";

const link = new Shortlink({});

describe("ShortenFormEntry", () => {
  it("should render correctly", () => {
    render(<ShortenFormEntry link={link} />);

    expect(screen.getByText("Copy")).toBeTruthy();
  });
});
