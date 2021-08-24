import React from 'react';
import ImageOne from '../images/feu_pre.jpg';
// import ImageTwo from '../images/sample2.jfif';
import flipped_classroom from '../images/flipped_classroom.png';

const Content = () => {
  return (
    <div className='bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300'>
      <h1 className='text-7xl mb-8 text-center'>Features</h1>
      <div className='menu-card p-4 border-4 border-yellow-500 md:border-green-500 mb-8'>
        <img
          src={ImageOne}
          alt='graduation of students'
          className='h-full rounded mb-1 shadow'
        ></img>
        <div className='center-content'>
          <h2 className='text-4xl mb-2'>Basic Education Department</h2>
          <p className='mb-20'>
            The Basic Education Department is a branch of the FEU – FERN
            College, a non- stock, non-profit institution that operates under
            the aegis of the Nicanor Reyes Educational Foundation, an affiliate
            of Far Eastern University.In June 1996, the Basic Education
            Department (BED) opened a Grade 1 class. A year after, the
            Pre-School and High School classes were opened. BED has since
            implemented a liberal arts oriented curriculum featuring enhanced
            instruction in Science, Math, English and Computer literacy.The
            Basic Education Department is committed to providing equal education
            opportunities for all students to acquire core knowledge and skills
            to succeed in a culturally diverse and technological world.
            <p className='mt-4'>
              Students will be equipped with knowledge and skills to be
              productive, proactive, self-regulated contributing members of
              society.
            </p>
            <p className='mt-4'>
              Today, the Basic Education Department has an increasing
              population, which presently includes foreign students. Its
              curriculum has been further enhanced with Emergency and Gender
              Education.
            </p>
          </p>
        </div>
      </div>
      <div className='menu-card p-4 border-4 border-yellow-500 md:border-green-500'>
        <img
          src={flipped_classroom}
          alt='The Flipped Classroom Approach and Social Constructivism'
          className='h-full rounded shadow'
        ></img>
        <div className='center-content'>
          <h2 className='text-4xl mb-2'>
            The Flipped Classroom Approach and Social Constructivism
          </h2>
          <p className='mb-20'>
            The flipped classroom approach’s main goal is to expose the students
            to course content before they come to the class through readings and
            videos. It’s like a learning scaffolding, where the students learn
            the fundamentals of the lesson and then reinforce them with facts in
            the class discussions. It also objects to the fact that teachers are
            no longer the source of knowledge, but rather a facilitator of
            learning in an online environment. It encourages students to learn
            at their own pace while collaborating with other students and
            teachers through the use of technology. Students become active
            creators of their own learning, or, to put it another way, they
            learn by doing. In that case, learning is more likely to be retained
            in the students if they can experience and grasp it in their own
            unique way. Finally, the learned knowledge is contextualized in the
            learner’s environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
