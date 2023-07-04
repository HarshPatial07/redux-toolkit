import React from 'react'
import { useDispatch } from 'react-redux'
import { styled } from 'styled-components'
// import { clearAllUsers } from '../store/slices/UserSlice'
import { clearAllUsers } from '../store/actions'
const DeleteAllUser = () => {
  const dispatch =useDispatch();
  const deleteUsers=()=>{
    dispatch(clearAllUsers());
  }
  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={deleteUsers}>Clear All</button>
    </Wrapper>
  )
}
const Wrapper= styled.section`
.clear-btn{
  text-transform: capitalize;
  background-color: #db338a;
}`

export default DeleteAllUser