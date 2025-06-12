# Animal Adoption Management System

## Overview
This project is a React-based application designed to manage a list of animals for adoption. It allows users to:
- View details of animals, including their name, species, age, and status (kid-friendly, vaccinated, adopted).
- Edit an animal's image.
- Toggle adoption status (Adopt/Return).
- Delete an animal from the list.

## Features
- **Dynamic Animal List**: Displays a list of animals with their details.
- **Interactive Buttons**:
    - Edit an animal's image.
    - Toggle adoption status.
    - Delete an animal.
- **Responsive Design**: Built using `react-bootstrap` for styling and layout.



> ![image](https://github.com/user-attachments/assets/a952c21e-51a8-4aa3-b2d0-9607702f2d68) | ![image](https://github.com/user-attachments/assets/4ab4d73e-edba-45b4-8376-e46fde8675d2)


## Technologies Used
- **React**: For building the user interface.
- **React-Bootstrap**: For styling and layout.
- **CSS**: For custom styles.

## How to Run
1. Install dependencies using `npm install`.
2. Start the development server using `npm start`.
3. Open the application in your browser at `http://localhost:3000`.

## Example Usage
The `Animals` component expects the following props:
- `animals`: An array of animal objects.
- `title`: A string for the list title.
- `onDelete`: A function to handle deletion.
- `onAdoptToggle`: A function to toggle adoption status.
- `onEditImage`: A function to edit an animal's image.
- `nopets`: A message to display when no animals are available.

## Testing
This project includes testing to ensure functionality and reliability:
- **Unit Tests**: Validate individual components and functions.
- **Integration Tests**: Check interactions between components.
- **Mock Data**: Simulate animal data for testing purposes.

To run tests:
1. Ensure dependencies are installed using `npm install`.
2. Run tests using `npm test`.

![ ](https://github.com/user-attachments/assets/376af2bf-ba7f-4cb4-937c-b9310eedbfa0)
