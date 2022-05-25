import CreateTodo from "./CreateTodo";
const TodoData = () => {
  let array = [
    { id: 1, date: "1", content: "1" },
    { id: 2, date: "2", content: "2" },
  ];
  return <CreateTodo data={array} />;
};

export default TodoData;
