interface RegisterFormInputs {
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => {

  return (
    <div className="container flex justify-center items-center">
      <form className="bg-white shadow rounded px-8 pt-6 pb-8 mb-4 w-full md:w-[550px]">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className='p-2 w-[100%] border rounded'
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className='p-2 w-[100%] border rounded'
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <a className='text-black' href='/Login'>Already have an account?</a>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
