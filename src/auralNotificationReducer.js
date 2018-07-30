/* @flow */
import * as ACTIONS from './auralNotificationActions';

const { ADD_AURAL_NOTIFICATION } = ACTIONS;

export default function(state, payload) {
    switch (payload.type) {
        case ADD_AURAL_NOTIFICATION:
            return payload;
        default:
            return '';
    }
}
