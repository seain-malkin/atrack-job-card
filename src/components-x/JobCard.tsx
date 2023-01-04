import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar as iconCalendarRange,
  faPaperPlane as iconAfttis,
} from "@fortawesome/free-regular-svg-icons";
import Chip, { ChipColor } from "./Chip";
import { JobCardTitle } from "./JobCardTitle";
import JobCardDescription from "./JobCardDescription";
import JobMeta, { JobMetaLabelPosition } from "./JobMeta";

export class JobCard extends React.Component<{}> {
  render() {
    return (
      <div className="mb-4 break-inside-avoid rounded-md bg-zinc-50 shadow-sm dark:bg-zinc-900">
        <div className="rounded-t-md">
          <JobCardTitle />
        </div>

        {/* <div className="chip-group">
          <Chip label="scheduled maintenance" color={ChipColor.Indigo} />
          <Chip label="planned" color={ChipColor.Green} />
        </div> */}

        <JobCardDescription
          title="Scheduled Maintenance"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veni..."
        />

        <JobMeta value="1653" label="afttis" alignRight={true} labelPosition={JobMetaLabelPosition.Above} />

        <div className="flex flex-col gap-3 p-4 text-xl text-zinc-600 dark:text-neutral-400">
          <div className="flex basis-auto flex-row">
            <div className="basis-5">
              <FontAwesomeIcon
                icon={iconCalendarRange}
                className="text-blue-400"
              />
            </div>
            <div className="grow pl-4">
              21-08 <span className="text-neutral-500">&#8230;</span> 28-08
            </div>
          </div>
          <div className="flex basis-auto flex-row">
            <div className="basis-5">
              <FontAwesomeIcon icon={iconAfttis} className="text-blue-400" />
            </div>
            <div className="flex grow flex-row">
              <div className="grow pl-4">2497</div>
              <span className="basis-auto text-xs uppercase italic leading-8 text-zinc-400 dark:text-zinc-600">
                afttis
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobCard;
