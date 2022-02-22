import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';

const Question = ({ title, info }) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="question">
      <header>
        <h4> {title}</h4>
        <button className="btn" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {open && <p>{info}</p>}
    </article>
  );
};

export default Question;
