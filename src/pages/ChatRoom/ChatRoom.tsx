import { Row, Col } from "antd"
import ChatWindow from "../../components/ChatWindow/ChatWindow"
import SlideBar from '../../components/SideBar/SideBar'

export default function ChatRoom() {
    return(
        <Row>
            <Col span={6}><SlideBar /></Col>
            <Col span={18}><ChatWindow /></Col>
        </Row>
    )
}
