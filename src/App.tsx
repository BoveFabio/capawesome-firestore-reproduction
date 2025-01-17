import './App.css'
import {IOSDataFetchingComponent} from "./IOSDataFetchingComponent/IOSDataFetchingComponent.tsx";

const numberOfSnapshotListeners = 9;
function App() {
    const array = Array.from(Array(numberOfSnapshotListeners).keys())

    return (
        <div>
            {array.map(x => (
                <IOSDataFetchingComponent key={x} condition={x}/>
            ))}
        </div>
    )
}

export default App
