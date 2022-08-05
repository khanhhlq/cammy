import React from "react";
import { Collapse, Typography, Button} from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import styled from '@emotion/styled';

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
    &&& {
        .ant-collapse-header, p {
            color: white;
        }

        .ant-collapse-content-box{
            padding: 0 40px;
        }

        .add-room{
            color: white;
            padding: 0;
        }
    }
`
const LinkStyled = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;
`

export default function RoomList() { 
    return (
        <Collapse defaultActiveKey={['1']} ghost>
            <PanelStyled header="Danh sách phòng" key='1'>
                <LinkStyled>Room 1</LinkStyled>
                <LinkStyled>Room 2</LinkStyled>
                <LinkStyled>Room 3</LinkStyled>
                <LinkStyled>Room 4</LinkStyled>
                <Button type="text" className="add-room" icon={<PlusSquareOutlined />}>Thêm phòng</Button>
            </PanelStyled>
        </Collapse>
    )
}