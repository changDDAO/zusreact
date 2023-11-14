import create from "zustand";

type ID ={
    id: string;
    setId: (id:string) => void;
}

const IdStore = create<ID>((set)=>({
    id: "init",
    setId: (id)=>{
        set((state)=>({
            id: id,
        }));
},
}))
export default IdStore;
