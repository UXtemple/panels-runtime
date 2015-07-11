import { Actions as routerActions, getters as routerGetters } from 'panels-router';
import { connect } from 'redux/react';
import { getters as contextsGetters } from 'panels-contexts';
import { getters as typesGetters } from 'panels-types';
import { Provider } from 'redux/react';
import panelShape from './panel-shape';
import React, { Component, PropTypes } from 'react';

@connect(({contexts, router, types}, {context, panel: {app, typeName}}) => ({
  after: routerGetters.after(router, context),
  redux: contextsGetters.find(contexts, app),
  Type: typesGetters.find(types, app, typeName)
}))
export default class PanelInnerContainer extends Component {
  getChildContext() {
    const isActive = path => this.props.after && `${this.props.context}${path}` === this.props.after.context;
    const navigate = toUri => this.props.dispatch(routerActions.navigate(`${this.props.context}${toUri}`));
    return { isActive, navigate };
  }

  render() {
    const { after, dispatch, panel: { data }, redux, Type } = this.props;
    const type = () => <Type {...data} after={after} style={this.props.style} />;
    return redux ? <Provider redux={redux}>{type}</Provider> : type();
  }

  static childContextTypes = {
    isActive: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  }

  static propTypes = {
    after: PropTypes.shape({
      context: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired
    }),
    context: PropTypes.string.isRequired,
    panel: panelShape.isRequired,
    redux: PropTypes.shape({
      subscribe: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired,
      getState: PropTypes.func.isRequired
    })
  }
}
