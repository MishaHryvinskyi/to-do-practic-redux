import { nanoid } from "nanoid";

export const addTask = text => {
    return {
        type: "tasks/addTask",
        payload: {
            id: nanoid(),
            completed: false,
            text,
        },
    };
};

export const deletedTask = taskId => {
    return {
        type: "tasks/deletedTask",
        payload: taskId,
    };
};

export const toggleCompleted = taskId => {
    return {
        type: "tasks/toggleCompleted",
        payload: taskId,
    };
};

export const setStatusFilter = value => {
    return {
        type: "filters/setStatusFilter",
        payload: value,
    };
};