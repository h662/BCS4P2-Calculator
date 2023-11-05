const App = () => {
  return (
    <main className="bg-pink-200 min-h-screen flex justify-center items-center">
      <form
        onClick={(e) => e.preventDefault()}
        className="bg-gray-300 px-8 py-12 rounded-lg shadow-md"
      >
        <input
          className="py-2 px-4 text-xl text-right w-full rounded-xl"
          type="text"
          value="0"
        />
        <div className="grid grid-cols-4 mt-8 gap-4">
          <button className="button-style">1</button>
          <button className="button-style">2</button>
          <button className="button-style">3</button>
          <button className="button-style bg-pink-500">+</button>
          <button className="button-style">4</button>
          <button className="button-style">5</button>
          <button className="button-style">6</button>
          <button className="button-style bg-blue-400">-</button>
          <button className="button-style">7</button>
          <button className="button-style">8</button>
          <button className="button-style">9</button>
          <button className="button-style bg-red-400">×</button>
          <button className="button-style bg-blue-600">Enter</button>
          <button className="button-style">0</button>
          <button className="button-style bg-red-600">Del</button>
          <button className="button-style bg-cyan-400">÷</button>
        </div>
      </form>
    </main>
  );
};

export default App;
