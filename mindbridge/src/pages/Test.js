import { useAuth0 } from "@auth0/auth0-react";

export default async function Test() {
    const { getAccessTokenSilently } = useAuth0();
    const token = await getAccessTokenSilently({
        audience: `${process.env.REACT_APP_AUTH0_AUDIENCE}`
    });
    console.log(token);
    const res1 = await fetch('http://localhost:3001/api/public', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => {
        return response.json();
    }
    );
    const res2 = await fetch('http://localhost:3001/api/student',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            return response.json();
        });
    console.log(res1);
    console.log(res2);
    return (
        <div>
            <h1>Test</h1>
        </div>
    );
}