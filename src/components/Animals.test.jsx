import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Animals from "./Animals";

describe("Animals Component", () => {
  it("shows the no-pets message when the array is empty", () => {
    render(
      <Animals
        animals={[]}
        title="random string"
        nopets="No pets here"
        onDelete={vi.fn()}
        onAdoptToggle={vi.fn()}
        onEditImage={vi.fn()}
      />
    );

    expect(screen.getByText("No pets here")).toBeInTheDocument();
  });

  it("shows the no-pets message when the array has pets", () => {
    const samplePets = [
      {
        species: "CANINE",
        vaccinated: true,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/f/fa/Ruffus_The_Dog_in_front_of_a_globe%2C_smiling.png",
        kidFriendly: false,
        id: 1,
        adopted: false,
        name: "DAVEY",
        age: "11",
      },
      {
        species: "ARACNID",
        vaccinated: true,
        imageUrl:"https://tse4.mm.bing.net/th/id/OIP.p8H-Qacjb8K11y86o_fYwgHaE8?rs=1&pid=ImgDetMain",
        kidFriendly: false,
        id: "2",
        adopted: false,
        name: "Buckly Bruno",
        age: "10 cross-hairs",
      },
    ];
    render(
      <Animals
        animals={samplePets}
        title="random string"
        nopets="random string"
        onDelete={vi.fn()}
        onAdoptToggle={vi.fn()}
        onEditImage={vi.fn()}
      />
    );
    expect(screen.getAllByText("🗑️")).toHaveLength(2);
    expect(screen.getAllByText("🗑️")[0]).toBeInTheDocument();
  });
});
