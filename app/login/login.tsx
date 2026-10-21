export function Login() {
  return (
    <div>
      <form>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              Login
            </p>
            <ul>
              <li>
                <label htmlFor="username">Username:</label>
                <input name="username"></input>
              </li>
              <li>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password"></input>
              </li>
              <li>
                <button type="submit">Login</button>
                <button>Continue as guest</button>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
