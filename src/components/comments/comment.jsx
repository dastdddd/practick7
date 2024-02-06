import React from 'react';
import { useGetCommentQuery } from '../../http/http';

const Comment = () => {
  const { data: dataComment, error: isErrorComm, isLoading: isLoadingComm } = useGetCommentQuery('');

  if(isLoadingComm){
    return <h1>Loading...</h1>
  }

  if(isErrorComm){
    return <h1>Errors...</h1>
  }

  //console.log(dataComment);

  return (
    <div>
      {
        dataComment && dataComment.map(item=> <p key={item.id}>{item.name}</p>)
      }
    </div>
  );
};

export default Comment;