const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM';
const INCREMENT_BY_FIVE = 'INCREMENT_BY_FIVE';
const DECREMENT_BY_FIVE = 'DECREMENT_BY_FIVE';
const ADD_CAR = 'ADD_CAR';


const initState = {
  num: 0, 
  cars: [
    {
      model: "BMW",
      year: 2017
    },
    {
      model: "Honda",
      year: 2015
    },
    {
      model: "Audi",
      year: 2010
    },
    {
      model: "Toyota",
      year: 2020
    },
    {
      model: "Mercedes",
      year: 2016
    }
  ]
};


export const reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT_NUM:
      return {
        ...state,
        num: Math.min(state.num + 1, 15) 
      };
    case DECREMENT_NUM:
      return {
        ...state,
        num: Math.max(state.num - 1, 0) 
      };
    case INCREMENT_BY_FIVE:
      return {
        ...state,
        num: Math.min(state.num + 5, 15) 
      };
    case DECREMENT_BY_FIVE:
      return {
        ...state,
        num: Math.max(state.num - 5, 0) 
      };
    case ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    default:
      return state;
  }
};

export const incrementNum = () => ({ type: INCREMENT_NUM });
export const decrementNum = () => ({ type: DECREMENT_NUM });
export const incrementByFive = () => ({ type: INCREMENT_BY_FIVE });
export const decrementByFive = () => ({ type: DECREMENT_BY_FIVE });
export const addCar = (car) => ({
  type: ADD_CAR,
  payload: car
});