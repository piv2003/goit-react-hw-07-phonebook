import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  Button,
  ContactInfo,
  Name,
  Number,
  Spinner,
  UserIcon,
} from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin2Line } from 'react-icons/ri';

const ContactsListItem = ({ contact }) => {};

ContactsListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactsListItem;
