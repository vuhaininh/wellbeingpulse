import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import Star from "./Star";
import "./style.scss";
export { Star };

export default class Rater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.rating,
      lastRating: props.rating,
      isRating: false
    };
  }
  callback(args) {
    let { onRate: callback } = this.props;
    callback && callback(args);
  }
  willRate(rating, e) {

    this.setState({
      rating,
      isRating: true
    });
    this.callback({ ...e, rating });
  }
  onRate(rating, e) {
    this.setState({
      rating,
      lastRating: rating
    });
    this.callback({ ...e, rating });
  }
  onCancelRate(e) {
    let { lastRating: rating } = this.state;
    this.setState({
      rating,
      isRating: false
    });
    this.callback({ ...e, rating });
  }
  componentWillReceiveProps(nextProps) {
    let { rating } = nextProps;
    if (rating !== this.state.rating) {
      this.setState({
        rating
      });
    }
  }
  render() {
    let { total, interactive, children, ...restProps } = this.props;
    let { rating, isRating } = this.state;
    children = Children.toArray(children);
    delete restProps.rating;
    delete restProps.onRate;
    let nodes = Array.apply(null, Array(total)).map((_, i) => {
      let starProps = {
        isActive: !isRating && rating - i >= 1,
        willBeActive: isRating && i < rating,
        isActiveHalf: !isRating && (rating - i >= 0.5 && rating - i < 1),
        isDisabled: !interactive
      };

      return (
        <div
          key={`star-${i}`}
          onClick={interactive ? this.onRate.bind(this, i + 1) : null}
          onMouseEnter={interactive ? this.willRate.bind(this, i + 1) : null}
        >
          {children.length ? (
            React.cloneElement(children[i % children.length], starProps)
          ) : (
            <Star {...starProps} />
          )}
        </div>
      );
    });
    if (interactive) {
      return (
        <div
          className="react-rater"
          onMouseLeave={this.onCancelRate.bind(this)}
          {...restProps}
        >
          {nodes}
        </div>
      );
    } else {
      return (
        <div className="react-rater" {...restProps}>
          {nodes}
        </div>
      );
    }
  }
}

Rater.propTypes = {
  total: PropTypes.number,
  rating: PropTypes.number,
  interactive: PropTypes.bool,
  children: PropTypes.any,
  onRate: PropTypes.func
};

Rater.defaultProps = {
  total: 5,
  rating: 0,
  interactive: true
};
