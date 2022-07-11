import axios from "axios";

export default async function getData(userId) {
    const { data: User } = await axios("https://jsonplaceholder.typicode.com/users/" + userId);
    const { data: Posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userId);

    return { User, Posts };
}