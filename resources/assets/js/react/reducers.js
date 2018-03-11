export default (state = [], action) => {
    switch (action.type) {
        case 'MY_ACTION':
            return {};
        default:
            return state;
    }
};
