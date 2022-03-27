import React, { useState } from "react";
import styled from "styled-components";
import { Field, Formik, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";
import { init, send } from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { SyncLoader } from "react-spinners";

import colors from "../styles/colors";

const {
  REACT_APP_EMAILJS_USER_ID = "",
  REACT_APP_EMAILJS_TEMPLATE_ID = "",
  REACT_APP_EMAILJS_SERVICE_ID = "",
} = process.env;

init(REACT_APP_EMAILJS_USER_ID || "");

const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Inner = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  color: ${colors.WHITE};
  margin-top: 20px;
`;

const Title = styled(Label)`
  font-size: 50px;
  font-weight: 600;
  padding-bottom: 2px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

const Subtitle = styled(Label)`
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Row = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const RowItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 15px 0px;
`;

const Separator = styled.div`
  width: 10px;
`;

const StyledField = styled(Field)`
  padding: 20px 10px;
  font-size: 17px;
`;

const StyledErrorMessage = styled.div`
  color: ${colors.PRIMARY};
  font-size: 12px;
`;

const StyledButton = styled.button`
  padding: 20px 10px;
  border-radius: 10px;
  border: 1px solid ${colors.PRIMARY};
  background-color: ${colors.PRIMARY};
  color: ${colors.WHITE};
  font-size: 17px;
  cursor: pointer;
`;

const StyledTextArea = styled.textarea`
  padding: 20px 10px;
  min-height: 200px;
  max-height: 200px;
  resize: none;
  font-size: 17px;
`;

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async ({
    email,
    firstName,
    lastName,
    message,
  }: {
    email: string;
    firstName: string;
    lastName: string;
    message: string;
  }) => {
    try {
      setLoading(true);
      await send(REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, {
        name: `${firstName} ${lastName}`,
        email,
        message,
      });
      toast.success("Message sent successfully!");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error("Error occurred while sending message. Please try again.");
    }
  };

  return (
    <Container>
      <Inner>
        <Title>Let's Chat!</Title>
        <Subtitle>
          Whether you have a question, want to start a project, or simply want
          to connect, feel free to send me a message :). I'd love to hear from
          you!
        </Subtitle>
        <Formik
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            message: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Please enter a valid email.")
              .required("Please enter a valid email."),
            firstName: Yup.string().required("Please enter your first name."),
            lastName: Yup.string().required("Please enter your last name."),
            message: Yup.string().required("Please enter your your message."),
          })}
          onSubmit={handleOnSubmit}
        >
          {({ submitForm }) => (
            <Form>
              <Row>
                <RowItem>
                  <StyledField
                    disabled={loading}
                    type="text"
                    placeholder="First name"
                    name="firstName"
                  />
                  <ErrorMessage
                    name="firstName"
                    render={(message) => (
                      <StyledErrorMessage>{message}</StyledErrorMessage>
                    )}
                  />
                </RowItem>
                <Separator />
                <RowItem>
                  <StyledField
                    disabled={loading}
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                  />
                  <ErrorMessage
                    name="lastName"
                    render={(message) => (
                      <StyledErrorMessage>{message}</StyledErrorMessage>
                    )}
                  />
                </RowItem>
              </Row>
              <Row>
                <RowItem>
                  <StyledField
                    disabled={loading}
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    render={(message) => (
                      <StyledErrorMessage>{message}</StyledErrorMessage>
                    )}
                  />
                </RowItem>
              </Row>
              <Row>
                <RowItem>
                  <StyledField type="text" placeholder="Message" name="message">
                    {({ field }: FieldProps) => {
                      return (
                        <StyledTextArea
                          disabled={loading}
                          {...field}
                          placeholder="Message"
                        />
                      );
                    }}
                  </StyledField>
                  <ErrorMessage
                    name="message"
                    render={(message) => (
                      <StyledErrorMessage>{message}</StyledErrorMessage>
                    )}
                  />
                </RowItem>
              </Row>
              <Row>
                <RowItem>
                  <StyledButton onClick={submitForm} disabled={loading}>
                    {loading ? (
                      <SyncLoader size={8} color={colors.WHITE} />
                    ) : (
                      "Submit"
                    )}
                  </StyledButton>
                </RowItem>
              </Row>
            </Form>
          )}
        </Formik>
        <ToastContainer limit={2} theme="dark" position="bottom-right" />
      </Inner>
    </Container>
  );
};

export default Contact;
