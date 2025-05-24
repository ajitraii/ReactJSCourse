import "./App.css";
import FormikHook from "./screens/FormikHook";
import LoginPage, { height, SignupPage } from "./screens/LoginPage";
import ShowPost from "./screens/ShowPost";
import UseEffectHook from "./screens/useEffectHook/UseEffectHook";
import UseRefHook from "./screens/useRefHook/UseRefHook";
import UseStateHook from "./screens/useStateHook/UseStateHook";

const App = () => {
  return (
    <div>
      {/* <h1>{name}</h1>
      <h1>{height}</h1> */}
      <h2>WELCOME TO APP </h2>
      {/* <LoginPage />
      <SignupPage /> */}
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <ShowPost /> */}
      <FormikHook />
    </div>
  );
};

export default App;
