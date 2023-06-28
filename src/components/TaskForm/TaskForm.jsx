import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
import { addTask } from "redux/action";

export const TaskForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        dispatch(addTask(form.elements.text.value));
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="text"
                placeholder="Enter task text"
            />
            <Button type="submit">Add task</Button>
        </form>
    );
};