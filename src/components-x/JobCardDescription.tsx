import React from "react";

interface JobCardDescriptionProps {
  title: string;
  description: string;
}

export class JobCardDescription extends React.Component<JobCardDescriptionProps> {
  render() {
    return (
      <div className="bg-zinc-50 px-4 py-2 text-sm text-zinc-500 shadow-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-400 dark:shadow-zinc-800">
        <h3 className="text-indigo-700 pb-1 text-lg font-light">{this.props.title}</h3>
        {this.props.description}
      </div>
    );
  }
}

export default JobCardDescription;
