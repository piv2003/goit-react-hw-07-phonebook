import { useDispatch, useSelector } from 'react-redux';
import { LabelFilter, InputFilter } from './Filter.styled';
import { onChangeFilter } from '../../Redux/filterSlice';
import { selectFilter } from '../../Redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <LabelFilter>
      <span>Find contacts by name</span>
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        onChange={handleInputChange}
      />
    </LabelFilter>
  );
};

export default Filter;
