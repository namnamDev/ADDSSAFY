import React, { ReactElement } from "react";
import { useDrag } from "react-dnd";
import Image from "next/image";
import { XIcon } from "@heroicons/react/solid";
interface Props {
  title: string;
  hashTagPK: number;
  prop: string;
  image: string;
  cardDeleter?: (value: number) => void;
}

function Card({ title, hashTagPK, prop, image, cardDeleter }: Props): ReactElement {
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
  const onCardDelete = () => {
    if (cardDeleter) cardDeleter(hashTagPK);
  };
  return (
    <div
      ref={drag}
      className="w-max mx-2 h-6  px-2 rounded-2xl flex flex-row border-2 border-gray-300 hover:bg-gray-100 cursor-pointer "
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {image && <Image src={image} alt="아이콘" width="20px" height="1px" />}
      <div>&nbsp;&nbsp;</div>
      <div> {title}</div>
      <div>&nbsp;&nbsp;</div>
      {cardDeleter && <XIcon className="mt-1" onClick={onCardDelete} />}
    </div>
  );
}

export default Card;
