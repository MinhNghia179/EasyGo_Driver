import {init, RematchRootState} from '@rematch/core';
import * as models from './stores';

const rootState = init({models, plugins: null});

export default rootState;

export type IStore = typeof rootState;
export type IRootDispatch = typeof rootState.dispatch;
export type IRootState = RematchRootState<typeof models>;

export var dispatch: IRootDispatch;
export var state: IRootState;
