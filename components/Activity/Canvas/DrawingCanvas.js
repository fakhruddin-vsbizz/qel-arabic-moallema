import AuthContext from "@/components/store/auth-context";
import supabase from "@/supabaseClient";
import { useContext, useEffect, useRef, useState } from "react";

const DrawingCanvas = (props) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [statusData, setStatusData] = useState("");

  const authCtx = useContext(AuthContext);
  const id = authCtx.userEmail;

  const [isDrawing, setIsDrawing] = useState(false);
  const [image, setImage] = useState(false);
  console.log(image);

  //****************canvas Logic******************* */

  let canvas = canvasRef.current;

  let context;
  if (canvas) {
    context = canvas.getContext("2d");
  }
  useEffect(() => {
    canvas = canvasRef.current;
    canvas.width = 600;
    canvas.height = 500;

    context = canvas.getContext("2d");
    context.lineCap = "round";

    context.lineWidth = 5;
    contextRef.current = context;
  }, [id]);
  if (context) {
    context.strokeStyle = props.color;
  }
  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    setIsDrawing(true);
    nativeEvent.preventDefault();
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    nativeEvent.preventDefault();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const setToDraw = () => {
    contextRef.current.globalCompositeOperation = "source-over";
  };

  const setToErase = () => {
    contextRef.current.globalCompositeOperation = "destination-out";
  };

  const saveImageToLocal = (event) => {
    let link = event.currentTarget;
    link.setAttribute("download", "canvas.png");
    let image = canvasRef.current.toDataURL("image/png");
    link.setAttribute("href", image);
    setImage(event.currentTarget.href);

    console.log(id);

    if (id) {
      supabase
        .from("assignments")
        .insert({
          assignment_name: "letterPractice",
          student_id: id,
          batch_id: "Batch 1",
          submission: image,
          status: "submitted",
        })
        .then((data) => console.log(data))
        .catch((er) => console.log(er));
    }
  };

  return (
    <>
      <div className=" ">
        <canvas
          className=" bg-white border-1 rounded-lg shadow-lg border-2"
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        ></canvas>
        <div className="mt-8 ml-20">
          <button
            onClick={setToDraw}
            className=" px-4 py-2 bg-dark-purple rounded-md text-white ml-4 hover:bg-dark-purple hover:shadow-lg"
          >
            Draw
          </button>
          <button
            onClick={setToErase}
            className=" px-4 py-2 bg-dark-purple rounded-md text-white ml-4 hover:bg-dark-purple hover:shadow-lg"
          >
            Erase
          </button>
          <a
            className=" md:mt-40  p-3 bg-red-500 rounded-md text-white ml-4 hover:bg-red-600 hover:shadow-lg"
            id="download_image_link"
            href="download_link"
            onClick={saveImageToLocal}
          >
            Submit Activity
          </a>
        </div>
      </div>
    </>
  );
};

export default DrawingCanvas;
