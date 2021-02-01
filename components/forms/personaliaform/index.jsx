import styled from 'styled-components';
import { Input, Form } from 'antd';
import { useInputContext } from '../../../context/InputContext.jsx';

const FormItem = Form.Item;

const StyledForm = styled(Form)`
  background-color: ${(props) => props.theme.pallette.primary.light.shade3};
  padding: 5px;
  display: grid;
  column-gap: 5px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledPostOfficeWrapper = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5px;
`;

const PersonaliaForm = () => {
  const { personaliaFormikProvider } = useInputContext();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
  } = personaliaFormikProvider;

  return (
    <StyledForm layout="vertical">
      <FormItem
        label="Navn"
        required
        tooltip="Placeholder"
        validateStatus={errors.name && touched.name && 'error'}
        help={errors?.name && touched.name && 'Navn er obligatorisk'}
      >
        <Input
          name="name"
          placeholder="Ola Nordmann"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormItem>
      <FormItem
        label="Telefon"
        required
        tooltip="Placeholder"
        validateStatus={errors.phoneNumber && touched.phoneNumber && 'error'}
        help={
          errors?.phoneNumber &&
          touched.phoneNumber &&
          'Telefonnummer er obligatorisk'
        }
      >
        <Input
          name="phoneNumber"
          placeholder="99999999"
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormItem>
      <FormItem
        label="E-post"
        required
        tooltip="Placeholder"
        validateStatus={errors.email && touched.email && 'error'}
        help={errors?.email && touched.email && 'E-post er obligatorisk'}
      >
        <Input
          name="email"
          placeholder="ola@nordmann.no"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormItem>
      <FormItem
        label="Bedrift"
        tooltip="Placeholder"
        validateStatus={errors.company && touched.company && 'error'}
        help={errors?.company && touched.company && 'Invalid Bedrift'}
      >
        <Input
          name="company"
          placeholder="Gibbs AS"
          value={values.company}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormItem>
      <FormItem
        label="Hjemmeadresse"
        required
        tooltip="Placeholder"
        validateStatus={
          errors.responsibleHomeAddress &&
          touched.responsibleHomeAddress &&
          'error'
        }
        help={
          errors?.responsibleHomeAddress &&
          touched.responsibleHomeAddress &&
          'Hjemmeadresse er obligatorisk'
        }
      >
        <Input
          name="responsibleHomeAddress"
          placeholder="B R A Veien 4"
          value={values.responsibleHomeAddress}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormItem>

      <StyledPostOfficeWrapper>
        <FormItem
          label="Postnummer"
          required
          tooltip="Placeholder"
          validateStatus={
            errors.responsibleZipCode && touched.responsibleZipCode && 'error'
          }
          help={
            errors?.responsibleZipCode &&
            touched.responsibleZipCode &&
            'Postnummer er obligatorisk'
          }
        >
          <Input
            name="responsibleZipCode"
            placeholder="1757"
            value={values.responsibleZipCode}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormItem>
        <FormItem
          label="Poststed"
          required
          tooltip="Placeholder"
          validateStatus={
            errors.responsiblePostOffice &&
            touched.responsiblePostOffice &&
            'error'
          }
          help={
            errors?.responsiblePostOffice &&
            touched.responsiblePostOffice &&
            'Poststed er obligatorisk'
          }
        >
          <Input
            name="responsiblePostOffice"
            placeholder="Halden"
            value={values.responsiblePostOffice}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormItem>
      </StyledPostOfficeWrapper>
    </StyledForm>
  );
};

export default PersonaliaForm;