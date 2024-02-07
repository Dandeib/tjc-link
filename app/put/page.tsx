'use client'
import { useState } from "react";

export default function put() {

    const [link, setlink] = useState<any>()

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setlink(value);
    };

    const submit = () => {
        if(link) {
           fetch('/api/links', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "text": link}),
            }) 
            alert('Post')
            window.location.href = '../'
        }else {
            alert('Kein inhalt')
        }
        
    }

    return (
        <main className="w-screen h-[1200px] bg-[black]">
            <div className="absolute top-[50px] left-[50px] border-[white]">
                <input className="text-[black]" type="text" onChange={handleDescriptionChange}/>
                <br />
                <button onClick={submit}>submit</button>
            </div>
            
        </main>
    )
}