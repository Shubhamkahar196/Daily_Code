import { atom ,selector} from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 14
});
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 104
});

// creating selector

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    value: ({get}) =>{
        const networkAtom = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        
    }
})