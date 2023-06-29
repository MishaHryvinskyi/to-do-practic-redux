import { Task } from "components/Task/Task"
import { useSelector } from "react-redux";
import { getStatusFilter } from "../../redux/selectors";

const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
        case statusFilter.active:
            return tasks.filter(task => !task.completed);
        case statusFilter.completed:
            return tasks.filter(task => task.completed);
        default:
            return tasks;         
    }
};

export const TaskList = () => {

    const tasks = useSelector(state => state.tasks);
    const statusFilter = useSelector(getStatusFilter);
    const visibleTasks = getVisibleTasks(tasks, statusFilter);

    return (
        <ul>
            {visibleTasks.map(task => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
};