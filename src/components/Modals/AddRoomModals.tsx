import React, { useContext } from 'react'
import { Form, Modal, Input } from 'antd'
import { AppContext } from '../../Context/AppProvider'

const AddRoomModals = () => {
    const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext)
    const [form] = Form.useForm()
    const handleOK = () => {

        setIsAddRoomVisible(false)
    }

    const handleCancel = () => {
        setIsAddRoomVisible(false)
    }
    
    return (
        <div>
            <Modal
                title="Create room"
                visible={false}
                onOk={handleOK}
                onCancel={handleCancel}
            >
                <Form form={form}>
                    <Form.Item label="Room Name" name="name">
                        <Input placeholder='Enter room name'/>
                    </Form.Item>
                    <Form.Item label="Description" name="name">
                        <Input.TextArea placeholder='Enter description'/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AddRoomModals