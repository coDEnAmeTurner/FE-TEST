import HomeDiv from "./HomeDiv";
import OuterDiv from "./OuterDiv";

const Surrounder = ({ strState }) => {
  console.log("Surrounder rendered");

  return (
    <OuterDiv>
      <HomeDiv strState={strState} />
    </OuterDiv>
  );
};

export default Surrounder;
