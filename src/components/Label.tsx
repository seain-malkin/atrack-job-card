import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface LabelProps {
    content: string;
    icon?: IconDefinition;
    className?: string;
}

export function IconifiedLabel(props: LabelProps) {
    return (
        <div className={props.className}>
            {props.icon && 
                <FontAwesomeIcon icon={props.icon} />
            }
            <span>{props.content}</span>
        </div>
    );
}

export default IconifiedLabel;