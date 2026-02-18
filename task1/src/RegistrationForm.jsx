import { useState } from "react";

function RegistrationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [NameError, setNameError] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [ageError, setAgeError] = useState("");
    const [success, setSuccess] = useState(false);

    const validateName = (name) => {
        if (name.trim() === "") return "Name is required.";
        if (name.length < 2) return "Name must be at least 2 characters.";
        return "";
    };

    const validateEmail = (email) => {
        if (email.trim() === "") return "Email is required.";
        const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
        if (!emailRegex.test(email)) return "Invalid email format.";
        return "";
    };

    const validateAge = (age) => {
        if (age.trim() === "") return "Age is required.";
        if (isNaN(age) || age < 18) return "Age must be 18 or older.";
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameError = validateName(name);
        const emailError = validateEmail(email);
        const ageError = validateAge(age);

        setNameError(nameError);
        setEmailError(emailError);
        setAgeError(ageError);

        if (nameError || emailError || ageError) return;

        setSuccess(true);
        setName("");
        setEmail("");
        setAge("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {NameError && <p style={{ color: "red" }}>{NameError}</p>}

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {EmailError && <p style={{ color: "red" }}>{EmailError}</p>}

            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            {ageError && <p style={{ color: "red" }}>{ageError}</p>}

            <button type="submit">Submit</button>

            {success && <p style={{ color: "green" }}>Registration successful!</p>}
        </form>
    );
}

export default RegistrationForm;