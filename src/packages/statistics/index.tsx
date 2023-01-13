import { useEffect, useState } from "react";
import { getUserStatistics } from "../../api";

export default function Statistics() {

  const [stat, setStat] = useState({
    learnedWords: 0,
    optional:	{}
  });

  const id = "6317c3012b12ac001657aceb";
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTdjMzAxMmIxMmFjMDAxNjU3YWNlYiIsImlhdCI6MTY2MjY0NDk1NywiZXhwIjoxNjYyNjU5MzU3fQ.PtX348svlxB_QIRRoVN3m5tg9sKh-OMaMDTduOtSb9U";
  useEffect(() => {
    const getStatistic = async () => {
      const statistic = await getUserStatistics(id, token);
      setStat(statistic);
      console.log('statistic', statistic);
      return statistic;
    };
    getStatistic();
  }, []);

  console.log("stat", stat);

  return (
    <div className="user-statistic">
      <h3>Your statistic</h3>
      <span>you learned: {stat.learnedWords} words</span>
    </div>
  );
}