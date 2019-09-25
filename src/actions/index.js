import flats from '../flats.js';

export function setFlats(){
    return{
        type: 'SET_FLATS',
        payload: flats
    }
};
  