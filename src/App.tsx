import './App.css'
import {IOSDataFetchingComponent} from "./IOSDataFetchingComponent/IOSDataFetchingComponent.tsx";

function App() {
    const array = Array.from(Array(100).keys())

    return (
        <div>
            {array.map(x => (
                <IOSDataFetchingComponent condition={x % 2 === 0 ? "A" : "B"}/>
            ))}
        </div>
    )
}

export default App
