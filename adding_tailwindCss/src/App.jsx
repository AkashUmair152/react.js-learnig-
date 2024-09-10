import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Most Sales T-shirt
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <Card title="T-shir:1" price="$20" color="black" />
            <Card title="T-shir:2" price="$30" color="black" />
            <Card title="T-shir:3" price="$40" color="white" />
            <Card title="T-shir:4" price="$50" color="yellow" />
            <Card title="T-shir:5" price="$60" color="black" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
