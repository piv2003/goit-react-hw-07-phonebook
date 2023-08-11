import { useDispatch, useSelector } from 'react-redux';
import { LabelFilter, InputFilter } from './Filter.styled';
import { onChangeFilter } from '../../Redux/filterSlice';
import { selectFilter } from '../../Redux/selectors';

export default Filter;
