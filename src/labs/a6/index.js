import Nav from "../../nav";
import Classes from "./classes";
import ConditionalOutput
    from "./conditional-output";
import Styles from "./styles";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-lists";

function Assignment6() {
    return (
        <div>
            <Nav/>
            <h1>Assignment 6</h1>
            <Classes/>
            <Styles/>
            <ConditionalOutput/>
            <TodoItem/>
            <TodoList/>
        </div>
    );
}
export default Assignment6;