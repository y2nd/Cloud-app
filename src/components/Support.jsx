import React from 'react';

import { 
    PhoneIcon, 
    ArrowSmRightIcon
} from "@heroicons/react/outline";
import {
    ChipIcon, 
    SupportIcon
} from "@heroicons/react/solid";

import supportImg from '../assets/support.jpg';

const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
            <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="" />
        </div>

        <div className="maw-w-[1240px] mx-auto text-white relative">
            <div className="px-4 py-12">
                <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Support</h2>
                <h3 className="text-5xl font-bold py-6 text-center">Finding the right teams</h3>
                <p className="py-4 text-3xl text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime ab ipsum dolorem. Tempore eveniet ut nam odit! Ab perferendis provident.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
                <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                        <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]"></PhoneIcon>
                        <h3 className="font-bold text-2xl my-6">Sales</h3>
                        <p className="text-gray-600 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur tenetur nam reiciendis ad quidem vero accusamus id mollitia assumenda eius officia consequatur eum, voluptatum reprehenderit.</p>
                    </div>
                    <div className="bg-slate-100 py-4 pl-8">
                        <p className="flex items-center text-indigo-600">Contact us <ArrowSmRightIcon className="w-5 ml-2"></ArrowSmRightIcon></p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                        <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]"></PhoneIcon>
                        <h3 className="font-bold text-2xl my-6">Technical Support</h3>
                        <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas eveniet perferendis optio, doloremque laboriosam, dolores vel, fugiat laudantium ullam iusto nemo obcaecati minus. Perferendis?</p>
                    </div>
                    <div className="bg-slate-100 py-4 pl-8">
                        <p className="flex items-center text-indigo-600">Contact us <ArrowSmRightIcon className="w-5 ml-2"></ArrowSmRightIcon></p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                        <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]"></PhoneIcon>
                        <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
                        <p className="text-gray-600 text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, laboriosam id est dignissimos pariatur, recusandae libero officia, consequatur iste animi voluptatem odio incidunt tempora optio!</p>
                    </div>
                    <div className="bg-slate-100 py-4 pl-8">
                        <p className="flex items-center text-indigo-600">Contact us <ArrowSmRightIcon className="w-5 ml-2"></ArrowSmRightIcon></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Support