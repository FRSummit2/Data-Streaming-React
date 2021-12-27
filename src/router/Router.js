import { Switch, Route } from 'react-router-dom';
import Page1 from '../components/Page1';

// IDARE RnD
import DataStreaming from '../components/IDare_RnD/DataStreaming';
import DataStreamingBarChart from '../components/IDare_RnD/DataStreamingBarChart';
import ScrollableLineChart from '../components/IDare_RnD/ScrollableLineChart';
import LiveStream from '../components/IDare_RnD/LiveStream';

import PublicRoute from '../Utils/PublicRoute';

function Router() {

    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Page1} />

                {/* IDARE RnD */}
                <PublicRoute path="/data-streaming" component={DataStreaming} />
                <PublicRoute path="/live-streaming" component={LiveStream} />
                <PublicRoute path="/bar-chart" component={DataStreamingBarChart} />
                <PublicRoute path="/scrollable-line=chart" component={ScrollableLineChart} />
            </Switch>
        </div>
    );
}

export default Router;