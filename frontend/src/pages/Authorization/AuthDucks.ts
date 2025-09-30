import {type AnyAction, createAction, createReducer, type ThunkAction} from "@reduxjs/toolkit";
import type {FormValues} from "../../_interfaces/LogInInterfaces.ts";
import type {AppDispatch} from "../../_helpers/store.ts";
import {AuthApi} from "../../_helpers/service.ts";

interface AuthState {
    loading: boolean;
}

export const authModule = 'authModule'

const initialState:AuthState = {
    loading: false,
}

export const loadingLogin = createAction<boolean>(`${authModule}/LOADING_LOGIN`);

export const authReducer = createReducer(initialState,builder => {
    builder.addCase(loadingLogin,(state,action) => {
        state.loading = action.payload
    })
})


export const setLoadingLogin = (loading_status: boolean): ThunkAction<void, AuthState, unknown, AnyAction> =>
    dispatch => {
        dispatch(loadingLogin(loading_status));
    };

export const registerUser = (values: FormValues) => async (dispatch: AppDispatch) => {
    try {
        const response = await AuthApi.registerUser(values)
        console.log('registerUser response:',response)

    }catch (error) {

    }
};

