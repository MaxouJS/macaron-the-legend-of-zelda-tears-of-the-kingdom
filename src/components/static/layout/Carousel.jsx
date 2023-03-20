import Timer from "./Timer";

export default function Carousel(props) {
  return (
    <div className={`absolute ${props.bottomPosition}`}>
      <ul className="flex items-center space-x-4">
        {
          (
            props.scenes.map((s, index) => (
              <li key={index}>
                {
                  (
                    s.isActive
                  ) ? (
                    <Timer
                      isActive={s.isActive}
                      time={s.time}
                    />
                  ) : (
                    <Timer
                      isActive={s.isActive}
                      time={s.time}
                    />
                  )
                }
              </li>
            ))
          )
        }
      </ul>
    </div>
  );
};
