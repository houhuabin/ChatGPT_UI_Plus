// Head.tsx
/**  <div className={styles.userContainer} onClick={login}>
                <UserSVG />
            </div> */import React from 'react';
import { User } from 'firebase/auth';
import styles from './account-block.module.scss'; // 导入SCSS模块

import UserSVG from '../../svg/UserSVG';
import AccountSVG from '../../svg/AccountSVG';
import { authInstance, initFirebase } from "../../app/firebase";

import { getAuth, getRedirectResult, signInWithCredential, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";

import store from "../redux/Store";
import { clearUserInfo, setUserInfo } from "../redux/actions/appActions";
interface HeadProps {
    userInfo?: User; // userInfo现在是可选的
}

export default function AccountBlock({ userInfo }: HeadProps) {
    // 当userInfo存在时，解构displayName和photoURL
    const firstName = userInfo?.displayName ? userInfo.displayName.split(' ')[0] : 'User';
    const photoURL = userInfo?.photoURL || 'default-avatar.png';
    const auth = authInstance;
    const provider = new GoogleAuthProvider();

    const handleUserClick = () => {
        console.log(" ==========setting click ==============");
    }

    // content.js

    const login = () => {
        // 这里应该是你的登录逻辑
        console.log("longin start===")
        chrome.runtime.sendMessage({ action: "getAuthToken" }, function (response) {
            console.log('Token from background:', response.token);
            const token = response.token;
            if (token) {
                const credential = GoogleAuthProvider.credential(null, token);
                signInWithCredential(auth, credential).then((result) => {
                    // 身份验证成功
                    console.log('Firebase sign-in success', result);
                    goToAccount({ user: result.user });

                }).catch((error) => {
                    // 处理错误
                    console.log('Firebase sign-in error', error);

                });
            }
        });
    }

    const goToAccount = ({ user }) => {
        console.log("==go to account==");
        store.dispatch(setUserInfo(user));
    };


    // 如果userInfo不存在，显示登录图标
    if (!userInfo) {
        return (
            <div className={styles.leftBarBlock}>
                <div className={styles.container} onClick={login}>
                    <div className={styles.accountContainer} >
                        <AccountSVG />
                    </div>
                    <div className={styles.welcomeMessage}>Login with google account</div>
                </div>
            </div>
        );
    }

    // 否则，显示用户信息
    return (
        <div className={styles.leftBarBlock}>
            <div className={styles.container}>
                <img
                    src={photoURL}
                    alt={`${firstName}'s avatar`}
                    className={styles.avatar}
                />
                <div className={styles.welcomeMessage}>Welcome, {firstName}!</div>
            </div>
        </div>
    );
}

