import create from 'zustand';

interface BearState{
    bears: number;
    increase : (num: number) =>void;
}

const bearStore = create<BearState>((set)=>({
    bears:0,
    increase: (num: number) => set((state)=>({
        bears: state.bears+num
    })),
}));
export default bearStore;

