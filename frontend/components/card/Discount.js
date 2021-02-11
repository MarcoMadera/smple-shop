export default function Discount({ discount }) {
  return (
    <span>
      -{discount}%
      <style jsx>
        {`
          span {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            color: #fff;
            background-color: rgba(72, 82, 223, 0.801);
            top: 10px;
            right: 10px;
          }
        `}
      </style>
    </span>
  );
}
