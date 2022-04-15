import tw, { css } from 'twin.macro';

export const AnimationCSS = css`
  @keyframes loader-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }

    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }

  @-webkit-keyframes play-button-pulse {
    0% {
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      -ms-transform: scale(0.5);
      -o-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -ms-transform: scale(1.2);
      -o-transform: scale(1.2);
      transform: scale(1.2);
      opacity: 0;
    }
  }

  @-moz-keyframes play-button-pulse {
    0% {
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      -ms-transform: scale(0.5);
      -o-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -ms-transform: scale(1.2);
      -o-transform: scale(1.2);
      transform: scale(1.2);
      opacity: 0;
    }
  }

  @-ms-keyframes play-button-pulse {
    0% {
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      -ms-transform: scale(0.5);
      -o-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -ms-transform: scale(1.2);
      -o-transform: scale(1.2);
      transform: scale(1.2);
      opacity: 0;
    }
  }

  @-o-keyframes play-button-pulse {
    0% {
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      -ms-transform: scale(0.5);
      -o-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -ms-transform: scale(1.2);
      -o-transform: scale(1.2);
      transform: scale(1.2);
      opacity: 0;
    }
  }

  @keyframes play-button-pulse {
    0% {
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      -ms-transform: scale(0.5);
      -o-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -ms-transform: scale(1.2);
      -o-transform: scale(1.2);
      transform: scale(1.2);
      opacity: 0;
    }
  }

  @keyframes heartBeat {
    0% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }

    25% {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);
    }

    40% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }

    60% {
      -webkit-transform: scale(1.04);
      -moz-transform: scale(1.04);
      -ms-transform: scale(1.04);
      -o-transform: scale(1.04);
      transform: scale(1.04);
    }

    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes cluster-animation {
    0%,
    100% {
      -webkit-box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
    }

    50% {
      -webkit-box-shadow: 0 0 0 7px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0 0 0 7px rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 0 7px rgba(0, 0, 0, 0.1);
    }
  }

  @keyframes bounce {
    0%,
    20%,
    60%,
    100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(-10px);
    }

    80% {
      transform: translateY(-5px);
    }
  }

  @-webkit-keyframes run {
    0% {
      top: -60%;
    }

    100% {
      top: 120%;
    }
  }

  @-ms-keyframes run {
    0% {
      top: -60%;
    }

    100% {
      top: 120%;
    }
  }

  @-o-keyframes run {
    0% {
      top: -60%;
    }

    100% {
      top: 120%;
    }
  }

  @keyframes run {
    0% {
      top: -60%;
    }

    100% {
      top: 120%;
    }
  }

  @-webkit-keyframes arrow_fade_move_down {
    0% {
      -webkit-transform: translate(0, -20px);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      -webkit-transform: translate(0, 20px);
      opacity: 0;
    }
  }

  @-moz-keyframes arrow_fade_move_down {
    0% {
      -moz-transform: translate(0, -20px);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      -moz-transform: translate(0, 20px);
      opacity: 0;
    }
  }

  @keyframes arrow_fade_move_down {
    0% {
      transform: translate(0, -20px);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      transform: translate(0, 20px);
      opacity: 0;
    }
  }

  @-webkit-keyframes growIn {
    0% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
      opacity: 0;
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes growIn {
    0% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
      opacity: 0;
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }

  @-webkit-keyframes mercuryTypingAnimation {
    0% {
      -webkit-transform: translateY(0px);
    }

    28% {
      -webkit-transform: translateY(-5px);
    }

    44% {
      -webkit-transform: translateY(0px);
    }
  }
`;
