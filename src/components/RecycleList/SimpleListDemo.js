import React from 'react'
import { FixedList } from "react-recycled-list";

const SimpleListDemo = () => {

    const data = Array(1000).fill(null).map((_, index) => `index ${index}`);

    // return <FixedList height={400} rowComponent={Row} data={data} rowHeight={20} />
    return <FixedList height={20 * 1000} rowComponent={Row} data={data} rowHeight={20} />
}

// Use React.memo or React pure component to prevent unncessary render
const Row = React.memo(function (props) {
    // the data here is the same data that is passed into the FixedList
    const { data, dataIndex, top, height } = props;

    const value = data[dataIndex];
    // Important!, make sure you inline-style your component with the the provided top, height. Also make sure to set your container element to position absolute
    return <div style={{ top, height }} className="react-recycled-row">{value}</div>;
})

export default SimpleListDemo