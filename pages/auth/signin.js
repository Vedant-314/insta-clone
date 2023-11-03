import {getProviders, signIn} from "next-auth/react"
import Header from "@/components/Header";

export default function signin({providers}) {
  return (
    <>
        <Header/>
        <div className="flex justify-center space-x-7 mt-20">
            <img className="hidden object-cover rotate-6 md:inline-flex md:w-48 " src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSw1aV2Ar2ocJgt3Lab0cMD00uYq3fAEfj2zQTVducmiTFrbqqc" alt="instagram" />
            <div className="">
                {Object.values(providers).map((provider)=>(
                    <div key={provider.name} className="flex flex-col items-center">
                        <img className="w-32 object-cover " src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/947fd-logo-instagram-bonito-png.png?fit=512%2C512&ssl=1" alt="" />
                        <p className="text-sm italic my-10 text-center">Login to continue</p>
                        <button onClick={()=> signIn(provider.id, {callbackUrl:"/"})} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with {provider.name}</button>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export async function getStaticProps(context){
    const providers = await getProviders();
    return {
        props: {providers}
    }
}
