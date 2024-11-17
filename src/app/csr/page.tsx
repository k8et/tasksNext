"use client";

import { useQuery } from "@tanstack/react-query";
import Error from "next/error";
import axios from "axios";
import React, { FC } from "react";
import { Spinner } from "@nextui-org/spinner";
import UserList from "@/components/commons/UserList";

interface User {
    id: number;
    name: string;
}

const fetchUsers = async (): Promise<User[]> => {
    const { data } = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
    return data;
};

const CSRPage: FC = () => {
    const { data: users, isLoading, error } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });

    if (isLoading) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <Spinner size={"lg"} color="secondary" />
            </div>
        );
    }

    if (error) {
        return <Error statusCode={500} title="Error" message={error} />;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 overflow-auto max-md:w-full">
            <h1 className="text-3xl font-bold text-center mb-6">CSR</h1>
            <UserList users={users || []} />
        </div>
    );
};

export default CSRPage;
