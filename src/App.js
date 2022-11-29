import "./styles.css";
import Display from "./Display";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="list">
        <div className="ROW-1">
          <Display name="Karan" class="b.com" />
          <Display name="Preet" class="bca" />
        </div>
        <div className="ROW-2">
          <Display name="Rehan" class="bca" />
          <Display name="Pooja" class="bca" />
        </div>
        <div className="ROW-3">
          <Display name="Harshita" class="bca" />
          <Display name="Bhavesh" class="bca" />
        </div>
        <div className="ROW-4">
          <Display name="Lajja" class="bca" />
          <Display name="karan" class="b.com" />
        </div>
      </div>
    </div>
  );
}
