import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <div style={{ width: "300px", marginLeft: "-150px" }} className="felx flex-col justify-center items-center" >
        <p
          style={{
            fontSize: 18,
            marginLeft: "80px",
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {Number(progress.toFixed(0))}%
        </p>
        <div
          style={{
            margin: "auto",
            width: "300px",
            height: "10px",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              width: progress.toFixed(2) + "%",
              transition: "all .5s",
              height: "10px",
              borderRadius: "5px",
              background: "#b0050e",
            }}
          ></div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
