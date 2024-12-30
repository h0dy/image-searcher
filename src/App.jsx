import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <div className="app">
      <main className="container mx-auto">
        <ThemeToggle />
        <SearchForm />
        <Gallery />
      </main>
    </div>
  );
}

export default App;
