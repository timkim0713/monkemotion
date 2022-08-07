
import { useState } from 'react';
import {
    atom,

} from 'recoil';

export const currentImageRecoil = atom({
    key: 'currentImageRecoil', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});


export const currentLabelRecoil = atom({
    key: 'currentLabelRecoil', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});


export const currentXRecoil = atom({
    key: 'currentXRecoil', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});



export const currentYRecoil = atom({
    key: 'currentYRecoil', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});


export const dataRecoil = atom = ({
    key: "dataRecoil",
    default: {}
})

