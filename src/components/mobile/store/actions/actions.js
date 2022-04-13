
import { SHOW_SLIDER_MENU } from '../types/types';


export const showSliderMenu =(show)=>{
    return{
        type:SHOW_SLIDER_MENU,
        payload:show
    }
}