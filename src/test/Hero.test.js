import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; 
import Hero from "../landing_page/HOME/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("hero img");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage.src).toContain("homeHero.png");
  });
});