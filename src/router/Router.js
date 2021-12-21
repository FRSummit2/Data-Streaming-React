import { Switch, Route } from 'react-router-dom';
import Page1 from '../components/Page1';

// IDARE RnD
import DataStreaming from '../components/IDare_RnD/DataStreaming';
import DataStreamingBarChart from '../components/IDare_RnD/DataStreamingBarChart';

import PublicRoute from '../Utils/PublicRoute';

function Router() {

    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Page1} />

                {/* IDARE RnD */}
                <PublicRoute path="/data-streaming" component={DataStreaming} />
                <PublicRoute path="/bar-chart" component={DataStreamingBarChart} />
            </Switch>
        </div>
    );
}

export default Router;