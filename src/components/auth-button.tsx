import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthButton() {
    const { data: session } = useSession()

    if (session && session.user) {    
        return session.user.image ? <img src={ session.user.image } className="h-11 rounded-full" /> : <button onClick={() => signOut()} className="py-2.5 px-10 bg-red-400 text-white rounded-lg">Logout</button>
    }

    return <button onClick={() => signIn()} className="py-2.5 px-10 border border-1 border-white text-white rounded-lg">Login</button>
}