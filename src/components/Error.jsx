import { Link, useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError()
    return (
        <div className="container">
            <center>
                <h1>Oops!!!!!</h1>
            </center>
            <h1>Error: {error.message}</h1>
            <pre>{error.status} - {error.statusText}</pre>

            <Link to="/">Go home!</Link>
        </div>

    )
}
