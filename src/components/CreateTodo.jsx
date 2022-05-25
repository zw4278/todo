function CreateTodo(props) {
    const addEntry = () => {
      console.log(props.data[1][props.data.date]);
  };
  return (
    <div>
      <button
        onClick={() => {
          addEntry();
        }}
      >
        ADD
      </button>
    </div>
  );
}

export default CreateTodo;
