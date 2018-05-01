import { FETCH_PICS, NET_ERROR } from '../actions/types';

export default function reducer(state = {
    pics: {},
    isfetched: false,
    error: null
}, action) {
    switch (action.type) {
        case FETCH_PICS:
            return { pics: action.payload.data, isfetched: true, error: null }
        case NET_ERROR:
            return { pics: {}, isfetched: true, error: action.payload }
        default:
            return state;
    }
};