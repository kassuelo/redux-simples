import "./Intervalo.css";
import { Card } from "./Card";
export function Intervalo(props) {
  return (
    <Card title="Intervalo de números" red>
      <div className="intervalo">
        <span>
          <strong> Mínimo: </strong>
          <input type="number" value={0} readOnly />
        </span>
        <span>
          <strong> Máximo: </strong>
          <input type="number" value={10} />
        </span>
      </div>
    </Card>
  );
}
