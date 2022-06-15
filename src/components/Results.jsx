import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ResultContext } from '../contexts/ResultContext';
import Loading from './Loading';
import { format } from 'timeago.js';
import ReactPlayer from 'react-player';


const Results = () => {
  
  const { results, isLoading, getResults, searchTerm } = useContext(ResultContext);
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      
        getResults(`${location.pathname}/q=${searchTerm}&num=100`)
      
    }
  
  },[searchTerm, location.pathname])


  if(isLoading) return <Loading/>

  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between mt-4 sm:px-56'>
          {results?.map(({ link, title, description }, index) => (
            <div key={index} className='md:w-2/5 w-full mt-5'>
              <a href={link} target="_blank" rel="nooreferrer">
                <p className='text-sm'>
                  {link.length > 30 ? link?.substring(0,30) :link }...
                </p>
                <p className='text-lg hover:underline dark:text-blue-400 text-blue-700'>
                  {title}
                </p>
              </a>
              <p className='text-md'>
                {description?.length > 100 ? description.substring(0,100) : description}...
              </p>
            </div>
          ))}
        </div>
      );
    case '/image':
      return (
        <div className='flex flex-wrap justify-center items-center'>
          {results?.map(({ image, link}, index) => (
            <a className='sm:p-3 p-5' href={link.href} key={index} target='_blank' rel='noreferrer'>
              <img src={image?.src} alt={link.title} loading="lazy" />
              <p className='w-36 break-words text-sm mt-2'>
                {link.title}
              </p>
            </a>
            
          ))}
        </div>
      )
    case '/news':
      return (
        <div className='flex flex-wrap justify-between mt-4 sm:px-56 items-center'>
          {results?.map(({ links,id, title, source, published }) => (
            <div key={id} className='md:w-2/5 w-full mt-5'>
                <p className='text-sm text-orange-900 dark:text-orange-200'>
                  {source?.title}
                </p>
              <a href={links?.[0].href} target="_blank" rel="nooreferrer" className='hover:underline'>
                <p className='text-lg dark:text-blue-400 text-blue-700'>
                  {title}
                </p>
              </a>
                <div className='flex gap-4'>
                <a className='hover:underline' href={source?.href} target="_blank" rel="nooreferrer" >
                     {source?.href}
                  </a>
                </div>
                  <p className='text-sm text-gray-400'>
                    {format(published)}
                  </p>
            </div>
          ))}
        </div>
      );
    case '/video':
      return (
        <div className="flex flex-wrap justify-around">
        {results?.map((video, index) => (
          <div key={index} className="p-4">
            {video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />}
        </div>
        ))}
      </div>
        );
    default:
      return "ERROR";
  }
}

export default Results