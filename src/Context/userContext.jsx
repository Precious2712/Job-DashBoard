import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://67bc3b4aed4861e07b39b695.mockapi.io/api/v2/users');
                setUsers(response.data);
                console.log('Users:', response.data);
            } catch (error) {
                console.error('Error fetching users:', error.message);
            }
        };
        
        fetchUsers();   
    }, []);

    return (
        <AuthContext.Provider value={{ users }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;