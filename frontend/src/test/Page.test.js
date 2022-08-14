import { fireEvent, render, screen } from '@testing-library/react';
import axios from "axios";
import { MemoryRouter as Router } from "react-router-dom";
import Home from './../App';
import StartPage from "./../pages/start";
import FinishPage from "./../pages/finish";
import { createMemoryHistory } from "history";


afterEach(() => {
  axios.get.mockClear();
});

const mockCall = () => {
  axios.get.mockResolvedValueOnce({
    data:
      [
        {
          q: {
            id: 1,
            text: "You’re really busy at work and a colleague is telling you their life story and personal woes. You:"
          },
          a: [
            {
              id: 1,
              text: "Don’t dare to interrupt them",
            },
            {
              id: 2,
              text: "Think it’s more important to give them some of your time; work can wait",
            },
            {
              id: 3,
              text: "Listen, but with only with half an ear",
            },
            {
              id: 4,
              text: "Interrupt and explain that you are really busy at the moment",
            },
          ]
        },

        {
          id: 2,
          text: "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
          a: [
            {
              id: 1,
              text: "Look at your watch every two minutes",
            },
            {
              id: 2,
              text: "Bubble with inner anger, but keep quiet",
            },
            {
              id: 3,
              text: "Explain to other equally impatient people in the room that the doctor is always running late",
            },
            {
              id: 4,
              text: "Complain in a loud voice, while tapping your foot impatiently",
            },
          ]
        },
        {
          id: 3,
          text: "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
          a: [
            {
              id: 1,
              text: "Don’t dare contradict them",
            },
            {
              id: 2,
              text: "Think that they are obviously right",
            },
            {
              id: 3,
              text: "Defend your own point of view, tooth and nail",
            },
            {
              id: 4,
              text: "Continuously interrupt your colleague",
            },
          ]
        }
      ]

  });
}

const mockCalculateCall = () => {
  axios.post.mockReturnValueOnce({
    data: "INTROVERT"
  });
}

test('checks home page components', async () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const buttonElement = screen.getByText(/Start your test/i);
  expect(buttonElement).toBeInTheDocument();

  const image = screen.getByAltText("personality-logo");
  expect(image).toBeInTheDocument();
});

test('start page', async () => {
  mockCall();

  render(
    <Router>
      <StartPage />
    </Router>
  );


  const prevButtonElement = await screen.findByText(/Prev/i);
  expect(prevButtonElement).toBeInTheDocument();
  const nextButtonElement = await screen.findByText(/Next/i);
  expect(nextButtonElement).toBeInTheDocument();

  const allAnswersComponent = await screen.findAllByTestId("answer");
  expect(allAnswersComponent).toHaveLength(4);


  const oneAnswer = await screen.findAllByTestId("radio")
  expect(oneAnswer).toHaveLength(4);
  fireEvent.click(oneAnswer[0]);
  expect(oneAnswer[0]).toBeChecked()
});


test('checks options', async () => {
  mockCall();


  render(
    <Router>
      <StartPage />
    </Router>,
  );


  const prevButtonElement = await screen.findByText(/Prev/i);
  expect(prevButtonElement).toBeInTheDocument();
  expect(prevButtonElement).toBeDisabled();
  const nextButtonElement = await screen.findByText(/Next/i);
  expect(nextButtonElement).toBeInTheDocument();
  expect(nextButtonElement).toBeDisabled()

  const allAnswersComponent = await screen.findAllByTestId("answer");
  expect(allAnswersComponent).toHaveLength(4)

  const allAnswers = await screen.findAllByTestId("radio")
  expect(allAnswers).toHaveLength(4);
  fireEvent.click(allAnswers[0]);
  expect(allAnswers[0]).toBeChecked()
  expect(nextButtonElement).not.toBeDisabled()
  fireEvent.click(nextButtonElement);


  //second part
  const allAnswers2 = await screen.findAllByTestId("radio")
  expect(allAnswers2).toHaveLength(4);
  fireEvent.click(allAnswers2[0]);
  fireEvent.click(nextButtonElement);

  // third part 
  const allAnswers3 = await screen.findAllByTestId("radio")
  expect(allAnswers3).toHaveLength(4);
  fireEvent.click(allAnswers3[0]);
  fireEvent.click(nextButtonElement);
});
