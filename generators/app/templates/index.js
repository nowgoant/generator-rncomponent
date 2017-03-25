import React, {Component, PropTypes} from 'react';
import Text from 'Text';
import View from 'View';
// 自定义
import styles from './styles';
export default class ActionSheet extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: View.propTypes.style
  };
  static defaultProps = {}; // 注意这里有分号
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>hihi</Text>
      </View>
    );
  }
}
