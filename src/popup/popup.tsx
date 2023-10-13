import React, { useEffect, useState } from "react";
import './popup.css'



const Popup = () => {
    const [name, setName] = useState("");


    // 当组件首次挂载时，从 chrome.storage 中获取 name
    useEffect(() => {
        chrome.storage.sync.get(["name"], (res) => {
            if (res.name) {
                setName(res.name);
                console.log(res.name);
            }
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();  // 阻止默认的表单提交行为
        //const name = e.target[0].value;

        chrome.storage.sync.set({ name: name }, () => {
            console.log(`Name is set to ${name}`);
        });
    }



    return (
        <div className="h-screen">
            <h1 className="text-4xl text-green-500">Hello World</h1>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray ring-black px-4 py-4"
                type="text"
                name="name"
                placeholder="Enter a word.."
            />
            <button onClick={handleSubmit} className="py-4 px-3 bg-indigo-500 text-white m-2">Submit</button>
        </div>
    )
};

export default Popup;