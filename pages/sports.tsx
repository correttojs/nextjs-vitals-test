import _ from "lodash";

const Sports = () => {
  const fakeData = _.fill(Array(100), { data: "data" });

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
