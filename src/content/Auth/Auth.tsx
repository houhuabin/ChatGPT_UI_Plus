import React from 'react';
import { initFirebase } from "../../app/firebase";

import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";

import './auth-module.scss';

export default function Auth() {


  const app = initFirebase();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        goToAccount({ user });
      } else {
        // 可选: 处理用户未登录的情况
        console.log("User not signed in");
      }
    } catch (error) {
      // 处理任何登录错误
      console.error("Error signing in:", error);
    }
  };

  const goToAccount = ({ user }) => {
    console.log("go to account");
    if (user) {
      // 用户已登录，发送用户信息到content脚本
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
          type: "user_info",
          data: user // 或任何你需要传递的用户相关信息
        });
      });
    } else {
      // 用户未登录
    }
  };

  /*
    const signIn = async () => {
  
      signInWithRedirect(auth, provider);
      const userCred = await getRedirectResult(auth);
  
      if (userCred) {
        goToAccount();
      }
    };
    /*
  function signIn() {
    const currentURL = window.location.href;
 
    // 打印到控制台
    console.log(currentURL + "   signIn urls");
    let popupDiv = document.createElement('div');
    popupDiv.innerHTML = `<iframe src="${chrome.runtime.getURL('options.html')}" ></iframe>`;
 
    document.body.appendChild(popupDiv);
 
  }*/




  const rightArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );



  return (
    <div className='auth bg-slate-900 text-blue  gap-4'>

      <div className="text-5xl md:text-6xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-teal-400 to-blue-500">
          my app
        </span>
      </div>
      <div className="text-xl md:text-2xl text-white font-light mb-8">
        Welcome! Let's get started.
      </div>
      <button
        onClick={signIn}
        className="bg-blue-600 p-4 px-6 text-lg rounded-lg hover:bg-blue-700 shadow-lg"
      >
        <div className="flex gap-2 items-center align-middle">
          Login With Google {rightArrow}
        </div>
      </button>

    </div >
  );
}
