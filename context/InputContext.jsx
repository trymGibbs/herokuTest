import { createContext, useContext, useMemo } from 'react';
import { useFormik } from 'formik';
import personaliaSchema from '../schemas/personaliaSchema';

const Context = createContext();

const InputContext = ({ children }) => {
  const personaliaFormik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: null,
      email: '',
      company: '',
      responsibleHomeAddress: '',
      responsibleZipCode: null,
      responsiblePostOffice: '',
    },
    validationSchema: personaliaSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const personaliaFormikProvider = useMemo(() => ({ ...personaliaFormik }), [
    personaliaFormik,
  ]);

  const basicInfoFormik = useFormik({
    initialValues: {
      serving: false,
      liquor: false,
      fireHazard: false,
      roadBlocks: false,
      pollution: false,
      soundSystem: false,
      provisionalElFacilities: false,
    },
    validationSchema: personaliaSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const basicInfoFormikProvider = useMemo(() => ({ ...basicInfoFormik }), [
    basicInfoFormik,
  ]);

  const otherInfoFormik = useFormik({
    initialValues: {
      title: '',
      type: '',
      address: '',
      contributors: 0,
      security: 0,
      ageLimit: null,
      open: false,
      indoorOutDoor: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
    },
    validationSchema: personaliaSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const otherInfoFormikProvider = useMemo(() => ({ ...otherInfoFormik }), [
    otherInfoFormik,
  ]);

  const contextValues = {
    personaliaFormikProvider,
    basicInfoFormikProvider,
    otherInfoFormikProvider,
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

export const useInputContext = () => useContext(Context);

export default InputContext;
