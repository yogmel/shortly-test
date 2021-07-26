import BoostLinkSection from "./BoostLinkSection";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("BoostLinkSection", () => {
  it("should render correctly", async () => {
    render(<BoostLinkSection />);

    expect(screen.getByText("Boost your links today")).toBeTruthy();
    expect(screen.getByText("Get Started")).toBeTruthy();
  });
});
