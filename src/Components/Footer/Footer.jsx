

const Footer = () => {
    return (
        <>





            <footer className=  "  relative bg-white dark:bg-gray-900 mt-10">
                <div className="mx-auto  w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex  md:justify-between">
                        <div className="  w-full md:w-1/3 mb-6 md:mb-0">
                            <a href="/" className="flex items-center">
                                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                                <span className="self-center text-[#0B50B9] text-2xl font-semibold whitespace-nowrap dark:text-white">ELSAQA</span>
                            </a>
                            <p className=" mt-4 w-[full]">ELSAQA is an ecosystem built on top of Tailwind CSS including a component library, block sections, a Figma design system and other resources.</p>
                        </div>
                        <div className=" w-full md:w-2/3 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                            <div className="">
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                                <ul className="text-gray-500 dark:text-gray-400  font-medium">
                                    <li className="mb-4">
                                        <a href="https://flowbite.com/" className="hover:underline">Documentation</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://flowbite.com/" className="hover:underline">ELSAQA Blocks</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://flowbite.com/" className="hover:underline">ELSAQA Icons</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://flowbite.com/" className="hover:underline">ELSAQA Figma</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/" className="hover:underline">ELSAQA GPT</a>
                                    </li>
                                    <li>
                                        <a href="https://tailwindcss.com/" className="hover:underline">Pro Version</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help & support</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="https://flowbite.com/" className="hover:underline">Contact us</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://flowbite.com/" className="hover:underline">Support center</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://flowbite.com/" className="hover:underline">Hire us
                                            New</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">

                                    <li className="mb-4">
                                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                                    </li>
                                    <li className="mt-4">
                                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Twitter</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">License (EULA)</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy policy</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Terms & conditions</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Brand guideline</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className=" flex justify-center  w-full mx-auto sm:flex sm:items-center ">
                        <span className="  text-center text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">ELSAQA™</a>. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer