export default function(state, action) {
    // Alternativeley look into swich syntax for a ruby-case-like method on JS
    // switch(action.type){
    //     case 'SET_FLATS':
    //         return action.payload;
    //     default:
    //         return state;
    // }

     if (state === undefined){
         return [];
     }
     if (action.type === 'SET_FLATS') {
         return action.payload;
     } else {
         return state;
     }
 }