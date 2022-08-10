import { useContext } from 'react'
import { Form, Modal, Input } from 'antd'
import { AppContext } from '../../Context/AppProvider'
import { addDocument } from '../../firebase/service'
import { AuthContext } from '../../Context/AuthProvider'

const AddRoomModals = () => {
    const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext)
    const { user:  { uid } } = useContext(AuthContext)
    const [form] = Form.useForm()
    const handleOk = () => {
        addDocument('rooms', { ...form.getFieldsValue(), members: [uid] });
        setIsAddRoomVisible(false)

        form.resetFields()
    }

    const handleCancel = () => {
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

export default AddRoomModals