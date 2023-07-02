import { Form, Label, Input } from './Common.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

const Filter = () => {
  const valueRedux = useSelector(state => state.filter.value);
  const dispatch = useDispatch();
  return (
    <Form filterForm={'border-style: none; margin-bottom: 0;'}>
      <Label>
        Find contacts by name
        <Input
          type="text"
          title="filter"
          value={valueRedux}
          onChange={e => {
            dispatch(updateFilter(e.currentTarget.value));
          }}
          inputFilter={'margin: 0; margin-top: 10px;'}
        />
      </Label>
    </Form>
  );
};

export default Filter;
