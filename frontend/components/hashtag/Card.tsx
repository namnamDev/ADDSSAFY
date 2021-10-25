import React, { ReactElement } from "react";
import { useDrag } from "react-dnd";
import Image from "next/image";
interface Props {
  title: string;
  hashTagPK: Number;
  prop: string;
  image: string;
}

function Card({ title, hashTagPK, prop, image }: Props): ReactElement {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "tag",
    item: {
      hashTagPK: hashTagPK,
      title: title,
      prop: prop,
      image: image,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className="w-max mx-2  px-2 rounded-2xl flex flex-row border-2 border-gray-300"
      style={{ opacity: isDragging ? 1 : 1 }}
    >
      {image && <Image src={image} alt="아이콘" width="20px" height="1px" />}
      <div>&nbsp;&nbsp;</div>
      <div> {title}</div>
    </div>
  );
}

export default Card;
