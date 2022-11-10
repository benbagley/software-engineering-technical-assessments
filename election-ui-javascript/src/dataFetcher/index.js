import { fetchResultData, fetchCandidateData } from '../fakeAPI'; // Let's imagine this is an external service that we are calling via https

async function fetchResults() {
  const partyData = await fetchResultData();
  const candidateData = fetchCandidateData();

  return { partyData, candidateData };
}

export default fetchResults;
