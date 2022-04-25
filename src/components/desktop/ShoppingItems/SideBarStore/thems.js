import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    components:{
        AccordionItem:{
            baseStyle:{
                border:"none!important"
            }
        }
    }
})