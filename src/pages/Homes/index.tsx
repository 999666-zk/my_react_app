import { FC, useState } from "react";
import { Button, Modal } from "antd";
import { styled } from "styled-components";
import Fabric from "@/components/fabric";
import "./scss/index.scss";

const Index: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="out-box">
        
        <Button className="btn" onClick={showModal} type="dashed">
          点击我开始编辑图片
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={"80%"}
          mask={true}
        >
          <div className="show-image-box">
            <Fabric />
          </div>
        </Modal>
      </div>
    </>
  );
};
export default Index;
