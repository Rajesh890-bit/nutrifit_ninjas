import Allroutes from "./routes/Allroutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <nav className="sticky top-0 bg-gray-800 p-4">
        <Navbar />
      </nav>
      <Allroutes />
    </div>
  );
}
export default App;
