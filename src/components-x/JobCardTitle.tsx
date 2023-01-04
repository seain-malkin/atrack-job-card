import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench as iconJob,
  faPlane as iconRego,
  faStopwatch as iconAfttis,
} from "@fortawesome/free-solid-svg-icons";
import JobMeta, { JobMetaLabelPosition } from "./JobMeta";

export class JobCardTitle extends React.Component<{}> {
  render() {
    return (
      <div className="flex flex-row px-4 pt-2 text-2xl font-light text-zinc-600 dark:text-zinc-300 content-center">
        <div className="basis-6 text-xl leading-8">
          <FontAwesomeIcon
            icon={iconJob}
            className="text-orange-400 dark:text-orange-400"
          />
        </div>
        <div className="grow pl-2">2836-A2</div>

        <div className="flex flex-row">
          <div className="basis-6 text-xl leading-8">
            <FontAwesomeIcon
              icon={iconRego}
              className="text-zinc-200 dark:text-zinc-700"
            />
          </div>
          <div className="grow pl-2">WPX</div>
        </div>
      </div>
    );
  }
}
