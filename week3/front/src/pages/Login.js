import './Login.css';

function Login(props) {
    return (
        <div className="Login">
            <h1>Login</h1>
            <h2>{props.time}</h2>
        </div>
    );
}

export default Login;