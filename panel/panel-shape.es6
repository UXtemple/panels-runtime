import { PropTypes } from 'react';

export default PropTypes.shape({
  app: PropTypes.string.isRequired,
  data: PropTypes.object,
  typeName: PropTypes.string.isRequired
});
