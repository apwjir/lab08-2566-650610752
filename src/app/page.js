import { Footer } from "../../components/Header";
import { Header } from "../../components/Header";
import { Task } from "../../components/Header";
import { TaskInput } from "../../components/Header";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>

      {/* //footer section */}
      <Footer year="2023" fullName="Jiraphat Ponrat" studentId="650610752" />
    </div>
  );
}
