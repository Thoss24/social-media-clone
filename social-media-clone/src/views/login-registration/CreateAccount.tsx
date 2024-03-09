
const CreateAccount = () => {
    return (
        <div className="flex w-full justify-center items-center">
        <section className="flex flex-col justify-center items-center bg-white rounded-lg p-3">
            <h1 className="text-2xl font-semibold m-3">Create Account</h1>
            <form action="" className="flex flex-col justify-center items-start">
                <fieldset className="flex flex-col justify-center items-start m-1">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>
                </fieldset>
                <fieldset className="flex flex-col justify-center items-start m-1">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"/>
                </fieldset>
                <div className="flex flex-row justify-between w-full">
                <button className="mt-3 rounded-lg bg-emerald-400 text-white p-1" type="submit">Login</button>
                <button className="mt-3 rounded-lg bg-emerald-400 text-white p-1 flex sm:hidden" type="submit">Sign up</button>
                </div>
            </form>
        </section>
        </div>
    )
};

export default CreateAccount;