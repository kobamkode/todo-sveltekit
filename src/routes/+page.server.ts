import type { PageServerLoad, Actions } from "./$types";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export const load: PageServerLoad = async () => {
	const tasks = await pb.collection('tasks').getFullList({
		sort: '-created',
	});
	return { tasks };
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const taskName = data.get('name');
		const task = {
			"name": taskName
		}
		const add = await pb.collection('tasks').create(task);
		console.log(add);
	}
} satisfies Actions;
