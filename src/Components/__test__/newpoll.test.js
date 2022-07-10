import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import NewPoll from "../NewPoll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../Store";

afterEach(() => {
  cleanup();
});

const TestNewPoll = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NewPoll />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};
describe("newpoll component", () => {
  it("should render and match screenshot", () => {
    const { container } = render(<TestNewPoll />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should render form", () => {
    render(<TestNewPoll />);
    expect(screen.getByPlaceholderText("Option One")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Option Two")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  it("should user be able to vote", () => {
    render(<TestNewPoll />);
    const optionOne = screen.getByPlaceholderText("Option One");
    const optionTwo = screen.getByPlaceholderText("Option Two");
    fireEvent.click(optionOne);
    fireEvent.change(optionOne, { target: { value: "option One" } });
    fireEvent.click(optionTwo);
    fireEvent.change(optionTwo, { target: { value: "option Two" } });
    expect(optionOne.value).toBe("option One");
    expect(optionTwo.value).toBe("option Two");
  });
});
