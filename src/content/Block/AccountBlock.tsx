// Head.tsx
/**  <div className={styles.userContainer} onClick={login}>
                <UserSVG />
            </div> */import React, { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import styles from './account-block.module.scss'; // 导入SCSS模块

import UserSVG from '../../svg/UserSVG';
import AccountSVG from '../../svg/AccountSVG';
import { authInstance, initFirebase } from "../../app/firebase";

import { getAuth, getRedirectResult, signInWithCredential, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";

import store from "../redux/Store";
import { clearUserInfo, setUserInfo, setPremiumStatus } from "../redux/actions/appActions";
import { getCheckoutUrl, getPortalUrl } from "../../popup/Plan/stripePayment";
import CardSVG from '../../svg/CardSVG';
import LoginOutSVG from '../../svg/LoginOutSVG';
import { useDispatch } from 'react-redux';
import { showPlanOverlay } from '../redux/actions/planActions';
import { getPremiumStatus } from "../Overlay/Plan/getPremiumStatus";
import LoadingSVG from '../../svg/LoadingSVG';
import { AppState } from '../redux/reducers/appReducer';



export default function AccountBlock(appState: AppState) {

    // 当userInfo存在时，解构displayName和photoURL
    const userInfo = appState ? appState.userInfo : null;

    const firstName = userInfo?.displayName ? userInfo.displayName.split(' ')[0] : 'User';
    const photoURL = userInfo?.photoURL || 'default-avatar.png';
    const auth = authInstance;
    const app = initFirebase();
    //console.log("------appState.isPremium-------  ", appState.isPremium)


    const [isPremium, setIsPremium] = useState(appState ? appState.isPremium : false);

    const [isLoading, setIsLoading] = useState(appState ? false : true); // New loading state


    //useEffect(() => {
    const checkPremium = async () => {
        setIsLoading(true); // Set loading to true when check starts
        const newPremiumStatus = await getPremiumStatus(app);


        setIsPremium(newPremiumStatus);

        store.dispatch(setPremiumStatus(newPremiumStatus));
        setIsLoading(false); // Set loading to false after check is complete
    };

    //  }, [app, auth.currentUser?.uid]);

    //isSaved代表是否是已经登录过，存储起来的user，如果之前登录过，不需要dispatch setUserInfo
    const login = ({ isSaved }) => {
        // 这里应该是你的登录逻辑
        console.log("longin start===", isSaved);
        chrome.runtime.sendMessage({ action: "getAuthToken" }, function (response) {
            console.log('Token from background:', response.token);
            const token = response.token;
            if (token) {
                const credential = GoogleAuthProvider.credential(null, token);
                signInWithCredential(auth, credential).then((result) => {
                    // 身份验证成功
                    console.log('Firebase sign-in success', result);
                    if (!isSaved) {
                        updateAccountInfo({ user: result.user });
                    }
                }).catch((error) => {
                    // 处理错误
                    console.log('Firebase sign-in error', error);

                });
            }
        });
    }

    useEffect(() => {
        if (userInfo != null) {
            //setIsLoading(false);
            login({ isSaved: true });
        }

    }, []); // 空依赖数组，仅在组件挂载时执行


    const updateAccountInfo = ({ user }) => {
        console.log("==go to account==");
        checkPremium();
        store.dispatch(setUserInfo(user));
    };



    /*
        const manageSubscription = async () => {
            console.log("==manageSubscription==");
            const portalUrl = await getPortalUrl(app);
            console.log(portalUrl, "==portalUrl==");
    
            // 发送消息到 background script 来更新标签页
            chrome.runtime.sendMessage({ action: "updateTab", url: portalUrl }, (response) => {
                console.log("Tab updated", response);
            });
        };*/

    const signOut = () => {
        auth.signOut().then(() => {
            // 用户已登出，发送消息到content脚本
            store.dispatch(clearUserInfo());
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };
    const dispatch = useDispatch();
    const showPlan = (event) => {

        dispatch(showPlanOverlay(event.clientX, event.clientY));
    };



    // 如果userInfo不存在，显示登录图标
    if (!userInfo) {
        return (
            <div className={styles.leftBarBlock}>
                <div className={styles.activeContainer} onClick={() => login({ isSaved: false })}>
                    <div className={styles.iconContainer} >
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
                <div className={styles.avataIconContainer}>
                    <img
                        src={photoURL}
                        alt={`${firstName}'s avatar`}
                        className={styles.avatar}
                    />
                </div>
                <div className={styles.activeIconContainer} onClick={showPlan}>
                    {isLoading ? <LoadingSVG /> : (isPremium ? <CardSVG className="svg-large" /> : <CardSVG />)}

                </div>

                <div className={styles.activeIconContainer} onClick={signOut}>

                    <LoginOutSVG />
                </div>


            </div>
        </div>
    );
}

