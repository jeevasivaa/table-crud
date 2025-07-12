import { useState } from "react";
function RegFrm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}, Email: ${email}`);
    };
    
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>
            Name:
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </label>
        </div>
        <div>
            <label>
            Email:
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </label>
        </div>
        <button type="submit">Register</button>
        </form>
    );


}