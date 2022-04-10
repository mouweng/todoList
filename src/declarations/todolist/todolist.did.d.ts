import type { Principal } from '@dfinity/principal';
export type Time = bigint;
export interface Todo {
  'id' : string,
  'content' : string,
  'createTime' : Time,
  'priority' : bigint,
}
export interface _SERVICE {
  'addTodo' : (arg_0: string, arg_1: bigint) => Promise<undefined>,
  'complete' : (arg_0: string) => Promise<undefined>,
  'delComplete' : (arg_0: string) => Promise<undefined>,
  'delete' : (arg_0: string) => Promise<undefined>,
  'getCompleteList' : () => Promise<Array<Todo>>,
  'getCompleteListSize' : () => Promise<bigint>,
  'getTodoList' : () => Promise<Array<Todo>>,
  'getTodoListSize' : () => Promise<bigint>,
}
