import * as React from "react";
import JobCard from "./components/JobCard";
import "./App.css";

export class App extends React.Component<{}> {
  render() {
    return (
      <div className="columns min-h-screen bg-zinc-200 p-4 dark:bg-zinc-700 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    );
  }
}

export default App;
