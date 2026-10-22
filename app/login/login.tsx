export function Login() {
  return (
    <div className="w-full max-w-xs">
      <form className="bg-grey-700 border-2 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="w-full flex justify-center">
          <p className="mb-5 text-xl font-bold">Login Form</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-white-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-white-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="******************"
          ></input>
        </div>
        <div className="flex items-center justify-between">
          <a
            className="inline-block border-1 p-3 align-baseline font-bold text-sm text-white-500 hover:text-blue-800"
            href="#"
          >
            Continue as guest
          </a>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}
