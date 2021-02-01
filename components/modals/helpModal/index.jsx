import { Modal, Button } from 'antd';

const HelpModal = ({ modalVisible, setModalVisible }) => (
  <Modal
    visible={modalVisible}
    centered
    title="Hjelp"
    width={1500}
    height
    onCancel={() => setModalVisible(false)}
    footer={[
      <Button type="primary" key="Ok" onClick={() => setModalVisible(false)}>
        Lukk
      </Button>,
    ]}
  >
    <p>Innhold</p>
    <p>Innhold</p>
    <p>Innhold</p>
    <p>Innhold</p>
    <p>Innhold</p>
    <p>Innhold</p>
    <p>Innhold</p>
    <p>Innhold</p>
    <p>Innhold</p>
    <p>Innhold</p>
    <p>Innhold</p>
    <p>Innhold</p>
    <p>Innhold</p>
  </Modal>
);

export default HelpModal;
