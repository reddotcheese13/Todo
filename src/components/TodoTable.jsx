import TodoRowItem from "./TodoRowItem";
export default function TodoTable(props){
    const items = props.todo;
    return (
        <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">description</th>
            <th scope="col">Assigned</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
              <TodoRowItem
                key={item.rowNumber}
                rowNumber={item.rowNumber}
                rowDescription={item.rowDescription}
                assignedTo={item.assignedTo}
                deleteTodo = {props.deleteTodo}
              />
            ))}
        </tbody>
      </table>   
    )
}