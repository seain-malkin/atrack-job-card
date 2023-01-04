import React, { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faFlag, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { 
    faScrewdriverWrench, 
    IconDefinition, 
} from '@fortawesome/free-solid-svg-icons';

const JobCard = (props) => {

    const job = {
        uid: '427-C1',
        type: 'scheduled maintenance',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nemo ipsa quis! Modi quod mollitia quam exercitationem obcaecati tenetur.',
        rego: 'VH-XYU',
        afttis: 1394,
        status: 'in service',
        manager: 'Michael Rosenberg',
    }

    return (
        <div className='job-card'>
            <Section className="job-card__header">
                <IconifiedRow icon={faScrewdriverWrench}>
                    <h2>{job.uid}<span className='text-purple-600'>{job.type}</span></h2>
                </IconifiedRow>
                <RegoAfttis />
            </Section>

            <Section>
                <IconifiedRow><p>{job.description}</p></IconifiedRow>
            </Section>

            <Section>
                <IconifiedRow classname='capitalize'>
                    <h3><div className='label'>STATUS</div><span className='text-orange-500'>{job.status}</span></h3>
                </IconifiedRow>
            </Section>

            <Section>
                <IconifiedRow icon={faUser}>
                    {job.manager}
                </IconifiedRow>
            </Section>

            <Section>
                <IconifiedRow icon={faCalendar}>
                    <Schedule />
                </IconifiedRow>
            </Section>

            <Section>
                <IconifiedRow icon={faClock}>
                    <DeliveryTime />
                </IconifiedRow>
            </Section>
        </div>
    );
}

const IconifiedRow = (props: PropsWithChildren<{
    icon?: IconDefinition;
    classname?: string;
}>) => {
    return(
        <React.Fragment>
            <div className='icon basis-7 shrink-0'>
                {props.icon && <FontAwesomeIcon icon={props.icon} />}
            </div>
            <div className={`grow ${props.classname || ''}`}>
                {props.children}
            </div>
        </React.Fragment>
    );
}

const Section = (props) => {
    return (
        <div className={`job-card__section ${props.className || ''}`}>
            {props.children}
        </div>
    );
}

const RegoAfttis = (props) => {
    return (
        <React.Fragment>
            <h2 className='basis-auto text-right font-mono text-neutral-600'>VH-XYU
                <span className='text-sky-500 dark:text-sky-600 italic font-sans font-semibold'>
                    <span className='text-xxs italic inline align-super text-neutral-400 dark:text-zinc-500 font-normal'>
                        AFTTIS
                    </span>
                    &nbsp;1649
                </span>
            </h2>
        </React.Fragment>
    );
}

const Schedule = (props) => {
    return (
        <React.Fragment>
            <div className='grid grid-cols-2'>
                <div>
                    <h3>
                        <div className='label'>Start</div>
                        26<span className='align-super text-xxs italic'>th</span> Mar 22
                    </h3>
                </div>
                <div>
                    <h3>
                        <div className='label'>Finish</div>
                        3<span className='align-super text-xxs italic'>rd</span> Aug 22
                    </h3>
                </div>
            </div>
            <div className='relative h-0.5 my-2'>
                <div className='absolute inset-0 rounded bg-neutral-200 dark:bg-zinc-800'></div>
                <div className='absolute inset-y-0 left-0 w-5/12 rounded bg-green-600 dark:bg-green-800'></div>
            </div>
        </React.Fragment>
    );
}

const DeliveryTime = (props) => {
    return (
        <React.Fragment>
            <div className='grid grid-cols-2'>
                <div>
                    <h3>
                        <div className='label'>Current</div>
                        15<span className='align-super text-xxs italic'>hrs</span>&nbsp;
                        22<span className='align-super text-xxs italic'>mins</span>
                    </h3>
                </div>
                <div>
                    <h3>
                        <div className='label'>Expected</div>
                        67<span className='align-super text-xxs italic'>hrs</span>&nbsp;
                        00<span className='align-super text-xxs italic'>mins</span>
                    </h3>
                </div>
            </div>
            <div className='relative h-0.5 my-2'>
                <div className='absolute inset-0 rounded bg-neutral-200 dark:bg-zinc-800'></div>
                <div className='absolute inset-y-0 left-0 w-7/12 rounded bg-green-600 dark:bg-green-800'></div>
            </div>
        </React.Fragment>
    );
}

export { JobCard };

export default JobCard;