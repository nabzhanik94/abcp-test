import { User } from "./types";
import { UserCache } from "./UserCache";

const userCache = new UserCache();
const URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUserById(id: number): Promise<User | null> {
  try {
    if (userCache.has(id)) {
      return userCache.get(id);
    }

    const response = await fetch(`${URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching user: ${response.statusText}`);
    }

    const data = (await response.json()) as User;
    userCache.set(id, data);
    return data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
}

export { fetchUserById };
