export default async function Test() {
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