export const Login = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*******"
          />
        </div>

        <button>Log in</button>

        <p>
          Don't have an Account?
          {/* <Link to="/register">Register !</Link>{" "} */}
        </p>
      </form>

      <button>Login with Google</button>
    </div>
  );
};
