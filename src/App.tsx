import Input from './component/input'
import {useState} from "react";

function App() {
    const [value, setValue] = useState<string>("");

  return (
    <>
            <Input
                className={"absolute w-full bottom-0"}
                value={value}
                onChange={(value) => {
                    setValue(value);
                }}
            />
    </>
  )
}

export default App
