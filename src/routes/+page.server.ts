import type { PageServerLoad } from "./$types";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export const load: PageServerLoad = async () => {
	const tasks = await pb.collection('tasks').getFullList({
		sort: '-created',
	});

	return { tasks };
}
