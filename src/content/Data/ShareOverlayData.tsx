
export interface ShareOverlayData {
    showOverlay: boolean;
    pointX: number;
    pointY: number;
}


export let shareOverlayData: ShareOverlayData = {
    showOverlay: false,
    pointX: 177,
    pointY: 243,

};

export const listeners: Array<() => void> = [];

export function setShareData(newData: ShareOverlayData): void {
    shareOverlayData = newData;
    listeners.forEach(fn => fn());
}