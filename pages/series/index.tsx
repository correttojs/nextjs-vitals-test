import _ from "lodash";

const dummyData = new Array(100).fill({ test: "test" });

const Series = () => {
  return (
    <section>
      <p>Series</p>
      <ul>
        <li>{_.chunk(dummyData, 3)}</li>
      </ul>
    </section>
  );
};

export default Series;
