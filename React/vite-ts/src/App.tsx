import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Heading title={"Hello"} />
      <Section title={"No default Title"}>This is My Section</Section>
      <Counter />
    </>

  )
}

export default App; // JSX.Element 타입
