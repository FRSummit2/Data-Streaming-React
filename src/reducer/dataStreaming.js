const storeStreamData = (state = null, action) => {
    switch (action.type) {
        case 'STREAM_DATA':
            // debugger
            return action.payload
        default:
            return state
    }
};

export default storeStreamData;