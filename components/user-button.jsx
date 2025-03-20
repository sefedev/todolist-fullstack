import { auth } from "../auth";
import { SignIn } from "./auth-components";

const UserButton = async () => {
    const session = await auth()
    if (!session.user) return <SignIn /> 
    console.log(session)
    return (
        <div>
            <p>Signed In as {session.user.name}</p>
            <button>Sign out</button>
        </div>
    )
}

export default UserButton;