const getDateDifference = ({startDate, endDate}: {
    startDate: Date;
    endDate: Date;
}) => {
  const dateDifference = endDate.getTime() - startDate.getTime();

  return dateDifference;
};

const getHumanizedTime = (date: number) => {
    const totalHours = Math.floor(date / (1000 * 60 * 60));
    const remainingMilliseconds = date % (1000 * 60 * 60);
    const totalMinutes = Math.floor(remainingMilliseconds / (1000 * 60));
  
    const durationString = `${totalHours}г ${totalMinutes}х`;
  
    return durationString;
 };
  
 const getFormattedTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  
    return formattedTime;
};

export {getDateDifference, getHumanizedTime, getFormattedTime}