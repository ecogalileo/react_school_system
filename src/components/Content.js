import React from 'react';
import ImageOne from '../images/sample1.jfif';
import ImageTwo from '../images/sample2.jfif';

const Content = () => {
  return (
    <>
      <div className='menu-card'>
        <h1 className='text-7xl mb-8'>Features</h1>
        <img
          src={ImageOne}
          alt='graduation of students'
          className='h-full rounded mb-1 shadow'
        ></img>
        <div className='center-content'>
          <h2 className='text-4xl mb-2'>School Library</h2>
          <p className='mb-20'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className='menu-card'>
        <img
          src={ImageTwo}
          alt='graduation of students'
          className='h-full rounded shadow'
        ></img>
        <div className='center-content'>
          <h2 className='text-4xl mb-2'>Graduation</h2>
          <p className='mb-20'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
