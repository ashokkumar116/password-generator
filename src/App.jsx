import { useState } from "react";
import "./App.css";

function App() {
    const [length, setLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [generatedPassword, setGeneratedPassword] = useState("");
    const [show,setShow] = useState(false);
    const generatePassword = () => {
        let password = "";
        let charset = "";
        if (includeUppercase) {
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (includeLowercase) {
            charset += "abcdefghijklmnopqrstuvwxyz";
        }
        if (includeNumbers) {
            charset += "1234567890";
        }
        if (includeSymbols) {
            charset += "!@#$%^&*";
        }
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        setGeneratedPassword(password);
    };

    const copyToClipboard = () => {
        if(generatedPassword !== ""){
            navigator.clipboard.writeText(generatedPassword);
            setShow(true)
            setTimeout(()=>{
                setShow(false);
            },3000);
        }
        else{
            setShow(false);
        }
    };

    return (
        <>
            {show && (<div className="password-copied">
            <i class="fa-solid fa-circle-check"></i>
                <p>
                
                     Password Copied
                </p>
            </div>)}
            <div className="password-generator">
                <h1>Password Generator</h1>
                <div className="input-group">
                    <label htmlFor="inp">Password Length : </label>
                    <input
                        type="number"
                        id="inp"
                        value={length}
                        onChange={(e) => setLength(parseInt(e.target.value))}
                    />
                </div>
                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="includeUppercase"
                        checked={includeUppercase}
                        onChange={(e) => setIncludeUppercase(e.target.checked)}
                    />
                    <label htmlFor="includeUppercase">Include UpperCase</label>
                </div>
                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="includeLowercase"
                        checked={includeLowercase}
                        onChange={(e) => setIncludeLowercase(e.target.checked)}
                    />
                    <label htmlFor="includeLowercase">Include LowerCase</label>
                </div>
                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="includeNumbers"
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                    />
                    <label htmlFor="includeNumbers">Include Numbers</label>
                </div>
                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id="includeSymbols"
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                    />
                    <label htmlFor="includeSymbols">Include Symbols</label>
                </div>
                <button className="generate" onClick={generatePassword}>
                    Generate Password
                </button>
                <div className="generated-box">
                    <input type="text" value={generatedPassword} readOnly />
                    <button onClick={copyToClipboard}>
                        <span className="material-symbols-outlined">
                            content_copy
                        </span>
                        Copy
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
