import { useLoaderData, Form, redirect, useActionData, useNavigation } from 'react-router-dom'
import { LoginSection } from './Login.styled'
import { loginUser } from "../../api/apiUtility"

import loginVector from '/public/images/login.jpg'

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export const action = async ({ request }) => {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"

    try {
        await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        const response = redirect(pathname)
        response.body = true
        return response
    }catch(err){
        return err.message;
    }
}

export default function Login() {
    const errorMessage = useActionData()
    const message = useLoaderData()
    const navigation = useNavigation()

    return (
        <LoginSection className='container'> 
            {message && <h2 className="errorMessage">{message}</h2>}
            {errorMessage && <h2 className="errorMessage">{errorMessage}</h2>}
            <section className="content">
                <div className="col">
                    <img src={loginVector} alt="login vector" />
                </div>
                <Form method="post" className="form">
                    <h1 className="HeaderTitle">Sign in to youraccount</h1>
                    <p>Start your VANLIFE journey, your road trip with the perfect travel van rental Today!</p>
                    <input type="email" name="email" placeholder="Type b@b.com to access..." />
                    <input type="password" name="password" placeholder="Type p123 to access..." />
                    <button disabled={navigation.state === "submitting"} className="orange-btn">
                        {navigation.state === "submitting"
                            ? "Logging in ..."
                            : "Log in"
                        }
                    </button>
                </Form>
            </section>
        </LoginSection>
    )
}