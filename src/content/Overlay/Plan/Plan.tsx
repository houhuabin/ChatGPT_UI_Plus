import React from 'react';


import { useState } from "react";
import { authInstance, initFirebase } from "../../../app/firebase";
import { getCheckoutUrl, getPortalUrl } from "../../../popup/Plan/stripePayment";

import style from './plan.module.scss';
import { useDispatch, useSelector } from 'react-redux'
import { hidePlanOverlay } from '../../redux/actions/planActions';

export default function Plan() {
    const app = initFirebase();
    const auth = authInstance;
    //console.log(auth, "==auth==");

    const appState = useSelector((state: any) => state.app);
    const allNotesData = useSelector((state: any) => state.notes);

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


    const UpgradeToPremiumButton = ({ amount, period }) => {
        // 假设你有一个映射，它根据金额和周期来确定 priceId
        const priceMap = {
            'monthly': {
                '6': "price_1O4sLIDEhRzVc2TQQQqA9LDS",


                // ...其他月付金额
            },
            'yearly': {
                '60': "price_1OB27DDEhRzVc2TQ0m6DrDnh",

                // ...其他年付金额
            },
            'lifetime': {
                '120': "price_1OB2DvDEhRzVc2TQelSPBVS2",

            }
        };

        const upgradeToPremium = async () => {
            try {
                const periodMap = priceMap[period.toLowerCase()];
                if (!periodMap) {
                    console.log("Invalid period");
                    return;
                }

                const priceId = periodMap[amount];
                if (!priceId) {
                    console.log("Invalid amount");
                    return;
                }

                console.log(priceId, "==priceId==");
                const checkoutUrl = await getCheckoutUrl(app, priceId);
                if (!checkoutUrl) {
                    throw new Error("Failed to get checkout URL");
                }

                console.log(checkoutUrl, "==checkoutUrl==");
                chrome.runtime.sendMessage({ action: "openNewTab", url: checkoutUrl }, (response) => {
                    if (chrome.runtime.lastError) {
                        // 处理消息发送失败的情况
                        console.error(`Error sending message: ${chrome.runtime.lastError.message}`);
                    }
                });
                console.log("Upgrade to Premium");
            } catch (error) {
                console.error("Error in upgradeToPremium:", error.message);
                // 这里可以添加额外的错误处理逻辑，例如显示错误消息给用户
            }
        };

        // 格式化周期显示
        const formattedPeriod = period.toLowerCase() === 'yearly' ? 'Per Year' : 'Per Month';


        return (

            <button
                onClick={upgradeToPremium}
                className={style.planButton}
            >
                <div className={style.planButtonText}>
                    ${amount} {formattedPeriod}
                </div>
            </button>
        );
    };






    const accountSummary = (

        <div className={style.summaryText}>Signed in as {email}</div>


    );

    const isLimitExceeded = allNotesData.length > appState.notesLimitation;

    if (appState.notesLimitation == 10000000) {
        const dispatch = useDispatch();
        dispatch(hidePlanOverlay());

    }


    const recordsInfo = (
        <div style={{ color: 'white' }}>
            Limit: {appState.notesLimitation}<br />
            Current record count: {allNotesData.length}<br />

            {' Subscribe to Premium to unlock limits.'}
        </div>
    );
    const planPage = (

        <div className={style.planContatiner} >

            <div className={style.subscriptionPlanText}>Subscription Plan</div>
            {accountSummary}
            <UpgradeToPremiumButton amount="6" period="monthly" />
            <UpgradeToPremiumButton amount="60" period="yearly" />
            {recordsInfo}
            {/*  <UpgradeToPremiumButton amount="120" period="lifetime" />*/}

            {/* ...可以继续添加更多的按钮 */}
        </div>
    );

    const displayPage = planPage;


    return (
        <div className={style.popupContainer} >
            {displayPage}
        </div>

    );
}
