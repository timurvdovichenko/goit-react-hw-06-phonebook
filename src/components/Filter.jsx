import PropTypes from 'prop-types';
import { Form, Label, Input } from './Common.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Form filterForm={'border-style: none; margin-bottom: 0;'}>
      <Label>
        Find contacts by name
        <Input
          type="text"
          title="filter"
          value={value}
          onChange={onChange}
          inputFilter={'margin: 0; margin-top: 10px;'}
        />
      </Label>
    </Form>
  );
};

export default Filter;

Filter.propTypes = { value: PropTypes.string.isRequired, onChange: PropTypes.func.isRequired };
