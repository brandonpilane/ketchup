export type Task = {
	id: string;
	name: string;
	done: boolean;
};

export type Project = {
	id: string;
	title: string;
	description?: string;
	tasks: Task[];
	createdAt: number;
	dueDate?: string;
};
