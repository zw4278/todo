function CreateTodo(props) {
    const addEntry = () => {
        //let findarrayid = props.data.find((item)=>{return item.id === 1})
        //let findobjectid = findarrayid[date];
        let arrayid = props.data[1];
        let objectid = arrayid.date;
      
        console.log(objectid);
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
