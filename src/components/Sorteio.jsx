import { Card } from "./Card";
import { connect } from "react-redux";
function Sorteio(props) {
  const { min, max } = props;
  return (
    <Card title="Sorteio dos números" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{parseInt(Math.random() * (max - min)) + min}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps)(Sorteio);
