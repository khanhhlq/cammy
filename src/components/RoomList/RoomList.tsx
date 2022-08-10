import React, { useId } from "react";
import { Collapse, Typography, Button} from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import styled from '@emotion/styled';
import { AppContext } from "../../Context/AppProvider";

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
    const { rooms, setIsAddRoomVisible } = React.useContext(AppContext);
    
    const handleAddRoom = () => {
        setIsAddRoomVisible(true)
    }

    return (
        <Collapse defaultActiveKey={['1']} ghost>
            <PanelStyled header="Danh sách phòng" key='1'>
                {rooms.map((room:any) => 
                    <LinkStyled key={room.id}>
                        {room.name}
                    </LinkStyled>
                )}
                <Button type="text" className="add-room" icon={<PlusSquareOutlined />} onClick={handleAddRoom}>
                    Thêm phòng
                </Button>
            </PanelStyled>
        </Collapse>
    )
}