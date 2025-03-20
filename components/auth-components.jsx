import { signIn, signOut } from "../auth"


export const SignIn = ({provider, ...props}) => {
    return (
        <form action={async () => {
            'use server'
            await signIn(provider)
        }}>
            <button {...props}>Sign in</button>
        </form>
    )
}

export const SignOut = ({...props}) => {
    return (
        <form action={async () => {
            'use server'
            await signOut()
        }}>
            <button {...props}>Sign out</button>
        </form>
    )
}