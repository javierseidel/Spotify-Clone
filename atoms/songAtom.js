import { atom } from "recoil";

export const currentTrackIdState = atom({
    key:"currentTracckIdState",
    default:null
})

export const isPlayingState = atom({
    key:"isPlayingState",
    default:false
})