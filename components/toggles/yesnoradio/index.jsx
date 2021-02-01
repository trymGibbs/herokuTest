import { Radio } from 'antd';

const YesNoRadio = ({
  buttonStyle,
  disabled,
  name,
  onChange1,
  onChange2 = () => {},
}) => {
  const handleChange = (e) => {
    onChange1(e);
    onChange2(e);
  };

  return (
    <Radio.Group
      name={name}
      disabled={disabled}
      buttonStyle={buttonStyle}
      onChange={(e) => handleChange(e)}
    >
      <Radio.Button value>Ja</Radio.Button>
      <Radio.Button value={false}>Nei</Radio.Button>
    </Radio.Group>
  );
};

export default YesNoRadio;
