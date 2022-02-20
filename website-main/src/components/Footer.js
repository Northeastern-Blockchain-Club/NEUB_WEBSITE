import React from 'react'



const Footer = () => {
    return (
        <footer class="bg-gray-50">
            <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <p class="font-medium">
                            Company
                        </p>

                        <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <a href="" class="hover:opacity-75">About</a>
                            <a href="" class="hover:opacity-75">Meet the Team</a>
                            <a href="" class="hover:opacity-75">History</a>
                            <a href="" class="hover:opacity-75">Careers</a>
                        </nav>
                    </div>

                    <div>
                        <p class="font-medium">
                            Services
                        </p>

                        <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <a href="" class="hover:opacity-75">1on1 Coaching</a>
                            <a href="" class="hover:opacity-75">Company Review</a>
                            <a href="" class="hover:opacity-75">Accounts Review</a>
                            <a href="" class="hover:opacity-75">HR Consulting</a>
                            <a href="" class="hover:opacity-75">SEO Optimisation</a>
                        </nav>
                    </div>

                    <div>
                        <p class="font-medium">
                            Helpful Links
                        </p>

                        <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <a href="" class="hover:opacity-75">Contact</a>
                            <a href="" class="hover:opacity-75">FAQs</a>
                            <a href="" class="hover:opacity-75">Live Chat</a>
                        </nav>
                    </div>

                    <div>
                        <p class="font-medium">
                            Legal
                        </p>

                        <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <a href="" class="hover:opacity-75">Privacy Policy</a>
                            <a href="" class="hover:opacity-75">Terms & Conditions</a>
                            <a href="" class="hover:opacity-75">Returns Policy</a>
                            <a href="" class="hover:opacity-75">Accessibility</a>
                        </nav>
                    </div>
                </div>

                <div class="pt-8 mt-8 border-t border-gray-100 sm:items-center sm:justify-between sm:flex">
                    <p class="text-xs text-gray-500">
                        &copy; NEU Blockchain, 2022
                    </p>


                </div>
            </div>
        </footer>
    );
}

export default Footer;