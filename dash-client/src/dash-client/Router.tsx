import * as React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './Components/Pages/Home';
import Players from './Components/Pages/Players';

class DashRouter extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/players/" component={Players} />
                </div>
            </BrowserRouter>
        );
    }
}

export default DashRouter;
