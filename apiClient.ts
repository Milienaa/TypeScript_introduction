import axios from "axios";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suit: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/users/';

async function getUserData(userId:number): Promise<void> {
    try {
        const response = await axios.get<User>(`${apiUrl}${userId}`);
        const userData = response.data;
        console.log('User Data:', userData);
    } catch (error) {
        console.error('Error fetching user data:', (error as Error).message)
    }
}

getUserData(9);