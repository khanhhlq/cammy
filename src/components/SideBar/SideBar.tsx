import React from 'react';
import { Row, Col } from 'antd';
import styled from '@emotion/styled';
import UserInfo from '../UserInfo/UserInfo';
import RoomList from '../RoomList/RoomList';

const SideBarStyled = styled.div`
  background-color: #242526;
  height: 100vh;
  color: white;
`
export default function Sidebar() {
  return (
    <SideBarStyled>
      <Row>
        <Col span={24}>
          <UserInfo />
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </SideBarStyled>
  );
}