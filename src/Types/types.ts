import React from 'react';

export type buttonPropType = {
    className : string
    action: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void),
    value : string
}

export type timeType = {
    minute : number,
    seconds : number
}