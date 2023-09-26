import * as actions from './example-slice';

export function clickedButtonRequested() {
  return {
    type: actions.clickedButtonRequested.type,
  };
}

export function clickedButtonSucceeded() {
  return {
    type: actions.clickedButtonSucceeded.type,
  };
}

export function clickedButtonFailed() {
  return {
    type: actions.clickedButtonFailed.type,
  };
}
