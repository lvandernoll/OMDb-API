import { RECIEVE_HELLO_WORLD } from 'actions';
import { HelloWorldAction } from 'interfaces';

export const helloWorldReducer = (
  state: string = 'Initial state',
  action: HelloWorldAction,
) => {
  switch(action.type) {
    case RECIEVE_HELLO_WORLD:
      return action.payload;
    default:
      return state;
  }
}
