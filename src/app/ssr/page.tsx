import axios from "axios";

import UserList from "@/components/commons/UserList";

interface User {
    id: number;
    name: string;
}

async function fetchUsers(): Promise<User[]> {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
}

export default async function Page() {
    const users = await fetchUsers();

    return (
        <div className="max-w-4xl mx-auto p-6 overflow-auto max-md:w-full   justify-center flex-col">
            <h1 className="text-3xl font-bold text-center mb-6">SSR</h1>
            <UserList users={users} />
        </div>
    );
}
