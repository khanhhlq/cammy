import React from 'react'
import { Button, Avatar, Typography } from 'antd'
import styled from '@emotion/styled';
import { auth, db } from '../../firebase/config'
import { AuthContext } from '../../Context/AuthProvider';

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .username{
    color: white;
    margin-left: 5px;
  }
`
const UserInfo = () => {
  const { 
    user: { displayName, photoURL },
  } = React.useContext(AuthContext)
  
  return (
    <WrapperStyled>
        <div>
            <Avatar src={photoURL}>
              {photoURL ? '' : displayName?.charAt(0).toUpperCase()}
            </Avatar>
            <Typography.Text className='username'>{displayName}</Typography.Text>
        </div>
        <Button ghost onClick={() => auth.signOut()}>Đăng xuất</Button>
    </WrapperStyled>
  )
}

export default UserInfo