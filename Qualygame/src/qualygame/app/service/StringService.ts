import { Injectable } from '@angular/core';

@Injectable()
export class StringService
{
    /*===================================================================
     *                             ATTRIBUTES
     *===================================================================*/

    /*===================================================================
     *                            CONSTRUCTOR
     *===================================================================*/

    /*===================================================================
     *                         GETTERS AND SETTERS
     *===================================================================*/
    
    /*===================================================================
     *                             BEHAVIOUR
     *===================================================================*/
    /**
     *
     * @param string
     */
    public unaccent(string): string
    {
        return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }
}