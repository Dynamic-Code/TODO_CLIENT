export interface IStatusTodo{
    userId:string,
    id:number,
    updateStatus:boolean
}

export class StatusTodo implements IStatusTodo{
    userId: string;
    id: number;
    updateStatus: boolean;
    constructor(userId:string,id:number,updateStatus:boolean){
        this.userId = userId,
        this.id = id,
        this.updateStatus = updateStatus
    }
}