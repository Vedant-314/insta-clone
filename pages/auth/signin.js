import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { db } from "@/firebase";
import Header from "@/components/Header";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Signin() {
    const router = useRouter();
    async function onGoogleClick(){
        try {
            const auth  = getAuth();
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider)
            const user = auth.currentUser.providerData[0]
            const docRef = doc(db, "users", user.uid)
            const docSnap = await getDoc(docRef)
            if(!docSnap.exists()){
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    userImg: user.photoURL,
                    uid: user.uid,
                    timestamp: serverTimestamp(),
                    username: user.displayName.split(" ").join("").toLocaleLowerCase()
                });
            }
            router.push("/")
        } catch(error){
            console.log(error)
        }
    }
  return (
    <>
        <Header/>
        <div className="flex justify-center space-x-7 mt-20">
            <img className="hidden object-cover rotate-6 md:inline-flex md:w-48 " src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSw1aV2Ar2ocJgt3Lab0cMD00uYq3fAEfj2zQTVducmiTFrbqqc" alt="instagram" />
            <div className="">
                
                    <div className="flex flex-col items-center">
                        <img className="w-32 object-cover " src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/947fd-logo-instagram-bonito-png.png?fit=512%2C512&ssl=1" alt="" />
                        <p className="text-sm italic my-10 text-center">Login to continue</p>
                        <button onClick={onGoogleClick} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with Google</button>
                    </div>
            </div>
        </div>
    </>
  )
}
