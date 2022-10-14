import React from 'react';
import userAvatar from '../images/avatars/image-amyrobson.png'
const AddComment = () => {
    return (
        <section className='mt-8 p-20 bg-gray-100'>
            <div class="p-5 max-w-lg mx-auto bg-white flex items-start rounded-lg md:flex-col md:max-w-md sm:max-w-xl">
                <img class="grow-0 block mx-auto h-8 rounded-full sm:mx-0 sm:shrink-0 md:ml-14 md:mt-3" src={userAvatar} alt="user profile's avatar" />
                <div class="grow ml-3 mr-3 text-center md:order-first md:mx-auto sm:w-full md:w-4/5" >
                    <textarea class="border border-gray-200 pt-1 pl-3 w-full h-16 resize-none rounded text-sm" placeholder='Add a comment'></textarea>
                </div>
                <button class="grow-0 px-6 py-2 text-sm text-white font-semibold rounded-lg border bg-moderateBlue md:self-end md:-mt-9 md:mr-12 sm:mr-0">SEND</button>
            </div>
        </section>
    )

}

export default AddComment;