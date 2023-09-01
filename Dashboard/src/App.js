import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/Main/main";
import Right from "./components/RightSide/Right";
export default function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Main />
        <Right />
      </div>
    </div>
  );
}
