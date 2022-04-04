import { MENUS } from "../types/types";

const initialState = {
    menus : []
};

export const reducer =(state=initialState , action)=> {
    switch (action.type) {
        case MENUS:
            return{...state , menus:action.payload}

        default:
            break;
    }
};
