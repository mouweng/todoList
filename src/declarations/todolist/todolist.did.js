export const idlFactory = ({ IDL }) => {
  const Time = IDL.Int;
  const Todo = IDL.Record({
    'id' : IDL.Text,
    'content' : IDL.Text,
    'createTime' : Time,
    'priority' : IDL.Nat,
  });
  return IDL.Service({
    'addTodo' : IDL.Func([IDL.Text, IDL.Nat], [], []),
    'complete' : IDL.Func([IDL.Text], [], []),
    'delComplete' : IDL.Func([IDL.Text], [], []),
    'delete' : IDL.Func([IDL.Text], [], []),
    'getCompleteList' : IDL.Func([], [IDL.Vec(Todo)], ['query']),
    'getCompleteListSize' : IDL.Func([], [IDL.Nat], ['query']),
    'getTodoList' : IDL.Func([], [IDL.Vec(Todo)], ['query']),
    'getTodoListSize' : IDL.Func([], [IDL.Nat], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
