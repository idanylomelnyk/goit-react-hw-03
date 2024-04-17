import {
  BsPersonCircle,
  BsFillTelephoneFill,
  BsXCircle,
} from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({ name, number, onDelete, id }) {
  return (
    <div className={css.card}>
      <div>
        <div className={css.row}>
          <span>
          <BsPersonCircle />
          </span>
          <p className={css.info}>{name}</p>
        </div>
        <div className={css.row}>
          <span>
            <BsFillTelephoneFill />
          </span>
          <p className={css.info}>{number}</p>
        </div>
      </div>
      <button className={css.button}
        onClick={() => {
          onDelete(id);
        }}
      >
        <BsXCircle className={css.btnIcon} />
      </button>
    </div>
  );
}
