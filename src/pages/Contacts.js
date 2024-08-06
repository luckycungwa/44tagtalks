import { Card } from "@nextui-org/react";
import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center align-center">
        <div>
          <div class="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white justufy-between">
            <div className="flex flex-col justify-between gap-5">
              <div>
                <h1 class="text-gray-800 text-3xl font-extrabold">
                  Let's Talk
                </h1>
                <p class="text-sm text-gray-500 mt-4">
                  Have some big idea or brand to develop and need help? Then
                  reach out we'd love to hear about your project and provide
                  help.
                </p>
              </div>

              <div class="mt-12">
                <h2 class="text-gray-800 text-base font-bold">Email</h2>
                <ul class="mt-4">
                  <li class="flex items-center">
                    <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <FiMail />
                    </div>
                    <Link to="#" class="text-[#007bff] text-sm ml-4">
                      <small class="block">Mail</small>
                      <strong>info@example.com</strong>
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="mt-12">
                <h2 class="text-gray-800 text-base font-bold">Socials</h2>

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
                <p className="mt-8 text-sm text-gray-500">Terms and conditions. </p>
              </div>
            </div>

            <Card className="w-full p-8">
              <form class="ml-auto space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  class="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                />
                <textarea
                  placeholder="Message"
                  rows="6"
                  class="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
                ></textarea>
                <button
                  type="button"
                  class="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
                >
                  Send
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
