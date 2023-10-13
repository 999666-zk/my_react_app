import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { toNumber, debounce } from "lodash";
import { Popover, Space } from "antd";

interface circleObjType {
  left: number;
  top: number;
  text: string | number;
}

function CanvasComponent() {
  const canvasRef = useRef(null);
  const [circleArray, setCircleArray] = useState([
    { left: 200, top: 101, text: "1" },
    { left: 400, top: 101, text: "2" },
    { left: 600, top: 101, text: "3" },
    { left: 101, top: 200, text: "4" },
  ]);

  const options = {
    width: 800,
    height: 500,
    backgroundColor: "#fff",
  };
  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, options);

    // 添加背景图像
    fabric.Image.fromURL(
      "https://w.wallhaven.cc/full/zy/wallhaven-zyxvqy.jpg",
      function (img) {
        img.scaleToWidth(options.width);
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
          scaleX: 1,
          scaleY: 1,
        });
      }
    );

    // 初始化结点
    circleArray.forEach((circleData) => {
      createCircle(circleData, canvas);
    });

    // 添加结点
    var circleIndex = circleArray.length + 1; // 初始化圆形序列号

    canvas.on("mouse:dblclick", (event) => {
      var pointer = canvas.getPointer(event.e);
      var x = pointer.x;
      var y = pointer.y;

      const targetObj = { left: x, top: y, text: `${circleIndex}` };

      createCircle(targetObj, canvas);
      // 添加
      setCircleArray((prevCircleArray) => [...prevCircleArray, targetObj]);

      circleIndex++;
    });
    canvas.renderAll();
  }, []);

  useEffect(() => {
    console.log(circleArray, "rr");
  }, [circleArray]);

  //   创建 序列圆
  const createCircle = (circleObj: circleObjType, canvas: any) => {
    const { left, top, text } = circleObj;

    // 创建一个圆形对象来表示标记或序列号
    let circle = new fabric.Circle({
      left: left,
      top: top,
      radius: 15, // 圆的半径
      fill: toNumber(text) < circleArray.length + 1 ? "red" : "green", // 填充颜色
      selectable: true,
      hasControls: false, // 允许选中
    });

    // 设置圆形对象的文本（序列号）
    let textObject = new fabric.Text(text.toString(), {
      left: left + 12, // 调整文本的位置，使其居中
      top: top + 8, // 调整文本的位置，使其居中
      fontSize: 14, // 文本字体大小
      fill: "white", // 文本颜色
    });

    const group = new fabric.Group([circle, textObject], {
      selectable: true,
    });

    // 添加群组到画布
    canvas.add(group);
    canvas.setActiveObject(group); // 选中新创建的群组

    // 选中
    group.on("selected", (event) => {
      //   moveCircles(event, text);
      console.log(`选中了${text}`);
    });

    // 移动
    group.on(
      "moving",
      // 这里需要做截流处理
      debounce(function (options) {
        const left = group.left;
        const top = group.top;
        console.log(
          `Circle ${text} moved to: left=${left}, top=${top}`,
          typeof left
        );

        // 更行数据
        setCircleArray((prevCircleArray) =>
          prevCircleArray.map((circle) =>
            circle.text === text ? { ...circle, left: left, top: top } : circle
          )
        );
      }, 1200)
    );

    // 重新渲染画布
    canvas.renderAll();
  };

  //   移动circle
  const moveCircles = (event: any, text: any) => {
    console.log(event, text, "move");
  };

  //   const createCard = (x, y, canvas) => {
  //     // 创建一个卡片（可以是自定义元素）
  //     const card = new fabric.Rect({
  //       left: x,
  //       top: y,
  //       width: 100,
  //       height: 50,
  //       fill: "lightblue",
  //       selectable: true,
  //     });

  //     // 添加文本到卡片
  //     const text = new fabric.Text("Card", {
  //       left: x + 10,
  //       top: y + 10,
  //       fill: "black",
  //     });

  //     // 创建一个 group 包含卡片和文本
  //     const cardGroup = new fabric.Group([card, text], {
  //       selectable: true,
  //     });

  //     canvas.add(cardGroup);
  //   };

  return (
    <>
      {/* <Space>
        <Popover content={"fffff"} title="Title" trigger="click"></Popover>
      </Space> */}
      <canvas ref={canvasRef} style={{ border: "1px solid #000" }}></canvas>;
    </>
  );
}

export default CanvasComponent;
