import { render, cleanup, screen } from "@testing-library/react";
import Logincomponent from "../Logincomponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../Store";

afterEach(() => {
  cleanup();
});

const TestLogin = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Logincomponent />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

describe("Logincomponent", () => {
  it("should render and match screenshot", () => {
    const { container } = render(<TestLogin />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should render form", () => {
    render(<TestLogin />);
    expect(screen.getByTestId("loginForm")).toBeInTheDocument();
  });
  it("should render login button", () => {
    render(<TestLogin />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
