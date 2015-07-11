import { connect } from 'redux/react';
import { findDOMNode } from 'react-dom';
import { getters } from 'panels-router';
import { noSpeed } from 'react-motion/lib/utils';
import { Panels } from 'panels-ui';
import PanelContainer from './panel/container';
import React, { Component, PropTypes } from 'react';
import animate from 'react-motion/lib/spring/animate';

@connect(({router}) => ({panels: getters.panels(router)}))
export default class PanelsContainer extends Component {
  animationState = {
    endValue: 0,
    rafId: null,
    temp: {}
  };

  cancelRaf() {
    cancelAnimationFrame(this.animationState.rafId);
    this.animationState.rafId = null;
  }
  componentDidMount() {
    findDOMNode(this.refs.container).scrollLeft = findDOMNode(this.refs.lastPanel).offsetLeft;
  }
  componentDidUpdate() {
    this.animationState.temp = {
      currV: 0,
      currVals: findDOMNode(this.refs.container).scrollLeft,
      now: null
    };
    this.animationState.endValue = findDOMNode(this.refs.lastPanel).offsetLeft;
    this.raf(true, false);
  }
  componentWillUnmount() {
    this.cancelRaf();
  }

  raf(justStarted, isLastRaf) {
    if (justStarted && this.animationState.rafId !== null) {
      return;
    }
    this.animationState.rafId = requestAnimationFrame(() => {
      this.animationState.temp = animate(this.animationState.temp, {endValue: this.animationState.endValue, justStarted});

      findDOMNode(this.refs.container).scrollLeft = this.animationState.temp.currVals;

      const stop = noSpeed(this.animationState.temp.currV);
      if (stop && !justStarted) {
        if (isLastRaf) {
          this.animationState.rafId = null;
        } else {
          this.raf(false, true);
        }
      } else {
        this.raf(false, false);
      }
    });
  }

  render() {
    const panels = this.props.panels.map(({context, uri}, i, list) =>
      <PanelContainer key={i} context={context} uri={uri} ref={i === list.length - 1 && 'lastPanel'} />);

    return (
      <div style={style.container} ref='container' onWheel={::this.cancelRaf}>
        <div style={style.pushLeft} />
        <Panels>{panels}</Panels>
        <div style={style.pushRight} />
      </div>
    );
  }

  static propTypes = {
    panels: PropTypes.arrayOf(PropTypes.shape({
      context: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired
    })).isRequired
  }
}

const style = {
  container: {
    flexDirection: 'row',
    overflow: 'auto'
  },
  pushLeft: {
    width: 'calc(50vw - 180px)'
  },
  pushRight: {
    width: '100vw'
  }
};
