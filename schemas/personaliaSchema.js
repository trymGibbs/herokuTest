import * as yup from 'yup';

const personaliaSchema = yup.object({
  name: yup
    .string('Fyll inn fornavn og etternavn')
    .required('Navn er obligatorisk'),
  phoneNumber: yup
    .string('Fyll inn telefonnummer')
    .required('Telefonnummer er obligatorisk'),
  email: yup.string('Fyll inn e-post').required('E-post er obligatorisk'),
});

export default personaliaSchema;
