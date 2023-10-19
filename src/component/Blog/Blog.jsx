import React from 'react';

const Blog = () => {
    return (
        <div className='md:mx-40'>
            <div>
                <h3 className='text-2xl font-bold'>Tell us the differences between uncontrolled and controlled components?</h3>
                <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className='mt-5'>
                <h3 className='text-2xl font-bold'>How to validate React props using PropTypes?</h3>
                <p>We combine components into an app by passing data from parent components to child components. To do this, we pass data with props. Props are like HTML attributes, but they can contain dynamic data.

                    A parent component passes props down to child components. And child components receive them. We can pass any data as props. Therefore, we need a way to validate their data type so that the child component gets what they expect.</p>
            </div>
            <div className='mt-5'>
                <h3 className='text-2xl font-bold'>Tell us the difference between nodejs and express js?</h3>
                <p>NodeJS has an event-driven, non-blocking I/O model, which makes it a practical and lightweight server option. There must be a low-latency environment that can handle many concurrent connections.</p>
            </div>
            <div className='mt-5'>
                <h3 className='text-2xl font-bold'>What is a custom hook, and why will you create a custom hook?</h3>
                <p>Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.</p>
            </div>
        </div>
    );
};

export default Blog;