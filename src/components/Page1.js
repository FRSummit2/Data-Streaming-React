import React from 'react'
// import * as XLSX from 'xlsx'
// import { useDispatch, useSelector } from 'react-redux'
// import { csvTransection, testReduxData } from '../actions'
import { useHistory } from "react-router"

const Page1 = () => {

    const history = useHistory()

    const loadPage = (path) => {
        history.push({
            pathname: "/" + path
        });
    }

    return (
        <div className="container mt-5">
            <div className="row m-0 custom-row">
                <button className="blue-btn-menu col-lg-3 col-md-2 col-sm-2" onClick={() => loadPage('data-streaming')}>Data Stream - Line Chart</button>
                <button className="blue-btn-menu col-lg-3 col-md-2 col-sm-2" onClick={() => loadPage('bar-chart')}>Data Stream - Line Chart</button>
                <button className="blue-btn-menu col-lg-3 col-md-2 col-sm-2" onClick={() => loadPage('scrollable-line=chart')}>Scrollable- Line Chart</button>
                <button className="blue-btn-menu col-lg-3 col-md-2 col-sm-2" onClick={() => loadPage('live-streaming')}>Live Streaming</button>
            </div>
        </div>
    );
}

export default Page1;