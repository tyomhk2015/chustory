'use client';

const HitCounter = () => {
  return (
    <>
      <a href='https://hits.seeyoufarm.com'>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src='https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fwww.chustory.net'
          alt='Chustory hit'
        />
      </a>
    </>
  );
};

export default HitCounter;
