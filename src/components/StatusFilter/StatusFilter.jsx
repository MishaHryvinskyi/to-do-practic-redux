import { Button } from "components/Button/Button";
import { useSelector } from "react-redux";
import { statusFilter } from "redux/contacts";


export const StatusFilter = () => {

    const filter = useSelector(state => state.filters.status);

    return (
        <div>
            <Button selected={filter === statusFilter.all}>All</Button>
            <Button selected={filter === statusFilter.active}>Active</Button>
            <Button selected={filter === statusFilter.completed}>Completed</Button>
        </div>
    );
};