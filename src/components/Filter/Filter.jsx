import PropTypes from 'prop-types';
import { Wrapper, Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';


import { getFilterContacts } from 'redux/selector';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {

    const dispatch = useDispatch();
    const filter = useSelector(getFilterContacts);
    console.log(filter);
    console.log(filterContacts);

    return (
        <Wrapper>
            <Label htmlFor='filter'>Find contacts by name</Label>
            <Input type='text' value={filter} onChange={evt => dispatch(filterContacts(evt.currentTarget.value))}></Input>
        </Wrapper>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};


