import { useContext } from 'react'
import { Form, Modal, Input } from 'antd'
import { addDocument } from '../../firebase/service'
import { AuthContext } from '../../Context/AuthProvider'
import { AppContext } from '../../Context/AppProvider'

const AddRoomModal = () => {
    const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext)
    const { user:  { uid } } = useContext(AuthContext)
    const [form] = Form.useForm()
    const handleOk = () => {
        addDocument('rooms', { ...form.getFieldsValue(), members: [uid] });
        setIsAddRoomVisible(false)
        form.resetFields()
    }

    const handleCancel = () => {
        form.resetFields()
        setIsAddRoomVisible(false)
    }

    return (
        <div>
            <Modal
                title="Create room"
                visible={isAddRoomVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical">
                    <Form.Item label="Room Name" name="name">
                        <Input placeholder='Enter room name'/>
                    </Form.Item>
                    <Form.Item label="Description" name="description">
                        <Input.TextArea placeholder='Enter description'/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AddRoomModal