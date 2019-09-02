import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({base, date, quote, conversionRate}) => (
  <Text style={styles.container}>{`
    1 ${base} = ${conversionRate} ${quote} as of ${moment(date).format('MMMM D, YYYY')}
  `}</Text>
);

LastConverted.propTypes = {
  base: PropTypes.string,
  date: PropTypes.object,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};

export default LastConverted;
