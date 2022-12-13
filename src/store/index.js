import { createStore } from 'redux';
import entering from '../reducers';

const store = createStore(entering);

export default store;