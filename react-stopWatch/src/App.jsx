import StopWatch from "./stopWatch/StopWatch"
import GptStopwatch from "./stopWatch/gptStopWatch"

function App() {


  return (
    <div className="flex justify-around bg-gray-100">
      <StopWatch />
      <GptStopwatch/>
    </div>
  )
}

export default App
