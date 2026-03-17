import { Box } from "theme-ui";
import Image from "components/image";

const Progressbar = ({ currentWidth, togglePlay, handleClick, ...props }) => {
  let c = Math.PI * (35 * 2); // 35 is circle r's value
  let pct = ((100 - currentWidth) / 100) * c;

  return (
    <Box sx={styles.progressbar} {...props}>
      <Box
        as="svg"
        viewBox="0 0 80 80"
        sx={styles.svg}
      >
        <circle
          fill="transparent"
          style={styles.circleStyle}
          stroke="rgba(255,255,255,0.2)"
        />
        <circle
          stroke="#fff"
          style={{ ...styles.circleStyle, strokeDashoffset: pct }}
        />
      </Box>
      <Box as="button" sx={styles.button} onClick={handleClick}>
        <Image
          style={{ marginLeft: togglePlay ? "3px" : 0 }}
          src={togglePlay ? "/assets/images/icons/play.png" : "/assets/images/icons/pause.png"}
          alt="play pause icon"
        />
      </Box>
    </Box>
  );
};

export default Progressbar;

const styles = {
  progressbar: {
    backgroundColor: (theme) => theme.colors.primary,
    display: "inline-flex",
    position: "relative",
  },
  svg: {
    height: "50px",
    width: "50px",
    maxWidth: "50px",
    transform: "rotate(-90deg)",
  },
  circleStyle: {
    r: "35",
    cx: "40",
    cy: "40",
    fill: "transparent",
    strokeWidth: "5px",
    strokeDasharray: "219.91",
  },
  button: {
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
    display: "flex",
    left: "50%",
    padding: 0,
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    ":focus": {
      outline: 0,
    },
  },
};
