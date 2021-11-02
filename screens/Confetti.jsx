import React from "react";
import ConfettiCannon from "react-native-confetti-cannon";

export default class Confetti extends React.PureComponent {
  explosion;

  handleSomeKindOfEvent = () => {
    this.explosion && this.explosion.start();
  };

  render() {
    return (
      <ConfettiCannon
        count={200}
        origin={{ x: -10, y: 0 }}
        autoStart={false}
        ref={(ref) => (this.explosion = ref)}
      />
    );
  }
}
