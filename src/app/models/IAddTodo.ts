export interface IAddTodo{
    userId:string,
    todoHeader:string,
    todoContent:string,
    status:boolean
}

export class AddTodo implements IAddTodo{
    todoHeader: string;
    todoContent: string;
    status: boolean;
    userId: string;

    constructor(todoHeader:string){
        this.todoHeader = todoHeader;
        this.todoContent = '';
        this.status = false;
        this.userId = JSON.parse(localStorage.getItem('user')).userId
    }
}