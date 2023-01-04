import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement } from "react";

export enum JobMetaLabelPosition {
    Above, Below,
}

interface JobMetaProps {
    value: string;
    icon?: ReactElement;
    alignRight?: boolean;
    label?: string;
    labelPosition?: JobMetaLabelPosition;
}

const Label = (props: { label: string }) => { 
    return (
        <div className="font-mono text-xxs uppercase underline underline-offset-4 italic decoration-1 decoration-slate-300 leading-snug text-slate-400 dark:text-slate-600">
            &nbsp;{props.label}
        </div>
    )
}

export class JobMeta extends React.Component<JobMetaProps> {
    constructor(props: JobMetaProps) {
        super(props);
        
    }
    
    render() {
        return (
          <div className={`flex flex-col px-4 py-2 ${this.props.alignRight && "text-right"}`}>
            {this.props.label && this.props.labelPosition === JobMetaLabelPosition.Above &&
                <Label label={this.props.label} />
            }
            <div className="text-lg text-slate-500">
                {this.props.icon}
                <span className="text-slate-600">
                    {this.props.value}
                </span>
            </div>
            {this.props.label && this.props.labelPosition === JobMetaLabelPosition.Below &&
                <Label label={this.props.label} />
            }
          </div>
        )
    }
}

export default JobMeta;