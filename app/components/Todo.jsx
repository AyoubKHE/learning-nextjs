"use client";

import { useState, useEffect } from "react";

export default function Todo() {
	const [todo, setTodo] = useState({});

	useEffect(() => {
        async function fetchData() {
            let response = await fetch(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            let result = await response.json();
            setTodo(result); 
        }

        fetchData();

	}, []);

	return (
		<div>
			<h2>{todo.title}</h2>
		</div>
	);
}
