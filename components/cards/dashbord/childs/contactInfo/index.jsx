import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Modal, Input, Form } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faCheck } from '@fortawesome/free-solid-svg-icons';

const { TextArea } = Input;

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(15vh);
  margin: auto auto;
  background-color: white;
  padding: 10px 50px;
`;

const ParagraphNoMargin = styled.p`
  margin: 0;
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
  border-radius: 8px;
`;

const ButtonIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const SuccessIcon = styled(FontAwesomeIcon)`
  color: green;
  font-size: 1rem;
`;

function ContactInfo({ contactInfo, currentStep }) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [okButtonText, setOkButtonText] = useState('Send');
  const [emailContent, setEmailContent] = useState({
    to: `${contactInfo[currentStep].contact.email}`,
    message: '',
  });

  useEffect(() => {}, [contactInfo]);

  const sendMail = () => {
    setOkButtonText('Sender e-post');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOkButtonText(
        <>
          <SuccessIcon icon={faCheck} />
          Sendt
        </>
      );
    }, 2000);

    setTimeout(() => {
      setVisible(false);
    }, 3500);
  };

  const toggleModal = () => {
    setVisible(true);
    setOkButtonText('Send');
    setEmailContent({
      to: `${contactInfo[currentStep].contact.email}`,
      message: '',
    });
  };

  const updateValue = (event) => {
    setEmailContent({
      to: `${contactInfo[currentStep].contact.email}`,
      message: event.target.value,
    });
  };

  return (
    <>
      <ContactContainer>
        {console.log(currentStep)}
        <h3>{contactInfo[currentStep].contact.title}</h3>
        <ParagraphNoMargin>
          {contactInfo[currentStep].contact.contactPerson}
        </ParagraphNoMargin>
        <ParagraphNoMargin>
          {contactInfo[currentStep].contact.phone}
        </ParagraphNoMargin>
        <ParagraphNoMargin>
          {contactInfo[currentStep].contact.email}
        </ParagraphNoMargin>
        <StyledButton
          type="button"
          icon={<ButtonIcon icon={faEnvelopeOpenText} />}
          onClick={toggleModal}
        >
          Send e-post
        </StyledButton>
        <Modal
          visible={visible}
          centered
          title="Send e-post"
          okText={okButtonText}
          cancelText="Avbryt"
          onCancel={() => setVisible(false)}
          onOk={sendMail}
          confirmLoading={loading}
          maskClosable
        >
          <label htmlFor="emailArea">{`Til: ${contactInfo[currentStep].contact.email}`}</label>
          <TextArea
            placeholder="Skriv e-post innhold her.."
            prefix={<FontAwesomeIcon icon={faEnvelopeOpenText} />}
            name="emailArea"
            onChange={updateValue}
            value={emailContent.message}
          />
        </Modal>
      </ContactContainer>
    </>
  );
}

export default ContactInfo;
