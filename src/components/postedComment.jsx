import React from 'react';
import userAvatar from '../images/avatars/image-amyrobson.png';
import iconPlus from '../images/icon-plus.svg';
import iconMinus from '../images/icon-minus.svg';
import iconReply from '../images/icon-reply.svg'
const PostedComment = () => {
    return (
        <section className='mt-8 p-20 bg-gray-100'>
            <div class="p-5 max-w-xl mx-auto bg-white flex items-start rounded-lg md:flex-col sm:p-4">
                <div className='flex-col bg-lightGray self-center px-3 py-2 rounded-lg md:self-start md:flex md:flex-row md:justify-around md:w-1/5 md:px-2 md:py-1 md:mt-3 md:ml-6 sm:w-2/5 sm:ml-1'>
                    <button><img class="" src={iconPlus} alt="user profile's avatar" /></button>
                    <p className='mt-2 md:mt-0 text-moderateBlue'>0</p>
                    <button><img class="" src={iconMinus} alt="user profile's avatar" /></button>
                </div>
                <div class="grow ml-3 mr-3 text-center md:order-first" >
                    <div className='flex justify-start gap-3 mb-5'>
                        <img class="grow-0 h-8 rounded-full ml-6 sm:ml-0" src={userAvatar} alt="user profile's avatar" />
                        <p className='font-semibold text-sm'>amyrobson</p>
                        <p className='text-gray-600 text-sm'>1 month ago</p>
                    </div>
                    <p className='text-sm text-gray-600 text-start w-full ml-6 sm:ml-0'>Impressive! Though, it seems like the drag feature could be improve. But overall it looks incredible. You've nailed the design and the responsiveness
                        at various breakpoints works really well.
                    </p>
                </div>
                <button class="w-2/5 text-sm text-moderateBlue font-semibold md:self-end md:-mt-6"><span className='inline-block mr-1'><img class="" src={iconReply} alt="user profile's avatar" /></span>Reply</button>
            </div>
        </section>
    )

}

export default PostedComment;