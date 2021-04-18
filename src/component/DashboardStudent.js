import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardTemplate from '../templates/DashboardTemp';
import AllSchedule from './AllSchedule';
import ForYou from './ForYou';

function Dashboard() {
    let { id } = useParams();
    let content, active;
    // console.log(id);

    if (id === 'all-schedule') {
        content = <AllSchedule />;
        active = 0;
    } else if (id === 'for-you') {
        content = <ForYou />;
        active = 1;
    }

    return (
        <div>
            <DashboardTemplate timeline={content} menu={active} />
        </div>
    );
}

export default Dashboard;
