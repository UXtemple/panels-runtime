import { connect } from 'redux/react';
import { findDOMNode } from 'react-dom';
import { getters } from 'panels-store';
import { noSpeed } from '../animate/utils';
import { Panels } from 'panels-ui';
import animate from '../animate';
import debounce from 'lodash.debounce';
import PanelContainer from '../panel';
import raf from 'raf';
import React, { Component, PropTypes } from 'react';
import routeShape from './route-shape';

const UPDATE_PUSH_LEFT_INTERVAL = 50;

@connect((state, {panels}) => ({appData: getters.find(state.store, panels[panels.length - 1].uri).appData}))
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
    this.updatePushLeft();

    this.updatePushLeftDebounced = debounce(() => this.updatePushLeft(), UPDATE_PUSH_LEFT_INTERVAL);
    window.addEventListener('resize', this.updatePushLeftDebounced, false);
    window.addEventListener('orientationchange', this.updatePushLeftDebounced, false);
  }
  componenWillUnmount() {
    window.removeEventListener('resize', this.updatePushLeftDebounced);
    window.removeEventListener('orientationchange', this.updatePushLeftDebounced);
  }

  updatePushLeft() {
    findDOMNode(this.refs.pushLeft).style.width =
      `calc(50vw - ${findDOMNode(this.refs.lastPanel).getClientRects()[0].width / 2}px)`;
  }

  componentDidUpdate() {
    this.animationState.temp = {
      currV: 0,
      currVals: findDOMNode(this.refs.container).scrollLeft,
      now: null
    };

    this.updatePushLeft();
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
    this.animationState.rafId = raf(() => {
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
    let containerStyle = {...style.container};
    const { appData } = this.props;
    if (appData) {
      if (appData.backgroundImage) {
        containerStyle.backgroundImage = `url(${appData.backgroundImage})`;

        if (appData.backgroundSize) {
          containerStyle.backgroundSize = appData.backgroundSize;
        }
      }

      if (appData.backgroundColor) {
        containerStyle.backgroundColor = appData.backgroundColor;
      }
    }

    const panels = this.props.panels.map(({context, uri}, i, list) =>
      <PanelContainer key={i} context={context} uri={uri} ref={i === list.length - 1 && 'lastPanel'} />);

    return (
      <div style={containerStyle} ref='container' onWheel={::this.cancelRaf}>
        <div ref='pushLeft' style={style.pushLeft} />
        <Panels>{panels}</Panels>
        <div style={style.pushRight} />
      </div>
    );
  }

  static propTypes = {
    appData: PropTypes.object,
    panels: PropTypes.arrayOf(routeShape).isRequired
  }
}

const style = {
  container: {
    flexDirection: 'row',
    WebkitFlexDirection: 'row',
    overflowX: 'auto',
    overflowY: 'hidden',
    WebkitOverflowScrolling: 'touch',
    transition: 'background-image 1s ease, background-color 1s ease'
  },
  pushLeft: {
    width: 'calc(50vw - 180px)'
  },
  pushRight: {
    width: '100vw'
  }
};
