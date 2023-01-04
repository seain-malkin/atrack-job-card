import React from 'react';
import { JobCard } from './JobCard';

function Dashboard() {
    return (
        <div id='dashboard'>
            <div>
            <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </div>
    );
}

export { Dashboard };