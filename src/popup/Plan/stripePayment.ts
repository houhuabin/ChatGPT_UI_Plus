
import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { authInstance } from "../../app/firebase";

export const getCheckoutUrl = async (
  app: FirebaseApp,
  priceId: string
): Promise<string> => {
  console.log("==getCheckoutUrl==");
  const auth = authInstance;
  const userId = auth.currentUser?.uid;
  console.log(userId, "==userId==");
  if (!userId) throw new Error("User is not authenticated");

  let currentTabUrl: string = "https://chat.openai.com/"; // 定义变量来保存当前的URL

  // 获取当前活动的标签的URL
  /*
  await new Promise<void>((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      currentTabUrl = currentTab.url;
      resolve();
    });
  });
*/

  const db = getFirestore(app);
  const checkoutSessionRef = collection(
    db,
    "customers",
    userId,
    "checkout_sessions"
  );
  /// console.log(currentTabUrl, " ==currentTabUrl==");

  const docRef = await addDoc(checkoutSessionRef, {
    price: priceId,
    success_url: currentTabUrl,  // 使用currentTabUrl替代window.location.origin
    cancel_url: currentTabUrl,   // 使用currentTabUrl替代window.location.origin
  });

  return new Promise<string>((resolve, reject) => {
    const unsubscribe = onSnapshot(docRef, (snap) => {
      const { error, url } = snap.data() as {
        error?: { message: string };
        url?: string;
      };
      if (error) {
        unsubscribe();
        reject(new Error(`An error occurred: ${error.message}`));
      }
      if (url) {
        console.log("Stripe Checkout URL:", url);
        unsubscribe();
        resolve(url);
      }
    });
  });
};


export const getPortalUrl = async (app: FirebaseApp): Promise<string> => {
  const auth = authInstance;
  const user = auth.currentUser;

  let dataWithUrl: any;

  try {
    const functions = getFunctions(app, "us-east1");
    const functionRef = httpsCallable(
      functions,
      "ext-firestore-stripe-payments-createPortalLink"
    );


    let currentTabUrl: string = "https://chat.openai.com/";
    /*
        // 获取当前活动的标签的URL
        await new Promise<void>((resolve) => {
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const currentTab = tabs[0];
            currentTabUrl = currentTab.url;
            resolve();
          });
        });*/

    const { data } = await functionRef({
      customerId: user?.uid,
      returnUrl: currentTabUrl  // 使用currentTabUrl替代固定的URL
    });

    dataWithUrl = data as { url: string };
    console.log("Reroute to Stripe portal: ", dataWithUrl.url);
  } catch (error) {
    console.error(error);
  }

  return new Promise<string>((resolve, reject) => {
    if (dataWithUrl.url) {
      resolve(dataWithUrl.url);
    } else {
      reject(new Error("No url returned"));
    }
  });
};

