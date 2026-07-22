type RankingProps = {
  rank: number;
  team: string;
};

export default function PowerRanking({
  rank,
  team,
}: RankingProps) {
  return (
    <p>
      {rank}. {team}
    </p>
  );
}
