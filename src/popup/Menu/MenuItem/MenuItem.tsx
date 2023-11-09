import React from 'react'
import { MenuBlockData } from '../Menu'
import MenuHotkey from '../MenuHotkey/MenuHotkey'
import style from './menu-item.module.scss'
import MenuIcon from './MenuIcon'

import { authInstance, initFirebase } from "../../../app/firebase";

import { getAuth, getRedirectResult, signInWithCredential, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";


export default function MenuItem({ menuBlockData }: { menuBlockData: MenuBlockData }) {


    const app = initFirebase();
    const auth = authInstance;
    const provider = new GoogleAuthProvider();


    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            if (user) {
                console.log(JSON.stringify(user, null, 2));
                goToAccount({ user });
            } else {
                // 可选: 处理用户未登录的情况
                console.log("==User not signed in==");
            }
        } catch (error) {
            // 处理任何登录错误
            console.error("Error signing in:", error);
        }
    };

    const goToAccount = ({ user }) => {
        console.log("==go to account==");
        if (user) {
            // 用户已登录，发送用户信息到content脚本
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                console.log(tabs);
                const activeTab = tabs[0];
                console.log("==activeTab==", activeTab);
                chrome.tabs.sendMessage(activeTab.id, {
                    type: "user_info",
                    data: user // 或任何你需要传递的用户相关信息
                });
                console.log("==sendMessage==");
            });
            // window.close();
        } else {
            // 用户未登录
        }
    };
    const handleSignOut = () => {
        auth.signOut().then(() => {
            // 用户已登出，发送消息到content脚本
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                const activeTab = tabs[0];
                chrome.tabs.sendMessage(activeTab.id, {
                    type: "user_logout", // 使用不同的类型来区分登录和登出
                });
                console.log("==Logout message sent==");
            });
            window.close();
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };

    const handleClick = () => {
        if (menuBlockData.id === 1) {
            signIn();
        } else if (menuBlockData.id === 2) {
            console.log("==sign out==");
            handleSignOut(); // 调用处理登出的函数
        } else if (menuBlockData.id === 3) {
            window.location.href = 'plan.html';
            // chrome.tabs.create({ url: 'plan.html' });
        } else if (menuBlockData.id === 4) {
            signInWithGoogle(true);
        }
    };


    function signInWithGoogle(interactive) {
        console.log("Auth trying==============");
        chrome.identity.getAuthToken({ interactive: true }, function (token) {
            // Token: This requests an OAuth token from the Chrome Identity API.
            try {
                if (chrome.runtime.lastError) {
                    // 打印出可能的错误信息
                    console.error('Chrome Runtime Error:', chrome.runtime.lastError.message);
                } else if (token) {
                    // Follows: https://firebase.google.com/docs/auth/web/google-signin
                    // Authorize Firebase with the OAuth Access Token.
                    const credential = GoogleAuthProvider.credential(null, token);
                    signInWithCredential(auth, credential).then((result) => {
                        console.log("Success!!!");
                        console.log(result);
                        const user = result.user;

                        if (user) {
                            // console.log(JSON.stringify(user, null, 2));
                            goToAccount({ user });
                        } else {
                            // 可选: 处理用户未登录的情况
                            console.log("==User not signed in==");
                        }
                    }).catch((error) => {

                        // 打印出signInWithCredential中捕获的错误
                        console.error('signInWithCredential Error:', error);
                    });
                } else {
                    console.error('The OAuth token was null');
                }
            } catch (e) {
                // 打印出任何其他可能的错误
                console.error('Unexpected Error:', e);
            }
        });
    }

    return (
        <div className={style.menuItem} onClick={handleClick}>
            <div className={style.iconContainer}>
                <MenuIcon menuBlockData={menuBlockData} />

            </div>
            <div className="text-transparent bg-clip-text bg-gradient-to-tr from-teal-400 to-blue-500">

                {menuBlockData.title}
            </div>
            <div className={style.hotkeycontainer} >

                <MenuHotkey text={menuBlockData.hotKey} />
            </div>

        </div>
    )
}
