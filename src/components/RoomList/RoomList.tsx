import React, { useId } from "react";
import { Collapse, Typography, Button} from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import styled from '@emotion/styled';
import userFirestore from "../../hooks/userFirestore";
import { AuthContext } from "../../Context/AuthProvider";

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
    const { user: { uid } } = React.useContext(AuthContext)

    const roomsCondition = React.useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: useId
        }
    }, [uid])

    const rooms = userFirestore('rooms', roomsCondition)

    return (
        <Collapse defaultActiveKey={['1']} ghost>
            <PanelStyled header="Danh sách phòng" key='1'>
                {/* {rooms.map((room:any) => 
                    <LinkStyled key={room.id}>
                        {room.name}
                    </LinkStyled>
                )} */}
                <Button type="text" className="add-room" icon={<PlusSquareOutlined />}>Thêm phòng</Button>
            </PanelStyled>
        </Collapse>
    )
}