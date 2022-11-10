import './Scorecard.css';

function Scorecard({ results }) {
  if (!results || results.length === 0) {
    return <div>No results</div>;
  }

  let scores = [];
  for (let i = 0; i < results.partyData.results.length; i++) {
    scores.push(
      <tr
        key={i}
        className={
          results.partyData.isComplete &&
          results.partyData.results[i].votes >= 10400
            ? 'winner'
            : ''
        }
      >
        <td>{results.partyData.results[i].party}</td>
        <td>{results.candidateData[i].name}</td>
        <td>{results.partyData.results[i].votes}</td>
      </tr>
    );
  }

  return (
    <div className="Scorecard">
      <table className="Scorecard-table">
        <thead>
          <tr>
            <th>Party</th>
            <th>Candidate</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>{scores}</tbody>
      </table>
    </div>
  );
}

export default Scorecard;
