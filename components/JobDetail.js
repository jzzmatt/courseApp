"use client";
import React, { useState } from "react";
import { useQuery, gql, useMutation, useSubscription } from "@apollo/client";

const EditContent = gql`
  mutation MyMutation($id: Int!, $content: String!) {
    update_jobs_by_pk(pk_columns: { id: $id }, _set: { content: $content }) {
      id
      title
      content
    }
  }
`;

const DeleteJob = gql`
  mutation MyMutation($id: Int!) {
    delete_jobs_by_pk(id: $id) {
      id
    }
  }
`;

const JobDetail = ({ job }) => {
  const [isDisabled, setIsDisable] = useState(true);
  const [isHiding, setIsHiding] = useState(true);
  const [textvalue, setTextValue] = useState("");
  const [editContent] = useMutation(EditContent);
  const [deleteJob] = useMutation(DeleteJob);

  const handleClickEdit = (e) => {
    setIsDisable(false);
    setIsHiding(false);
  };

  const handleClickSend = () => {
    //send the call Mutation to DB for change the content
    editContent({
      variables: { id: job.id, content: textvalue },
    });

    //hide the send button
    setIsHiding(true);
    //cleanup the values
    setTextValue("");

    //setup Disable to true
    setIsDisable(true);
  };

  const handleDelete = () => {
    deleteJob({
      variables: { id: job.id },
    });
  };

  return (
    <div className='flex justify-center mb-1'>
      <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm'>
        <h5 className='text-gray-900 text-xl leading-tight font-medium mb-2'>
          {job.title}
        </h5>
        <div className='text-gray-700 text-base mb-4'>
          {/* {job.content} */}
          <textarea
            name=''
            id=''
            cols='30'
            rows='3'
            placeholder={job.content}
            disabled={isDisabled}
            onChange={(e) => setTextValue(e.target.value)}
          />
        </div>
        {!isHiding && (
          <button
            type='button'
            className=' inline-block px-6 py-2.5 bg-green-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
            onClick={handleClickSend}>
            send
          </button>
        )}
        <button
          type='button'
          className=' inline-block px-6 py-2.5 bg-yellow-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          onClick={handleClickEdit}>
          Edit
        </button>
        <button
          type='button'
          onClick={handleDelete}
          className=' inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
