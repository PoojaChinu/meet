/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { render } from "@testing-library/react";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/SpecifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppComponent;
  let NumberOfEventsComponent;
  let AppDOM;

  test("Show default number of events when user hasn’t specified a number", ({
    given,
    and,
    when,
    then,
  }) => {
    given("the event app is displayed", () => {
      AppComponent = render(<App />);
    });

    and("the user has not specified the number of events to display", () => {});

    when("the user opens the event list", () => {
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      NumberOfEventsComponent = render(
        <NumberOfEvents
          setNumberOfEvents={() => {}}
          setErrorAlert={() => {}}
          setInfoAlert={() => {}}
        />,
        { container: EventListDOM }
      );
      expect(NumberOfEventsComponent).toBeTruthy();
    });

    then(
      /^\("(.*)"\) events should be displayed by default$/,
      (numberOfEventsToDisplay) => {
        expect(NumberOfEventsComponent.getByRole("textbox")).toHaveValue(
          numberOfEventsToDisplay
        );
      }
    );
  });

  test("User can change the number of events displayed", ({
    given,
    and,
    when,
    then,
  }) => {
    given("the event app is displayed", () => {
      AppComponent = render(<App />).container.firstChild;
    });

    and(
      /^the user has specified the number of events to display as "(.*)"$/,
      async (numberOfEventsToDisplay) => {
        const EventListDOM = AppComponent.querySelector("#event-list");
        NumberOfEventsComponent = render(
          <NumberOfEvents
            setNumberOfEvents={() => {}}
            setErrorAlert={() => {}}
            setInfoAlert={() => {}}
          />,
          { container: EventListDOM }
        );
        const user = userEvent.setup();
        const numberOfEvents = NumberOfEventsComponent.getByRole("textbox");
        await user.type(
          numberOfEvents,
          `{backspace}{backspace}${numberOfEventsToDisplay}`
        );
      }
    );

    when(
      /^the user changes the number of events to display to "(.*)"$/,
      async (numberOfEventsToDisplay) => {
        const user = userEvent.setup();
        const numberOfEvents = NumberOfEventsComponent.getByRole("textbox");
        await user.type(
          numberOfEvents,
          `{backspace}{backspace}${numberOfEventsToDisplay}`
        );
      }
    );

    then(
      /^the event list should display "(.*)" events$/,
      async (numberOfEventsToDisplay) => {
        expect(NumberOfEventsComponent.getByRole("textbox")).toHaveValue(
          numberOfEventsToDisplay
        );
      }
    );
  });
});
