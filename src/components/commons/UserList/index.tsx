"use client";

import { motion } from "framer-motion";
import { FC } from "react";

interface User {
    id: number;
    name: string;
}

interface UserListProps {
    users: User[];
}

const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <ul
            className="list-none pl-0 space-y-4"
        >
            {users.map((user, index) => (
                <motion.li
                    key={user.id}
                    className="p-4 bg-gray-100 border text-black border-gray-300 rounded-lg mb-4 hover:bg-gray-200 duration-300"
                    initial={{ opacity: 0, transform: "translateY(-15px)" }}
                    animate={{
                        opacity: 1,
                        transform: "translateY(0px)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: index * 0.2,
                    }}
                >
                    {user.name}
                </motion.li>
            ))}
        </ul>
    );
};

export default UserList;
