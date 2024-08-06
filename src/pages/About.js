import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiPhoneCall, FiTwitter, FiInstagram, FiLinkedin, FiFacebook,  } from 'react-icons/fi';

const About = () => {
    return (
        <div>
            <div class="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-[#ffffff] rounded-lg">
            <div class="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
                <div>
                    <h1 class="text-4xl font-bold">About The Blog</h1>
                    <p class="text-sm text-#dcdcdc-300 mt-4 leading-relaxed">Untapped Point is a blog that focuses on the latest news and trends. We cover Topics around productivity, technology, design, and more.</p>

                    <ul class="mt-12 space-y-8">
                        <li class="flex items-center">
                            <FiMail />
                            <Link to="#" class=" text-sm ml-4">
                                info@example.com
                            </Link>
                        </li>
                        <li class="flex items-center">
                            <FiPhoneCall />
                            <Link to="#" class=" text-sm ml-4">
                                +27 75 265 9713
                            </Link>
                        </li>
                        <li class="flex items-center">
                            <FiMapPin />
                            <Link to="#"class=" text-sm ml-4">
                                123 Street 256 House
                            </Link>
                        </li>
                    </ul>

                    <ul class="flex mt-4 space-x-4">
                  <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Link to="#">
                      <FiFacebook />
                    </Link>
                  </li>
                  <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Link to="#">
                      <FiLinkedin />
                    </Link>
                  </li>
                  <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Link to="#">
                      <FiFacebook />
                    </Link>
                  </li>
                  <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Link to="#">
                      <FiTwitter />
                    </Link>
                  </li>
                  <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <Link to="#">
                      <FiInstagram />
                    </Link>
                  </li>
                </ul>
                </div>

                <div class="bg-gray-100 p-6 rounded-lg">
                    <p class="text-sm font-semibold text-gray-800">I'm interested in...</p>

                    <div class="space-y-4 max-lg:mt-4">
                        <button type="button" class="px-4 py-2 rounded-lg bg-[#a91079] text-white text-sm tracking-wider font-medium outline-none border-2 border-[#a91079] mr-4">Graphic Design</button>
                        <button type="button" class="px-4 py-2 rounded-lg bg-transparent text-gray-800 text-sm tracking-wider font-medium outline-none border-2 border-gray-300 mr-4">Web Dev</button>
                        <button type="button" class="px-4 py-2 rounded-lg bg-transparent text-gray-800 text-sm tracking-wider font-medium outline-none border-2 border-gray-300">About The Blog</button>
                    </div>

                    <form class="mt-8 space-y-4">
                        <input type='text' placeholder='Name'
                            class="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
                        <input type='email' placeholder='Email'
                            class="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
                        <input type='text' placeholder='Subject'
                            class="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#a91079]" />
                        <textarea placeholder='Message' rows="6"
                            class="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-[#a91079]"></textarea>
                        <button type='button'
                            class="text-white bg-[#a91079] hover:bg-[#a91079e2] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' class="mr-2" viewBox="0 0 548.244 548.244">
                                <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                            </svg>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default About;
