import {SET_CURRENT_USER, TOGGLE_USER_LOADING } from '../actions/type';
const isEmpty = require('is-empty');

const initialState = {
    isAuthenticated: false,
    user: {},
    userLoading: false
};

export default function(state = initialState,action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                
            }
    }
}