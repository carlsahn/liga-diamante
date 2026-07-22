type MatchupProps = {
  homeTeam: string;
  awayTeam: string;
};

export default function MatchupCard({
  homeTeam,
  awayTeam,
}: MatchupProps) {
  return (
    <div>
      <h3>🏈 Weekly Matchup</h3>

      <p>
        {homeTeam} vs {awayTeam}
      </p>
    </div>
  );
}
