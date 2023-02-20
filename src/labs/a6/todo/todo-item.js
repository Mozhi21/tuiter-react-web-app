const TodoItem = (
    {
        todo = {
            done: true,
            title: 'Buy milk',
            status: 'COMPLETED'
        }
    }) => {
    return (
        <>
            <h2>input check box</h2>
            <li>
                <input type="checkbox"
                       defaultChecked={todo.done}/>
                {todo.title}
                ({todo.status})
            </li>
        </>
    );
}
export default TodoItem;