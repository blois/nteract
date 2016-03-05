import createConstants from './createConstants';

module.exports = createConstants(
  'CHANGE_FILENAME',
  'START_SAVING', 'DONE_SAVING',
  'ERROR_KERNEL_NOT_CONNECTED',
  'NEW_KERNEL', 'KILL_KERNEL',
  'EXIT',
  'SET_SELECTED',
  'SET_NOTEBOOK',
  'MOVE_CELL', 'REMOVE_CELL',
  'NEW_CELL_AFTER', 'NEW_CELL_BEFORE',
  'UPDATE_CELL_EXECUTION_COUNT',
  'UPDATE_CELL_OUTPUTS',
  'UPDATE_CELL_SOURCE'
);
