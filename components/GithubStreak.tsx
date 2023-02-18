function StreakStats() {
  return (
    <div className="">
      <iframe
        // className="dark:bg-indigo-600"
        // width="100%"
        // height="300"
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        src={`https://streak-stats.demolab.com?user=korbal&theme=nightowl&hide_border=false&date_format=%5BY%20%5DM%20j&border_radius=5`}
      />
    </div>
  );
}

export default StreakStats;
