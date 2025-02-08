import React from "react";

interface CardProps {
  title: string;
  content: string;
  link?: string;
}



const Card: React.FC<CardProps> = ({ title, content, link }) => {
  return (
    <div className="bg-slate-50 text-black p-12 rounded-lg shadow min-h-52">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{content}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-4 block"
        >
          Ver Práctica
        </a>
      )}
    </div>
  );
};

export default Card;
