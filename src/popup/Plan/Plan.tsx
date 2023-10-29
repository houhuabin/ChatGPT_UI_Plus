import React from 'react';

import { PremiumPanel } from "./PremiumPanel2";
import { StandardPanel } from "./StandardPanel2";
import { useEffect, useState } from "react";
import { authInstance, initFirebase } from "../../app/firebase";
import { getAuth } from "firebase/auth";
import { getCheckoutUrl, getPortalUrl } from "./stripePayment";
import { getPremiumStatus } from "./getPremiumStatus";

import style from '../popup.module.scss';
import PlanDetail from './PlanDetail';

export default function Plan() {
    const app = initFirebase();
    const auth = authInstance;
    //console.log(auth, "==auth==");


    auth.onAuthStateChanged(user => {
        if (user) {
            // console.log(user.displayName, "------------==auth.currentUser==");
            setUserName(user.displayName);
            setEmail(user.email);
        } else {
            // 用户未登录或其他状态
            setUserName(null);
            setEmail(null);
        }
    });

    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    //const userName = auth.currentUser?.displayName;
    //const email = auth.currentUser?.email;

    const [isPremium, setIsPremium] = useState(false);

    useEffect(() => {
        const checkPremium = async () => {
            const newPremiumStatus = auth.currentUser
                ? await getPremiumStatus(app)
                : false;
            setIsPremium(newPremiumStatus);
        };
        checkPremium();
    }, [app, auth.currentUser?.uid]);

    const upgradeToPremium = async () => {
        const priceId = "price_1O5F66DEhRzVc2TQiU5X8MUU";
        console.log(priceId, "==priceId==");
        const checkoutUrl = await getCheckoutUrl(app, priceId);
        // router.push(checkoutUrl);
        console.log(checkoutUrl, "==checkoutUrl==");
        chrome.tabs.update({ url: checkoutUrl });
        console.log("Upgrade to Premium");
    };

    const manageSubscription = async () => {
        console.log("==manageSubscription==");
        const portalUrl = await getPortalUrl(app);
        chrome.tabs.update({ url: portalUrl });
        console.log(portalUrl, "==portalUrl==");
        //router.push(portalUrl);
        console.log("Manage Subscription");
    };

    const signOut = () => {
        auth.signOut();
        //router.push("/");
    };

    const upgradeToPremiumButton = (
        <button
            onClick={upgradeToPremium}
            className="bg-blue-600 p-4 px-6 text-lg rounded-lg hover:bg-blue-700 shadow-lg"
        >
            <div className="flex gap-2 items-center align-middle justify-center">
                Upgrade To Premium
            </div>
        </button>
    );

    const managePortalButton = (
        <button
            onClick={manageSubscription}
            className="bg-blue-600 p-4 px-6 text-lg rounded-lg hover:bg-blue-700 shadow-lg"
        >
            <div className="flex gap-2 items-center align-middle justify-center">
                Manage Subscription
            </div>
        </button>
    );

    const signOutButton = (
        <button
            onClick={signOut}
            className="hover:underline text-slate-500 hover:text-slate-300 text-lg text-center"
        >
            <div className="flex gap-2 items-center align-middle justify-center">
                Sign Out
            </div>
        </button>
    );

    const accountSummary = (
        <div>
            <div className="text-slate-500 mb-1">Signed in as {userName}</div>
            <div className="text-slate-300 text-xl">{email}</div>
        </div>
    );

    const statusPanel = isPremium ? <PremiumPanel /> : <StandardPanel />;
    const memberButton = isPremium ? managePortalButton : upgradeToPremiumButton;

    return (
        <div className={style.popupContainer} >

            <div className="flex flex-col gap-8">
                {accountSummary}
                <StandardPanel />
                <PremiumPanel />
                {memberButton}

                <PlanDetail />
            </div>

        </div>
    );
}
