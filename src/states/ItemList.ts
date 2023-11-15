import {create} from 'zustand';

interface Item{
    id: string;
    name: string
    content:string;
}


type ItemState = {
    itemList: Item[];
    num1: number
    addItem: (item: Item, num: number) => void
    numPlus: (num: number) => void
}
type Actions = {
    numPlus: (num: number) =>void
    addItem: (item: Item, num: number) => void
}
const ItemStore = create<ItemState & Actions>((set)=>({
    itemList:[],
    num1: 0,
    addItem: (item: Item, num:number) => {
        set((state) => (
            {
                // num1: state.num1,
                itemList: [...state.itemList, item]
            }
        ))
    },
    numPlus: (num: number) => {
        set((state) => (
            {
                num1: state.num1 + num,
            }))
    },
}));

export default ItemStore







