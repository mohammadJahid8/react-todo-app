import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar />

      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />

        <hr className="mt-4" />

        <TodoList />

        <hr className="mt-4" />

        <Footer />
      </div>
    </div>
  );

  // return (
  //   <div className="App">
  //     <div class="blurdiv"></div>

  //     <div class="blurdiv2"></div>
  //     <div className="position-relative" style={{ zIndex: "99999999" }}>

  //     </div>
  //   </div>
  // );
}

export default App;
