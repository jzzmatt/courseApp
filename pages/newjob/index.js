import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import Router from "next/router";

const insertJob = gql`
  mutation MyMutation($title: String!, $content: String!) {
    insert_jobs(objects: { title: $title, content: $content }) {
      returning {
        id
      }
    }
  }
`;

const NewJob = () => {
  const [InsertJob] = useMutation(insertJob);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    InsertJob({
      variables: {
        title,
        content,
      },
    });
    setTitle("");
    setContent("");
    Router.push("/");
  };
  return (
    <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto mt-4'>
      <form onSubmit={handleOnSubmit}>
        <div className='form-group mb-6'>
          <label
            htmlFor='exampleInputEmail1'
            className='form-label inline-block mb-2 text-gray-700'>
            Title
          </label>
          <input
            type='text'
            className='form-control
            
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter Job title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className='form-group mb-6'>
          <label
            htmlFor='exampleInputPassword1'
            className='form-label inline-block mb-2 text-gray-700'>
            Content
          </label>
          <textarea
            className='
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      '
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            id='exampleFormControlTextarea1'
            rows='3'
            placeholder='Your message'
          />
        </div>
        <div className='form-group form-check mb-6'></div>
        <div className='text-center'>
          <button
            className='px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewJob;
