import _ from "lodash";
import moment from "moment";

const Sports = () => {
  const fakeData = _.fill(Array(100), { data: "data" });
  moment();
  return (
    <section>
      <p>Sports</p>
      {fakeData.map(({ data }) => (
        <div>{data}</div>
      ))}
    </section>
  );
};

export default Sports;
