export const setName = name => ({
  type: 'CHANGE_NAME',
  payload: name,
});

export const nameSelector = state => state.name;

const nameReducer = (state = '', { type, payload }) => {
  if (type === 'CHANGE_NAME') {
    return payload;
  }
  return state;
};

export default nameReducer;
