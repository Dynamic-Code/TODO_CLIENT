export interface IDeleteTodo{
    userId:string,
    id:number
}

export class DeleteTodo implements IDeleteTodo{
    userId: string;
    id: number;

    constructor(userId:string,id:number){
        this.userId = userId,
        this.id = id
    }

}
